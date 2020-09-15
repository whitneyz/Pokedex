function getPokemon(id) {
fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(response => response.json())
    .then(json => console.log(json))//actual JSON data as parameter //hier moet mijn functie komen die de data gaat tonen op het scherm
    .catch(err => console.error(err));
}

  document.getElementById("btnJaune").addEventListener("click", function  () {
    let Id = document.getElementById("inputIndex").value;
    getPokemon(Id)

});


