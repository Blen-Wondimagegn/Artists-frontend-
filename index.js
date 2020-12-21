document.addEventListener("DOMContentLoaded", function () {
    //load artist list  
    API.addArtists()
    //creating a new artist with submit button 
    document.getElementById("artist-form").addEventListener('submit', API.createArtists)

})


