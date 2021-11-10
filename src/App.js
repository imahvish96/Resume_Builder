import SidebarLayout from './components/Layout/SidebarLayout';
import Context from './Context';
function App() {
  return (
    <Context>
      <SidebarLayout />;
    </Context>
  );
}

export default App;
