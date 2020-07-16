// TODO: add code here

window.addEventListener('load', function () {
  let container = document.querySelector('div#container');
  let count = document.querySelector('p#astronautCount');
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => (a.hoursInSpace < b.hoursInSpace ? 1 : -1));
      count.innerHTML = `Total Astronaut Count: ${data.length}`;
      data.forEach((astronaut) => {
        console.log(data);
        container.innerHTML += `<div class="astronaut">
                                    <div class="bio">
                                        <h3>${astronaut.firstName} ${
          astronaut.lastName
        }</h3>
                                        <ul>
                                            <li>Hours in space: ${
                                              astronaut.hoursInSpace
                                            }</li>
                                            <li ${
                                              astronaut.active
                                                ? 'style="color: green"'
                                                : 'style="color: red"'
                                            }>Active: ${astronaut.active}</li>
                                            <li>Skills: ${astronaut.skills.map(
                                              (skill) => ` ${skill}`
                                            )}</li>
                                        </ul>
                                    </div>
                                    <img class="avatar" src=${
                                      astronaut.picture
                                    }>
                                </div>`;
      });
    });
});
