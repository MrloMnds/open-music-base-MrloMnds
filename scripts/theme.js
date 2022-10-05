const themeButton = document.getElementById('theme-button')
const themeIcon = document.getElementById('theme-icon')
const html = document.querySelector('html')
const themePref = localStorage.getItem('darkmode')
if (themePref) {
    html.classList.toggle('dark-mode')
    themeIcon.classList.toggle('text-white')
    
    if (themeIcon.classList.contains('text-white')) {
        themeIcon.src = '../assets/img/sun.png'
    } else {
        themeIcon.src = '../assets/img/moon.png'
    }   
}


function darkMode() {
    const themeButton = document.getElementById('theme-button')
    const themeIcon = document.getElementById('theme-icon')
    const html = document.querySelector('html')

    themeButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        themeIcon.classList.toggle('text-white')

        const themePref = localStorage.getItem('darkmode')

        if(!themePref) {
            window.localStorage.setItem('darkmode', true)
        }
        if(themePref) {
            window.localStorage.removeItem('darkmode')
        }

        if (themeIcon.classList.contains('text-white')) {
            themeIcon.src = '../assets/img/sun.png'
        } else {
            themeIcon.src = '../assets/img/moon.png'
        }
    })
}
darkMode()