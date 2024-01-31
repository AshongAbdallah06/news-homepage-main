import { handleClose, handleMenuClick, handleRender, menubar } from "./handleClick.js";

const width = window.innerWidth;

function checkWidth() {
    if (window.matchMedia('(max-width: 900px)').matches) {
        handleRender();

        let menuBtn = document.querySelector('.menu-button');
        menuBtn.addEventListener('click', () => {
            handleMenuClick();
        })
        
        
        let closeButton = document.querySelector('.close-icon');
        closeButton.addEventListener('click', () => {
            handleClose();
        })
    } else {
        menubar.innerHTML = 
            `
                <p class="">Home</p>
                <p class="">New</p>
                <p class="">Popular</p>
                <p class="">Trending</p>
                <p class="">Categories</p>
            `
    }
}

checkWidth(); // Initial Load





window.addEventListener('resize', () => {
    checkWidth();
})