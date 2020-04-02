import React from 'react';
import logo from './logo.svg';
import './App.css';

let pilotData = {
  name: "Jack Dawes",
  role: "Pilot",
  title: "Captain",
  stats: {
    milesFlown: "45,453",
    flights: "345",
    yearsWithCompany: "7"
  },
  image: "hanks.jpg"
}

let flightAttendantData = {
  name: "Stefanie Ramirez",
  role: "Flight Attendant",
  title: "senior",
  stats: {
    milesFlown: "345,453",
    flights: "2345",
    yearsWithCompany: "18"
  },
  image: "flight_attendant.jpg"
}

let groundCrewData = {
  name: "Joey Ripapelli",
  role: "Ground Crew",
  title: "rookie",
  stats: {
    milesFlown: "0",
    flights: "345",
    yearsWithCompany: "2"
  },
  image: "ground_crew.jpg"
}

const EmployeeCard = (props) => {
  let employeeData = props.employeeData;
  let stats = employeeData.stats;

  return (
    <div className="employeeCard">
        <img className="employeeCard__profileImage" src={employeeData.image} />
        <div className="employeeCard__name">{employeeData.name}</div>
        <div className="employeeCard__title">{employeeData.title}</div>
        <div className="employeeCard__stats">
          <div>
            <div>
              {stats.milesFlown}
            </div>
            <div>
              miles flown
            </div>
          </div>
          <div>{stats.flights}</div>
          <div>{stats.yearsWithCompany}</div>

        </div>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <EmployeeCard employeeData={pilotData} />
      <EmployeeCard employeeData={flightAttendantData} />
      <EmployeeCard employeeData={groundCrewData} />
    </div>
  );
}

export default App;
