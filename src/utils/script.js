const burgerBtn = document.getElementById('burgerBtn');
const menuList = document.getElementById('menuList');

burgerBtn.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
  menuList.classList.toggle('opacity-0');
  menuList.classList.toggle('opacity-100');

  if (menuList.classList.contains('hidden')) {
    document.body.classList.remove('menu-active');
  } else {
    document.body.classList.add('menu-active');
  }
});

const menuItems = menuList.getElementsByTagName('a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    menuList.classList.add('hidden');
    menuList.classList.remove('opacity-100');
    menuList.classList.add('opacity-0');
    document.body.classList.remove('menu-active');
  });
}
