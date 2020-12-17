class Artist {
    constructor(id, name, gender, age, height) {
        //setting the attrbuits 
        this.id = id
        this.name = name
        this.gender = gender
        this.age = age
        this.height = height
        this.renderArtist()
    }

    renderArtist() {
        const artistHolder = document.getElementById('new-list')
        const artistContainer = document.createElement('div')
        artistContainer.dataset.id = this.id
        artistContainer.id = "artist-" + this.id
        artistContainer.classList.add('artist-lists')
        artistContainer.innerHTML += this.artistHTML()
        artistHolder.appendChild(artistContainer)
        let glamsShow = false;
        artistContainer.addEventListener("click", e => {
            if (e.target.className === "glams-button"){
               //if it glams are showing hid it 
                if (glamsShow){
                    this.hideGlams()
                    glamsShow = false;
                }
                //else if it not showing then display it 
                else{
                    this.createGlams(e)
                    glamsShow = true;
                }
            }
            if (e.target.className.includes('delete')) this.deleteArtist(e)
        })
    }

    //method for hiding the glams with a click 
    hideGlams(){
        const glamCards = document.getElementsByClassName('glam')
        let glamCardsLength = glamCards.length
        //a loop through our glams 
        for (let i = 0; i < glamCardsLength; i++){
         // grab the first one on the list 
            let glamCard = glamCards[0]
            //remove 
            glamCard.remove()
        }
    }

    artistHTML() {
        // debugger 
        return `
        <div class="card">
         <div class="card-content rgb">
             <span class="card-title"><h1>${this.name}</h1></span>
             <p GENGER:> ${this.gender}</p>
             <p AGE: >${this.age}</p>
             <p HEIGHT:> ${this.height}</p>
             <button type="button" class="glams-button" data-id=${this.id}>Your Glam squads</button>
             <button class="delete">DELETE</button>
             </div>
       </div>
   </div>`
    }

    // 
    deleteArtist(e) {
        //  debugger
        const id = parseInt(e.target.parentElement.parentElement.parentElement.dataset.id)
        fetch(`http://localhost:3000/artists/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                     //
                document.getElementById('new-list').removeChild(document.getElementById("artist-" + id))
            })
    }

    createGlams(e) {
        
        // find the show id from the dataset = e.target.dataset.id
        let id = e.target.dataset.id
        // fetch
        fetch(`http://localhost:3000/artists/${id}/glams`)
            .then(resp => resp.json())
            .then(glams => {
                glams.forEach(glam => {
                    const { id, glam_squad, makeup, hair, wardrobe, artist_id } = glam 
                    // create our new associated objects
                    new Glam(id, glam_squad, makeup, hair, wardrobe, artist_id)
                })
            })
    }
}

