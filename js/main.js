const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active');
			navBtn.classList.remove('is-active');
		})
	})
}

const handleCurrentyear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', handleNav)
handleCurrentyear()
