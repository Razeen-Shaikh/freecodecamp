const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const link = document.querySelectorAll('.nav-link')
const hamdiv = document.getElementById('ham')

const addOrRemoveIcon = media => {
	const icon = document.createElement('i')
	icon.setAttribute('class', 'fa fa-bars fa-2x')
	if(media.matches) {
		hamburger.appendChild(icon)
		hamburger.addEventListener('click', () => {
			navLinks.classList.toggle('open')
			icon.classList.toggle('fa-bars')
			icon.classList.toggle('fa-close')
		})
		for(let i=0; i < 3; i++) {
			link[i].addEventListener('click', () => {
				navLinks.classList.toggle('open')
				icon.classList.toggle('fa-bars')
				icon.classList.toggle('fa-close')
			})
		}
	} else {
		const icon = document.getElementsByClassName('fa')
		if(typeof(icon[0]) != 'undefined' && icon[0] != null) {
			icon[0].parentNode && icon[0].parentNode.removeChild(icon[0])
		}
	}
}

let media = window.matchMedia("(max-width: 768px)")

addOrRemoveIcon(media)

media.addListener(addOrRemoveIcon)