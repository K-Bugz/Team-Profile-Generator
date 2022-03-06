// create the team function used down below. 
const generateTeam = team => {

    const generateManager = manager => { // create the manager html
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h2 class="card-title"><i class="fa-thin fa-address-card"></i>${manager.getRole()}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const generateEngineer = engineer => { // create the html for engineers
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h2 class="card-title"><i class="fa-thin fa-computer-classic"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    const generateIntern = intern => { // create the html for interns
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h2 class="card-title"><i class="fa-light fa-graduation-cap"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        // .map(manager => `${manager.html}`)   me trying to use the managager html. 
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>My Team</title>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- My own style sheet -->
        <link rel="stylesheet" href="../dist/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="text-center col-12 jumbotron bg-primary text-warning"><h1>MyTeam!</h1></div>
            </div>
            <div class="row team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
            </div>
        </div>
    </body>
    </html>
    `;
};