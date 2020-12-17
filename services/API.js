class API {
    // move our initial fetch into a function here 

    static addArtists() {
        //geting list of artists from API 
        fetch("http://localhost:3000/artists")
            //once we get the list parsed to JSON(object)
            .then(resp => resp.json())
            //once JSON is parsed then... 
            .then(artists => {
                //iterate through artist list 
                artists.forEach(artist => {
                    //grabing attrbuits from artist 
                    const { id, name, gender, age, height, image} = artist
                    //using the att from above and creating an instance of an artist 
                    new Artist(id, name, gender, age, height, image)
                })
            })
    }
    
    static createArtists(e) {
        // debugger
        e.preventDefault()
        let data = {
            'name': e.target.name.value,
            'gender': e.target.gender.value,
            'age': e.target.age.value,
            'height': e.target.height.value,
           
            'glams_attributes': [{
                'glam_squad': e.target.glam_squad.value,
                'makeup': e.target.makeup.value,
                'hair': e.target.hair.value,
                'wardrobe': e.target.wardrobe.value
            }]
        };
        fetch('http://localhost:3000/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            // grab our fetch response
            .then(resp => resp.json())
            .then(artist => {
                // debugger
                const { id, name, gender, age, height, image } = artist
                new Artist(id, name, gender, age, height, image)
                document.getElementById('artist-form').reset()
            })
    }

}
