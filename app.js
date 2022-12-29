const fetchPokemon = async () => {

    // Get the value entered in an input element with the ID "pokeName"
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;

    // Convert the value to lowercase
    pokeName = pokeName.toLowerCase();

    // Construct a URL for the API request using the value entered in the input element
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    // Send a request to the API using the constructed URL and parse the response as JSON
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            // If the request is not successful, log the response and call the pokeImage function with a default image URL
            console.log(res);
            pokeImage("./images/giphy.gif");
        } else {
            // If the request is successful, return the response as JSON
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // If the data is truthy, log the data and various properties of the data to the console, and call the following functions with the appropriate properties of the data as arguments:

            pokeWeight(data.weight);
            pokeData(data.abilities);
            pokeImage(data.sprites.front_default);
            pokeNames(data.name);
            pokeHeight(data.height);

        }
    });
}

// Update the src attribute of an image element with the ID "pokeImg" to the URL passed as an argument
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

// Update the inner HTML of an element with the ID "abilitiesone" with the names of the abilities of the Pokemon passed as an argument
const pokeData = (abilities) => {
    let abilitiesName = abilities.map(item => item.ability.name);
    abilitiesone.innerHTML = abilitiesName;
    console.log(abilitiesone);
};

// Update the inner HTML of an element with the ID "pokemonName" with the name of the Pokemon passed as an argument
const pokeNames = (name) => {
    let nameone = name;
    pokemonName.innerHTML = nameone;
};

// Update the inner HTML of an element with the ID "pokemonHeight" with the height of the Pokemon passed as an argument
const pokeHeight = (high) => {
    let pokeHigh = high;
    pokemonHeight.innerHTML = pokeHigh;
};

// Update the inner HTML of an element with the ID "pokemonWeight" with the weight of the Pokemon passed as an argument
const pokeWeight = (Weight) => {
    let pokeWeight = Weight;
    pokemonWeight.innerHTML = pokeWeight;
};
