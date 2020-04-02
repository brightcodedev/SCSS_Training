import React from 'react';
import './App.scss';

//Components
import EmployeeCard from './EmployeeCard';

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
  title: "Senior",
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
  title: "Rookie",
  stats: {
    milesFlown: "0",
    flights: "345",
    yearsWithCompany: "2"
  },
  image: "ground_crew.jpg"
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
