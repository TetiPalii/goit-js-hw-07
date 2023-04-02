import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryItems({preview, original, description}) {
    const itemsMarkup = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    
    
    gallery.insertAdjacentHTML('beforeend', itemsMarkup);
}

galleryItems.forEach(createGalleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData:"alt"})

 
function addSimpleLightBoxElements({preview, original, description}) {
  const  simpleLightBoxMarkup = `<div class="gallery">
  <a href="${original}"><img src="${preview}" alt="${description}" title="Beautiful Image"/></a>
  <a href="${original}"><img src="${preview}" alt="${description}" title="Beautiful Image"/></a>
</div>`
    
    gallery.insertAdjacentHTML("beforeend", simpleLightBoxMarkup)
}

galleryItems.forEach(addSimpleLightBoxElements)


