document.addEventListener("DOMContentLoaded", function () {
    // call our new function in there 
    API.addArtists()
    // Artist.addGlams()
    // add the form event listener to the domContentLoaded
    document.getElementById("artist-form").addEventListener('submit', API.createArtists)
})