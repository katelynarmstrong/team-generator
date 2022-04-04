//Manager card
const generateManager = function (manager) {
  return `
    <div>
        <div class="card m-3">
            <div class="card-header bg-danger bg-opacity-25 text-center">
                <h3>${manager.name}</h3>
                <h5><i class="material-icons">manage_accounts</i> Manager</h5>
            </div>
            <div class="card-body text-center">
                <p>ID: ${manager.id}</p>
                <p>E-mail: <a href="mailto: ${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.office}</p>
            </div>
            
        </div>
    </div>
    `;
};

//Engineer card
const generateEngineer = function (engineer) {
  return `
    <div>
        <div class="card m-3">
            <div class="card-header bg-success bg-opacity-25 text-center">
                <h3>${engineer.name}</h3>
                <h5><i class="material-icons">construction</i> Engineer</h5>
            </div>
            <div class="card-body text-center">
                <p>ID: ${engineer.id}</p>
                <p>E-mail: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//Intern card
const generateIntern = function (intern) {
  return `
    <div>
        <div class="card m-3">
            <div class="card-header bg-warning bg-opacity-25 text-center">
                <h3>${intern.name}</h3>
                <h5><i class="material-icons">school</i> Intern</h5>
            </div>
            <div class="card-body text-center">
                <p>ID: ${intern.id}</p>
                <p>E-mail: <a href="mailto: ${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

//Employee card
const generateEmployee = function (employee) {
  return `
    <div>
        <div class="card m-3">
            <div class="card-header bg-primary bg-opacity-25 text-center">
                <h3>${employee.name}</h3>
                <h5><i class="material-icons">account_circle</i> Employee</h5>
            </div>
            <div class="card-body text-center">
                <p>ID: ${employee.id}</p>
                <p>E-mail: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            </div>
        </div>
    </div>
    `;
};

// combine all inputted team members
generateTeam = (data) => {
  //array to hold employee cards
  employeeCards = [];

  for (let i in data) {
    const employee = data[i];
    const role = employee.role;

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      employeeCards.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      employeeCards.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      employeeCards.push(internCard);
    }

    if (role === "Employee") {
      const employeeCard = generateEmployee(employee);
      employeeCards.push(employeeCard);
    }
  }

  const teamMembers = employeeCards.join("");

  const generateTeamHTML = generateHTML(teamMembers);

  return generateTeamHTML;
};

// create html page
const generateHTML = function (teamMembers) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dream Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body>
            <header>
                <h1 class="navbar justify-content-center text-white bg-info bg-opacity-75 mb-4">Dream Team</h1>
            </header>
            <main class="d-flex justify-content-evenly flex-wrap">
                ${teamMembers}
            </main>
        </body>
    </html>
    `;
};

// export to index
module.exports = generateTeam;
