import {createProfileMarkup} from './js/createProfileMarkup'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { createReposMarkup } from './js/createReposMarkup'

const mainContent = document.querySelector(".main-content")
const input = document.querySelector(".user-input")
const h1 = document.querySelector("h1")
 
input.addEventListener("change", findInfo)

function findInfo(event) {
    let userLogin = event.currentTarget.value
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
    const link = `https://api.github.com/users/${login}/repos`
    const resp = await fetch(link)
    const respData = await resp.json()
    addReposToMarkup(respData)
}

function createMarkup(data) { 
    h1.classList.add('hidden')
    setTimeout(() => {
        mainContent.innerHTML = createProfileMarkup(data)
        mainContent.classList.add("add-main-content")
    }, 1000)    
}

function addReposToMarkup(respData) {
    setTimeout(() => {
        const reposEl = document.getElementById("repos")
        reposEl.innerHTML = createReposMarkup(respData)
        mainContent.classList.remove("hidden")
    }, 1000)
}