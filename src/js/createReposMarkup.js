export function createReposMarkup(respData) {
    const markUp = respData.slice(0, 10).map(({html_url, name}) => {
        return `<a class="repo" target="_blank" href="${html_url}$ rel="noopener noreferrer">${name}</a>`
    }).join("")

    return markUp
}