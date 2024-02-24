import logo from './logo.svg';
import './App.css';
import Employee from './employee-component/Employee.js'
import ApiComponent from './api-component/ApiComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Employee></Employee>
          <ApiComponent></ApiComponent>
      </header>
    </div>
  );
}

export default App;
