export let menubar = document.querySelector('.menu');

export function handleRender() {
    menubar.innerHTML =`
        <img src="assets/images/icon-menu.svg" class="menu-button">
    `;

    document.querySelector('.web3-img-cont').innerHTML = `
        <img class="web3-img" src="assets/images/image-web-3-mobile.jpg" alt="">
    `
}

export function handleMenuClick() {
    document.querySelector('.mmc').classList.add('show-mmc');
    document.querySelector('.mobile-menu-cont').classList.add('mobile-menu-cont-animation')
    document.querySelector('.mobile-menu-cont').classList.remove('mobile-menu-cont-remove-animation')
}

export function handleClose() {
    document.querySelector('.mmc').classList.remove('show-mmc');
    document.querySelector('.mobile-menu-cont').classList.remove('mobile-menu-cont-animation')

    document.querySelector('.mobile-menu-cont').classList.add('mobile-menu-cont-remove-animation')
}