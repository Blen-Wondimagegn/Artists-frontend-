class Artist {
    constructor(id, name, gender, age, height) {
        this.id = id
        this.name = name
        this.gender = gender
        this.age = age
        this.height = height
        this.image = image
        this.renderArtist()
    }
    renderArtist() {
        const artistHolder = document.getElementById('new-list')
        const artistContainer = document.createElement('div')
        artistContainer.dataset.id = this.id
        artistContainer.id = this.id
        artistContainer.classList.add = "artist-lists"
        artistContainer.innerHTML += this.artistHTML()
        artistHolder.appendChild(artistContainer)
        artistContainer.addEventListener("click", e => {
            if (e.target.className === "glams-button") this.createGlams(e)
            if (e.target.className.includes('delete')) this.deleteArtist(e)
            if (e.target.className.includes('header')) this.showArtist(e)
            // if (e.target.className === "form-class"){
        })
        // }
    }
    artistHTML() {
        // debugger 
        return `
        <div class="card">
         <div class="card-content rgb">
             <span class="card-title">${this.name}</span>
             <img src="${this.image}" width="200" />
             <p>${this.gender}</p>
             <p>${this.age}</p>
             <p>${this.height}</p>
             <button type="button" class="glams-button" data-id=${this.id}>Your Glam squads</button>
             <button class="delete">DELETE</button>
             </div>
       </div>
   </div>`
    }

    // delete
    deleteArtist(e) {
        //  debugger
        const id = parseInt(e.target.parentElement.parentElement.parentElement.id)
        fetch(`http://localhost:3000/artists/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {

                document.getElementById('new-list').removeChild(document.getElementById(id))
            })
    }

    createGlams(e) {
        //  debugger
        // find the show id from the dataset = e.target.dataset.id
        let id = e.target.dataset.id
// alert(id)
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

