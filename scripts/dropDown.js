let dropDownOnClick = (function () {
  // cache DOM
  let dropBtn = document.querySelectorAll('.drop-btn');
  let dropMenu = document.querySelectorAll('.drop-menu');
  let clickedMenu = document.querySelectorAll('.clicked');

  // event list
  dropBtn.forEach((btn) => btn.addEventListener('click', addClicked));

  // styling .drop-menu class
  function dropMenuStyle() {
    dropMenu.forEach((menu) => {
      menu.style.visibility = 'hidden';
      menu.style.position = 'absolute';
      menu.style.top = '100%';
      menu.style.left = '0%';
      menu.style.width = '100%';
      menu.style.padding = '0';
    });
  }

  // render style
  dropMenuStyle();

  function clickedStyle() {
    console.log(clickedMenu);
  }

  function addClicked(e) {
    console.log('whoa');
    let target = e.target;
    if (!target.matches('li.drop-btn')) {
      return;
    }

    let dropDown = target.childNodes[1];

    // create the classList variable before closing all menus
    let hasBeenClicked = dropDown.classList.contains('clicked');
    dropMenu.forEach((list) => {
      if (list.classList.contains('clicked')) {
        list.classList.remove('clicked');
        list.classList.add('faded');
        list.style.visibility = 'hidden';
      } else if (list.classList.contains('faded')) {
        list.classList.remove('faded');
      }
    });
    if (hasBeenClicked) {
      return;
    } else {
      dropDown.classList.add('clicked');
      dropDown.style.visibility = 'visible';
    }
  }

  // close menus when clicking outside of them
  window.addEventListener('click', function (e) {
    let target = e.target;
    if (!target.matches('li') || !target.matches('li.drop-btn')) {
      dropMenu.forEach((list) => {
        if (list.classList.contains('clicked')) {
          list.classList.remove('clicked');
          list.classList.add('faded');
          list.style.visibility = 'hidden';
        }
      });
    }
  });
})();

export { dropDownOnClick };
