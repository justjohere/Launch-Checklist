// Write your JavaScript code here!
window.addEventListener("load", function () {
    list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"
    let testForm = document.querySelector("form");

    testForm.addEventListener('submit', function (event) {

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        let validation = formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)

        if (validation.empty === true) {
            alert("All fields are required!");
        }

        if (validation.invalid === true) {
            alert("Make sure to enter valid information for each field!");
        }

        event.preventDefault();
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //    console.log(listedPlanets);
    }).then(function () {
        //    console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        //    console.log(planet)

    })

});
