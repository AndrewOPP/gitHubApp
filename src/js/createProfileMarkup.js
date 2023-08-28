
export function createProfileMarkup(data) {
    const {login, followers, following, bio, avatar_url, public_repos} = data
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
    return markUp
}