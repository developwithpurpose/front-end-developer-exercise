const stepNav = document.getElementById('stepNav');
const navItem = stepNav.getElementsByTagName('li');
const navItemArr = Array.from(navItem);

const stepCopy = document.getElementById('stepCopy');
const copyItem = stepCopy.getElementsByTagName('div');
const copyItemArr = Array.from(copyItem);

getActiveItem = (navItemArr, copyItemArr) => {
  return navItemArr.map( (item, i) => {
    item.addEventListener('click', (e) =>{
      e.preventDefault();
      let currentActiveNav = document.querySelector('.active');
      if (currentActiveNav !== null) currentActiveNav.classList.remove('active');
      item.classList.add('active');
      
      showCopy = (navIndex) => {
        copyItemArr.map((item, copyIndex) => {
          let currentActiveCopy = document.querySelector('.show-copy');
          if (currentActiveCopy !== null) {
            currentActiveCopy.classList.remove('show-copy');
            currentActiveCopy.classList.add('hide-copy');
          }
          (copyIndex === navIndex)
          ? item.classList.remove('hide-copy')
          : item.classList.add('hide-copy');
        })
      }
      showCopy(i);
    });
  })
}
getActiveItem(navItemArr, copyItemArr);
