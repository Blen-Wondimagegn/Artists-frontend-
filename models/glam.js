class Glam {
    constructor(id, glam_squad, makeup, hair, werdrobe, artist_id) {
        this.id = id
        this.glam_squad = glam_squad
        this.makeup = makeup
        this.hair = hair
        this.werdrobe = werdrobe
        this.artist_id = artist_id
        this.renderGlam()
    }

    renderGlam() {

        const aHolder = document.getElementById(`new-list-${this.id}`)
        const aContainer = document.createElement('div')
        aContainer.dataset.id = this.id
        aContainer.id = this.id
        aContainer.classList.add = "artist-lists"
        aContainer.innerHTML += this.glamHTML()
        aHolder.appendChild(aContainer)
        // aContainer.addEventListener("click", e => {
        // //     if (e.target.className.includes('header')) this.showArtist(e)
        // //     // if (e.target.className === "form-class"){
        // })
        // }
    }
    glamHTML() {
        // debugger 
        return `
        <div class="card">
         <div class="card-content">
             <span class="card-title">${this.glam_squad}</span>
             <p>${this.makeup}</p>
             <p>${this.hair}</p>
             <p>${this.wardrobe}</p>
             </div>
       </div>
   </div>`
    }
}

