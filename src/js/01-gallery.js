// Add imports above this line
import { galleryItems } from './gallery-items';
import simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
  </li>`
  )
  .join('');
gallery.innerHTML = markupGallery;
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
