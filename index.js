//page is ready to go html is loaded 
document.addEventListener("DOMContentLoaded", function () {
    //load artist list  
    API.addArtists()
    //creating a new artist with submit button 
    document.getElementById("artist-form").addEventListener('submit', API.createArtists)
})

        //geting list of artists from API 
        //once we get the list parsed to JSON(object)
        //once JSON is parsed then... 
        //iterate through artists list 
         //grabbing attrbuits from artist 
         //using the att from above and creating an instance of an artist 


         //initializing an artist 
          //calling the renderArtist method to add the artist to the page 
           //finding it by id then setting to a variable
           //creating a new div 
            //adding a data-id to our newly created div 
             //setting the id of artistContainer to artist id 
              //adding a artist-lists class to a artistContainer
               //adding HTML to artistContainer 
               //taking arttisContainer and adding it to artistHolder 
                 //creating a variable to show if the glams are showing 
                  //when clicking on artistContainer ...