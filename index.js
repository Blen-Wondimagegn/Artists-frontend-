document.addEventListener("DOMContentLoaded", function () {
    // call our new function in there 
    API.addArtists()
    // Artist.addGlams()
    // add the form event listener to the domContentLoaded
    document.getElementById("artist-form").addEventListener('submit', API.createArtists)
})

// add function for likes
function likeMe(){
  // set constant for selecting all the like buttons
  const likeButtons = document.querySelectorAll(".add-like")
  // loop through each button
  for (const likeButton of likeButtons){
    // add event listener to each one
    likeButton.addEventListener("click", sendLike)
  }
}

// function for our like fetch request with async/await syntax
// it's a patch! I'm using the event that we've captured, and we're passing i
async function sendLike(e){
  const postID = e.target.parentElement.id
  let likes = parseInt(e.target.parentElement.querySelector(".likes").innerText)
  likes ++
  const postObj = {
    likes: likes
  }

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postObj)
  }
  const url = `${baseURL}/${postID}`
  const resp = await fetch(url, options)
  const data = await resp.json()
  loadPosts()
}


