import React from 'react';
import './App.css';
import {Employees} from "./components/employees/employees";
import {EmployeesBirthday} from "./components/employees-birthday/employees-birthday";
import {Header} from "./components/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='main-content'>
                <Employees/>
                <EmployeesBirthday/>
            </div>

        </div>
    );
}

export default App;
