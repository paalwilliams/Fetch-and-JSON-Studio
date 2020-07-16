// TODO: add code here
window.addEventListener('load', function () {
  let container = document.getElementById('container');
  let count = document.getElementById('astronautCount');
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response) => response.json())
    .then((data) => {
      data.sort(
        (astronaut1, astronaut2) =>
          astronaut1.hoursInSpace < astronaut2.hoursInSpace
      );
      count.innerHTML = `There are ${data.length} astronauts`;
      for (item in data) {
        container.innerHTML += `<div class="astronaut">
          <div class="bio">
            <h3>${data[item].firstName} ${data[item].lastName}</h3>
            <ul>
              <li>Hours in space: ${data[item].hoursInSpace}</li>
              <li style="${
                data[item].active ? 'color: green;' : 'color: red'
              }">Active: ${data[item].active}</li>
              <li>Skills: ${data[item].skills.map((skill) => {
                return ` ${skill}`;
              })}</li>
            </ul>
          </div>
          <img class="avatar" src="${data[item].picture}">
</div>`;
      }
    });
});
