// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const galleryListItem = galleryItems
    .map(
        (item) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                </a>
            </li>`
    )
    .join("");

galleryList.insertAdjacentHTML('beforeend', galleryListItem);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom'
});