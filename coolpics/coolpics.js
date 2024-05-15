const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('close'); 
   //  menuButton.classList.toggle('close');
});

function handleResize() {
   if (window.innerWidth > 700) {
      navigation.classList.remove('close');
   }
   else {
      navigation.classList.toggle('close');
   }
}

handleResize();
window.addEventListener('resize', handleResize);