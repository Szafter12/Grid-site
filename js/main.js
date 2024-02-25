const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')
}

const handleCurrentyear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', handleNav)
handleCurrentyear()
