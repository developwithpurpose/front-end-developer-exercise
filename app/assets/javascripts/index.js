const stepNav = document.getElementById('stepNav');
const navItem = stepNav.getElementsByTagName('li');

for (let i = 0; i < navItem.length; ++i) {
  navItem[i].addEventListener('click', (e) => {
    e.preventDefault();
    let currentActive = document.querySelector('.active');
    if (currentActive != null) {
      currentActive.classList.remove('active');
    }
    navItem[i].classList.add('active');
  });
}
