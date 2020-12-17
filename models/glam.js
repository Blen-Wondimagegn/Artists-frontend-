class Glam {
    constructor(id, glam_squad, makeup, hair, wardrobe, artist_id) {
        this.id = id
        this.glam_squad = glam_squad
        this.makeup = makeup
        this.hair = hair
        this.wardrobe = wardrobe
        // this.comments = this.comments
        this.artist_id = artist_id
        this.renderGlam()
    }

    renderGlam() {
        //  debugger
        const aHolder = document.getElementById(`artist-${this.artist_id}`)
        const aContainer = document.createElement('div')
        aContainer.dataset.id = this.id
        aContainer.id = this.id
        aContainer.classList.add ="artist-lists"
        aContainer.innerHTML += this.glamHTML()
         aHolder.appendChild(aContainer)
        aContainer.addEventListener("click", e => {
            if (e.target.className.includes('delete')) this.deleteGlam(e)
        })
    }

    glamHTML() {
        // debugger 
        return `
        <div class="card glam">
         <div class="card-content">
             <span class="card-title">${this.glam_squad}</span>
             <p>${this.makeup}</p>
             <p>${this.hair}</p>
             <p>${this.wardrobe}</p>
             <button class="delete">DELETE</button>
             <button type="button" class="commebt-button" >Review</button>
             </div>
       </div>
   </div>`
    }


deleteGlam(e) {
        //  debugger
        const id = parseInt(e.target.parentElement.parentElement.parentElement.dataset.id)
        fetch(`http://localhost:3000/glams/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {

                document.getElementById(`artist-${this.artist_id}`).removeChild(document.getElementById(id))
            })
    }

}

