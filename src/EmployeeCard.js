import React from 'react';

const EmployeeCard = (props) => {
    const [role, setRole] = React.useState(props.employeeData.role)

    React.useEffect(() => {
        setRole('--' + role.replace(' ', ''))
    }, [])

    let employeeData = props.employeeData;
    let stats = employeeData.stats;
  
    return (
      <div className={'employeeCard' + role}>
          <img className="employeeCard__profileImage" src={employeeData.image} />
          <div className="employeeCard__name">{employeeData.name}</div>
          <div className="employeeCard__title">{employeeData.role} - {employeeData.title}</div>
          <div className="employeeCard__stats">
            <div>
                <div>{stats.milesFlown}</div>
                <div>miles flown</div>
            </div>
            <div>
                <div>Flights</div>
                <div>{stats.flights}</div>
            </div>
            <div>
                <div>Years working</div>
                <div>{stats.yearsWithCompany}</div>
            </div>
  
          </div>
        </div>
    )
  }

  export default EmployeeCard;