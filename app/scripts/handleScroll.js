const handleScroll = () => {
  document.addEventListener(
    'click',
    event => {
      if (!event.target.matches('.nav__link')) return;

      event.preventDefault();

      const stepId = event.target.hash.substring(1);
      const stepElement = document.getElementById(stepId);
      stepElement.scrollIntoView({ behavior: 'smooth' });

      const navListItems = document.getElementsByClassName('nav__step');

      for (let navItem of navListItems) {
        navItem.classList.remove('nav__step--active');
      }

      const navListItem = event.target.parentElement;
      navListItem.classList.add('nav__step--active');
    },
    false
  );
};

export default handleScroll;
