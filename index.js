const width = window.innerWidth;

let menubar = document.querySelector('.menu');


function checkWidth() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        menubar.innerHTML =
            `<img src="assets/images/icon-menu.svg" class="menu-button">`;

        document.querySelector('.web3-img-cont').innerHTML = 
            `
            <img class="web3-img" src="assets/images/image-web-3-mobile.jpg" alt="">
            `

            let menuBtn = document.querySelector('.menu-button');
            menuBtn.addEventListener('click', () => {
                    document.querySelector('.mmc').classList.add('show-mmc');
                    document.querySelector('.mobile-menu-cont').classList.add('mobile-menu-cont-animation')
                    document.querySelector('.mobile-menu-cont').classList.remove('mobile-menu-cont-remove-animation')
                    
            })
            
            
            let closeButton = document.querySelector('.close-icon');
            closeButton.addEventListener('click', () => {
                document.querySelector('.mmc').classList.remove('show-mmc');
                document.querySelector('.mobile-menu-cont').classList.remove('mobile-menu-cont-animation')
            
                document.querySelector('.mobile-menu-cont').classList.add('mobile-menu-cont-remove-animation')
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