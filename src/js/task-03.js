const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const allImagesEl = document.querySelector(".gallery");
allImagesEl.style.display = "flex";
allImagesEl.style.listStyle = "none";
allImagesEl.style.gap = "20px";


const makeImageMarkup = ({url, alt}) => {
  return `<li class="gallery__item"><img class="image" src=${url} alt=${alt}></li>`;
};
const makeGalleryMarkup = images.map(makeImageMarkup).join(" ");

allImagesEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

// const itemEl = document.querySelectorAll(".gallery__item");
// itemEl.style.width = "300px";
// itemEl.style.height = "100px";

// const imageEl = document.querySelectorAll(".image");
// imageEl.style.width = "300 px";




