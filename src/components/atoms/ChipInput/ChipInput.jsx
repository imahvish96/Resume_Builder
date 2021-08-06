import React from 'react';
import './style.css';
import { ResumeContext } from '../../../Context';

class ChipInput extends React.Component {
  static contextType = ResumeContext;
  state = {
    value: '',
    error: null,
  };

  handleKeyDown = evt => {
    const { setSkills, skills } = this.context;
    if (['Enter', 'Tab', ','].includes(evt.key)) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value && this.isValid(value)) {
        setSkills([...skills, this.state.value]);
        this.setState({
          value: '',
        });
      }
    }
  };

  handleChange = evt => {
    this.setState({
      value: evt.target.value,
      error: null,
    });
  };

  handleDelete = item => {
    const { setSkills, skills } = this.context;
    setSkills(skills.filter(i => i !== item));
  };

  isValid(email) {
    let error = null;
    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      this.setState({ error });
      return false;
    }

    return true;
  }

  isInList(email) {
    const { skills } = this.context;
    return skills.includes(email);
  }

  render() {
    const { skills } = this.context;
    return (
      <>
        {skills.map(item => (
          <div className='tag-item' key={item}>
            {item}
            <button
              type='button'
              className='button'
              onClick={() => this.handleDelete(item)}>
              &times;
            </button>
          </div>
        ))}

        <input
          className={'input ' + (this.state.error && ' has-error')}
          value={this.state.value}
          name='skills'
          data-test-id='skills'
          placeholder='Type or paste email addresses and press `Enter`...'
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onPaste={this.handlePaste}
        />

        {this.state.error && <p className='error'>{this.state.error}</p>}
      </>
    );
  }
}

export default ChipInput;
