import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryItems({original, preview, description}) {
    const galleryMarkup = `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
     />
     </a>
    </li>`;

    gallery.insertAdjacentHTML("beforeend", galleryMarkup)

}

galleryItems.forEach(createGalleryItems)

gallery.addEventListener("click", onGalleryClick)

function onGalleryClick(e) {
    e.preventDefault()
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }

    const imgOriginalUrl = e.target.dataset.source
    const instance = basicLightbox.create(`<div class="modal">
<img src ="${imgOriginalUrl}" alt ="${galleryItems.description}"  width="800" height="600">
 </div>
`, {
        onShow: () => {
        document.addEventListener("keydown", onEscClose);
        
        
        }, onClose: () => {
            document.removeEventListener("keydown", onEscClose)
            }
    })

    function onEscClose(e) {
        if (e.code === "Escape") {
            instance.close();
       }
    } 
    instance.show()
}
   

 






// function createGalleryItems(galleryItems) {
//     const itemsMarkup = galleryItems.map(({ preview, original, description })=>`<li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </li>`)
//     gallery.insertAdjacentHTML('beforeend', itemsMarkup.join(""))
// }

// createGalleryItems(galleryItems);



// gallery.addEventListener("click", onGalleryClick);
// document.addEventListener("keydown", modalCloseEsc)

// const instance = basicLightbox.create(`<div class="modal">
// <img src ="${getDataSource}" alt ="${galleryItems.description}"  width="800" height="600">
// </div>
// `)

// function getDataSource(e) {
//     return e.dataset.source;
// }

// function onGalleryClick(e) {
//     e.preventDefault()
//     if (!e.target.classList.contains("gallery__image")) {
//         return;
//     }

//     getDataSource(e)
    
//     instance.show()
    
// }
// function modalCloseEsc(e) {
//     if (e.code === "Escape") {
//         instance.close()
//     }
//      document.removeEventListener("keydown", modalCloseEsc)
// }



