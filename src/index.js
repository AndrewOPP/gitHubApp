
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const mainContent = document.querySelector(".main-content")
const input = document.querySelector(".user-input")
input.addEventListener("change", findInfo)
const h1 = document.querySelector("h1")
    
function findInfo(event) {
    userLogin = event.currentTarget.value
    fetch(`https://api.github.com/users/${userLogin}`)
        .then(response => {
            if (!response.ok) throw new Error(Notify.failure('User does not exist'))
            return response.json()
        })
        .then(data => {
            createMarkup(data)
            repos(userLogin)
        })
        .catch(error => {
            console.log(error);
        })
}

async function repos(login) {
    const link = `https://api.github.com/users/${login}` + `/repos`
    const resp = await fetch(link)
    const respData = await resp.json()
    addReposToMarkup(respData)
}

function createMarkup({ login, followers, following, bio, avatar_url, public_repos}) {
    const markUp = `
        <img src="${avatar_url}" alt="profile-photo" class="profile-foto" />
        <div class="profile-information-container">
          <h2 class="profile name">${login}</h2>
          <p class="profile-bio">${bio || "Profile bio is empty"}</p>
          <ul class="stats">
            <li class="stats-li">${followers} Followers</li>
            <li class="stats-li">${following} Following</li>
            <li class="stats-li">${public_repos} Repos</li>
          </ul>
          <h3 class="repos-title">Repos:</h3>
          <div class="repos" id="repos"></div>
        </div>`
    
    h1.classList.add('hidden')

    setTimeout(() => {
        mainContent.innerHTML = markUp
        mainContent.classList.add("add-main-content")
    }, 1000)
    
}

function addReposToMarkup(respData) {
    setTimeout(() => {
        const reposEl = document.getElementById("repos")
        respData.slice(0, 10).forEach(element => {
        const ell = document.createElement("a")
        ell.classList.add("repo")
        ell.href = element.html_url
        ell.target = "_blank"
        ell.innerText = element.name
        reposEl.appendChild(ell)
    });  
    }, 1000)
}