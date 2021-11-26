const menuButton = document.getElementById('menu-button')
const menuButtonArrow = menuButton.childNodes[1]

const navigation = document.getElementById('navbar')

window.addEventListener('load', () => {
    navigation.style.display = 'none'
})

menuButton.addEventListener('click', (e) => {
    toggleNav()
    toggleArrow()
})

const toggleNav = () => {
    return navigation.style.display === 'none' ? navigation.style.display = 'block' : navigation.style.display = 'none'
}

const toggleArrow = () => {
    return menuButtonArrow.className == 'fa fa-caret-up' ? menuButtonArrow.className = 'fa fa-caret-down' : menuButtonArrow.className = 'fa fa-caret-up'
}
