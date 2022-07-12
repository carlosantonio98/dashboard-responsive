/*==== SHOW NAVBAR ====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodyId && headerId) {
        toggle.addEventListener('click', () => {
            // Show navbar
            nav.classList.toggle('show')
            
            // Change icon
            toggle.classList.toggle('bx-x')
            
            // Add padding to body
            bodypd.classList.toggle('body-pd')

            //Add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

/*==== LINK ACTIVE ====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(i => i.addEventListener('click', colorLink))