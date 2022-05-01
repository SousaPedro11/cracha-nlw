const url = `https://api.github.com/users/${linksSocialMedia.github}`;

const linksSocialMedia = {
    github: 'sousapedro11',
    youtube: 'pedrofearless',
    facebook: 'sousapedro11',
    instagram: 'sousapedro11',
    twitter: 'ppls2106',
}

function changeSocialMediaLinks() {
    for (const li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

function getGithubProfile() {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userImage.src = data.avatar_url
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userLogin.textContent = data.login
        })
}

function createOrgs(){

    const orgUrl = url.concat('/orgs')

    fetch(orgUrl)
        .then(data => {

        })
}

changeSocialMediaLinks()
getGithubProfile()
