const linksSocialMedia = {
    github: 'sousapedro11',
    youtube: 'pedrofearless',
    facebook: 'sousapedro11',
    instagram: 'sousapedro11',
    twitter: 'ppls2106',
}

const url = `https://api.github.com/users/${linksSocialMedia.github}`;

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

function createOrgs() {

    const orgUrl = url.concat('/orgs')

    fetch(orgUrl)
        .then(result => result.json())
        .then(data => {
            for (org of data) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                var img = document.createElement("img");
                img.src = org.avatar_url
                img.className = "org-logo"
                img.title = org.login
                a.href = `https://github.com/${org.login}/`
                a.target = "_blank"
                a.rel = "noopener noreferrer"
                a.appendChild(img);
                li.appendChild(a);
                userOrgs.appendChild(li);
            }
        })
}

changeSocialMediaLinks()
getGithubProfile()
createOrgs()
