import logo from './logo.svg';
import './App.css';
import Employee from './employee/EmployeeComponent.js'
import Api from './api/ApiComponent.js';
import LifeCycle from './reactlifecycle/LifecycleComponent.js';
import Form from './form/FormComponent.js';
import LoginComponent from './login/LoginComponent.js';
import ListComponent from './collection/ListComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Employee/> */}
          {/* <Api/> */}
          {/* <LifeCycle/> */}
          {/* <Form/> */}
          {/* <LoginComponent/> */}
          <ListComponent/>
      </header>
    </div>
  );
}

export default App;
