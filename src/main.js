import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderPhoto , divEl} from   "./js/render-function";
import { fetchPhoto } from "./js/pixabay-api";


const formEl = document.querySelector('.search-form');
const inputEl = formEl.querySelector('input');
const loaderEl = document.querySelector('.loader');


formEl.addEventListener('submit', (evn) => {
    evn.preventDefault();
    divEl.innerHTML = "";
    loaderEl.classList.remove("is-hidden");
    const valueInput = inputEl.value.trim();

    fetchPhoto(valueInput).then(renderPhoto).then(() => {
        const lightbox = new SimpleLightbox('.container-img a');
        lightbox.refresh();
    }).catch(error => {
        iziToast.show({ title: error.message, position: 'topRight', backgroundColor: 'red' }); 
    }).finally(() => {
        formEl.reset();    
        loaderEl.classList.add("is-hidden");
    });
    
});


