// const navItems = document.querySelector('.nav-items');
// const openNavBtn = document.querySelector('#open_nav-btn');
// const closeNavBtn = document.querySelector('#close_nav-btn');

// // opens nav dropdown
// const openNav = () => {
//   navItems.style.display = 'flex';
//   openNavBtn.style.display = 'none';
//   closeNavBtn.style.display = 'inline-block';
// }
// //close nav dropdown
// const closeNav = () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
// }
// openNavBtn.addEventListener('click', openNav);
// closeNavBtn.addEventListener('click', closeNav);



// const sidebar = document.querySelector('aside');
// const showSidebarBtn = document.querySelector('#show_sidebar-btn')
// const hideSidebarBtn = document.querySelector('#hide_sidebar-btn')

// // show sidebar on small devices
// const showSidebar = () => {
//   sidebar.style.left ='0';
//   showSidebarBtn.style.display = 'none';
//   hideSidebarBtn.style.display = 'inline-block';
// }

// // Hide sidebar on small devices
// const hideSidebar = () => {
//   sidebar.style.left ='-100%';
//   showSidebarBtn.style.display = 'inline-block';
//   hideSidebarBtn.style.display = 'none';
// }


// showSidebarBtn.addEventListener('click', showSidebar);
// showSidebarBtn.addEventListener('click', hideSidebar);

const navItems = document.querySelector('.nav-items')
const openNavBtn = document.querySelector('#open_nav-btn')
const closeNavBtn = document.querySelector('#close_nav-btn')

// Open nav dropdwn //
const openNav = () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

// Close nav dropdwn //
const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);




// Mobile side Nav bar Manage Category //

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

// Show Mobile side Nav bar small devices //
const showSidebar = () => {
  sidebar.style.left = '0';
  showSidebarBtn.style.display = 'none';
  hideSidebarBtn.style.display = 'inline-block';
}

// Hide Mobile side Nav bar small devices //
const hideSidebar = () => {
  sidebar.style.left = '-100%';
  showSidebarBtn.style.display = 'inline-block';
  hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);