let menuContent = document.querySelector('.menu-content');  
menuContent.addEventListener('click', function(){
  let menuItems= document.querySelectorAll('.menu-item')
  console.log(menuItems)
  menuItems.forEach(menuItem=>{
    // Toggle the show-nav class on the clicked menu item
    menuItem.style.color = 'green'
   console.log(menuItem.classList.toggle('show-nav')) 
  })
})