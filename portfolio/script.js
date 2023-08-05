const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
const navLinks = document.querySelectorAll('ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const navHeight = document.querySelector('#header').offsetHeight;
  const offset = navHeight + 20; // Add some additional offset if needed

  window.scroll({
    top: targetPosition - offset,
    behavior: 'smooth'
  });
}