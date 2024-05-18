const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

function closeMenu() {
      menuButton.addEventListener('click', () => {
      navigation.classList.toggle('close');
   });
}

closeMenu();


function handleResize() {
   if (window.innerWidth > 700) {
      navigation.classList.remove('close');
   }
   else {
      navigation.classList.add('close');
   }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(picture, altText) {
   return `
    <div class="viewer">
    <button class="close-viewer">❌</button>
    <img src="${picture}" alt="${altText}">
    </div>`
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
   const target = event.target;
	// get the src attribute from that element and 'split' it on the "-"
   const imgLink = target.src;
   const split = imgLink.split('-');
   const imgName = split[0];

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
   const fullImage = 'norris-full.jpeg';

	// insert the viewerTemplate into the top of the body element
   const body = document.body;
	body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImage, imgName));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

   const closeViewerBtn = document.querySelector('.close-viewer');

   function closeViewer() {
      const viewer = document.querySelector('.viewer');
      viewer.remove();
   }

   closeViewerBtn.addEventListener('click', () => {
         closeViewer();
   });
}

const images = document.querySelectorAll('.gallery img');
images.forEach(image => image.addEventListener('click', viewHandler));