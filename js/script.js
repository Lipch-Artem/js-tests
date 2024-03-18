
(() => {
    const refs = {
        openMenuBtn: document.querySelector('.header-menu-open-btn'),
        closeMenuBtn: document.querySelector('.header-menu-close-btn'),
        menu: document.querySelector('.header-mob-menu'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        document.body.classList.toggle('no-scroll');
    }
})();
























@media screen and (min-width: 320px) {
    .container {
        margin-left:auto;
        margin-right:auto;
    }
  }
  
  @media screen and (max-width: 767px) {
    .section {
        padding-top:32px;
        padding-bottom: 32px
    }
  
    .container {
        padding-left: 16px;
        padding-right: 16px
    }
  }
  
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .container {
        max-width:375px
    }
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    .section {
        padding-top:48px;
        padding-bottom: 48px
    }
  
    .container {
        padding-left: 32px;
        padding-right: 32px;
        max-width: 768px
    }
  }
  
  @media screen and (min-width: 1440px) {
    .section {
        padding-top:82px;
        padding-bottom: 82px
    }
  
    .container {
        padding-left: 32px;
        padding-right: 32px;
        max-width: 1440px
    }
  }
  
  
  
  .hero-title {
    color: #fafafa;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 50px;
    line-height: 1;
    padding-top: 281px;
    margin-bottom: 212px;
  }
  
  
  .hero-list {
    display: flex;
    gap: 4px;
  }
  
  .header-section {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  
  .header-nav {
    display: flex;
    justify-content: space-between;
  }
  
  .header-nav-img {
    margin-right: 8px;
  }
  
  .header-nav-logotype {
    display: flex;
    justify-content: space-between;
  }
  
  .header-dropdown,
  .header-menu-link {
    display: none;
  }
  
  .header-menu-open-btn {
    display: flex;
    border: none;
    background-color: transparent;
    line-height: 0;
    padding: 0;
    width: 28px;
    height: 28px;
  }
  
  .header-menu-open-btn .header-svg-on-button {
    fill: #fafafa;
  }
  
  .header-mob-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: transparent;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .header-menu-close-btn {
    border: none;
    background-color: transparent;
    line-height: 0;
    width: 28px;
    height: 28px;
  }
  
  .hero {
    position: relative;
    background-image: url(./img/header-img/hero-mobile.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 32px
  }
  
  @media screen and (min-width: 768px) {
    .header-dropdown {
      position: relative;
      display: inline-block;
      text-align: center;
    }
  
    .header-dropbtn {
      display: flex;
      background-color: transparent;
      text-decoration: underline;
      color: #fafafa;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
      border: none;
    }
  
    .header-dropbtn:hover,
    .header-dropbtn:focus {
      color: #ed3b44;;
      text-decoration: underline;
      text-decoration-color: #e0373f;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .header-dropdown-content {
      display: none;
      position: absolute;
      background-color: transparent;
      width: 67px;
      height: 91px;
      z-index: 1;
    }
  
    .header-dropdown-list {
      width: 67px;
      height: 91px;
      color: var(--main-text);
      padding: 0;
      text-decoration: none;
      display: block;
    }
  
    .header-dropdown-list-item:not(:last-child) {
      margin-bottom: 5px;
    }
  
    .header-modal-nav-link {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .header-modal-nav-link:hover,
    .header-modal-nav-link:focus {
      color: var(--button-hover);
      text-decoration: underline;
      text-decoration-color: var(--button-hover);
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .header-dropdown:hover .header-dropdown-content {
      display: block;
    }
  
    .header-menu-link {
      display: block;
      width: 163px;
      height: 55px;
      padding: 18px 24px;
      border: none;
      border-radius: 100px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
      color: #fafafa;
      background-color: #ed3b44;
      cursor: pointer;
  
    
  
  
  
      
    }
  
    .header-menu-open-btn {
      display: none;
    }
  
    .header-menu-close-btn {
      display: none;
    }
  }
  
  
  
  /* =============================================TABLET====================================================== */
  
  @media screen and (min-width: 768px) {
    .hero {
        background-image: url(./img/header-img/hero-tablet.png);
    }
  
    .hero-title {
        font-size: 90px;
        padding-top: 300px;
        margin-bottom: 187px;
        min-width: 632px;
    }
  
    .hero-list {
        justify-content: end;
        gap: 8px
    }
  
    .hero-item:not(:last-child) {
        font-size: 16px;
        max-width: 55px;
        max-height: 55px;
        padding: 18px 20px
    }
  
    .hero-item:last-child {
        font-size: 16px;
        border-radius: 30px;
        min-width: 223px;
        height: 55px;
        padding: 18px 24px
    }
  }
  
  
  
  
  
  /* ==============================================DESKTOP====================================================== */
  
  
  /* .hero {
    max-width: 100%;
    padding: 188px 0;
    background-image: linear-gradient(to right, rgba(28, 29, 32, 0.1), rgba(105, 41, 45, 0.1)),
        url('../img/header-img/header-desktop-bg.jpg');
  }
  
  @media screen and (min-width: 1158px) and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx),
  screen and (min-device-pixel-ratio: 2) {
    .hero {
        background-image: linear-gradient(to right, rgba(28, 29, 32, 0.1), rgba(105, 41, 45, 0.1)),
            url('../img/header-img/header-desktop-bg@2x.jpg');
    }
  
  } */
  
  
  @media screen and (min-width: 1440px) {
    .hero {
        background-image: url(./img/header-img/hero-desktop.png);
    }
  
    .hero-title {
        padding-left: 162px;
        margin-bottom: 243px;
        min-width: 1084px
    }
  
    .section {
      padding-top: 80px;
  }
  
  .section {
    padding-top: 82px;
    padding-bottom: 82px;
  }
  }
  
  
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
  
  
    .container {
        padding-left: 32px;
        padding-right: 32px;
        max-width: 768px;
    }
  } */
  
  
  
  
  .is-hidden {
    
  
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
  
  
  
  .header-section {
      padding-top: 32px;
      padding-bottom: 32px;
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      background-color: transparent;
  }
  
  
  
  .header-section {
      padding-top: 32px;
      padding-bottom: 32px;
    }
    
    .header-nav {
      display: flex;
      justify-content: space-between;
    }
    
    .header-nav-img {
      margin-right: 8px;
    }
    
    .header-nav-logotype {
      display: flex;
      justify-content: space-between;
    }
    
    .header-dropdown,
    .header-menu-link 
     {
      display: none;
  
      
    }
    
    .header-menu-open-btn {
      display: flex;
      border: none;
      background-color: transparent;
      line-height: 0;
      padding: 0;
      width: 28px;
      height: 28px;
    }
    
    .header-menu-open-btn .header-svg-on-button {
      fill: var(--main-text);
    }
    
    .header-mob-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: transparent;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .header-menu-close-btn {
      border: none;
      background-color: transparent;
      line-height: 0;
      width: 28px;
      height: 28px;
    }
    
    @media screen and (min-width: 768px) {
      .header-dropdown {
        position: relative;
        display: inline-block;
        text-align: center;
      }
    
      .header-dropbtn {
        display: flex;
        background-color: transparent;
        text-decoration: underline;
        color: var(--main-text);
        padding: 10px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.02em;
        border: none;
      }
    
      .header-dropbtn:hover,
      .header-dropbtn:focus {
        color: var(--button-hover);
        text-decoration: underline;
        text-decoration-color: var(--button-hover);
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    
      .header-dropdown-content {
        display: none;
        position: absolute;
        background-color: transparent;
        width: 67px;
        height: 91px;
        z-index: 1;
      }
    
      .header-dropdown-list {
        width: 67px;
        height: 91px;
        color: var(--main-text);
        padding: 0;
        text-decoration: none;
        display: block;
      }
    
      .header-dropdown-list-item:not(:last-child) {
        margin-bottom: 5px;
      }
    
      .header-modal-nav-link {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.02em;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    
      .header-modal-nav-link:hover,
      .header-modal-nav-link:focus {
        color: var(--button-hover);
        text-decoration: underline;
        text-decoration-color: var(--button-hover);
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    
      .header-dropdown:hover .header-dropdown-content {
        display: block;
      }
      
    
      .header-menu-link {
        display: block;
        width: 163px;
        height: 55px;
        padding: 18px 24px;
        border: none;
        border-radius: 100px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--main-text);
        background-color: var(--button-color);
        cursor: pointer;
      }
    
      .header-menu-open-btn {
        display: none;
      }
    
      .header-menu-close-btn {
        display: none;
      }
    }


    // =======================

    .header-mob-menu {
        padding: 32px 16px 64px 16px;
        background-color: var(--background);
        background-image: url('../img/mobile/hero_bg_mobile.png');
        background-size: cover;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
          visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    
      
      .header-menu-close-btn {
        display: flex;
        padding: 0;
        margin-left: auto;
        justify-content: center;
        align-items: center;
      }
      
      .header-menu-close-btn .header-svg-on-button {
        fill: var(--main-text);
      }
      
      .header-mob-menu-content {
        display: flex;
        position: absolute;
        top: 37.5%;
        left: 50%;
        margin-left: -33.5px;
      }
      
      .header-mob-menu-list {
        text-align: center;
        color: var(--main-text);
        text-decoration: underline;
        text-decoration-color: var(--main-text);
      }
      
      .header-mob-menu-link:hover,
      .header-mob-menu-link:focus {
        color: var(--button-hover);
        text-decoration-color: var(--button-hover);
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .header-mob-menu-list-item:not(:last-child) {
        margin-bottom: 12px;
      }
      
      .header-mob-menu-link {
        color: var(--main-text);
        text-decoration: underline;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.02em;
      }
      
      .header-mob-menu-order {
        vertical-align: bottom;
      }
      
      .header-mob-menu-order-link {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 164px;
        height: 45px;
        padding: 14px 31.5px;
        border: none;
        border-radius: 100px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--main-text);
        background-color: var(--button-color);
        cursor: pointer;
      }
      
      .header-mob-menu-order-link:hover,
      .header-mob-menu-order-link:focus {
        background-color: var(--button-hover);
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      @media screen and (min-resolution: 192dpi) and (min-width: 320px),
        screen and (min-resolution: 2dppx) and (min-width: 320px),
        screen and (min-device-pixel-ratio: 2) and (min-width: 320px) {
        .header-menu-background {
          background-image: url(../img/mobile/hero_bg_mobile@2x.png);
        }
    
       
      }
      
      @media screen and (min-width: 768px) {
        .header-mob-menu {
          display: none;
        }
      }
    /* by Artem */
    
  
  
   
  
  




























// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = 1024
// canvas.height = 576

// const gravity = 0.5

// class Player {
//     constructor(position) {
//         this.position = position 
//         this.velocity = {
//             x: 0,
//             y: 1
//         }
//         // {
//         //     x: 0,
//         //     y: 0,
//         this.height = 100
        
//     }
//     draw() {
//  c.fillStyle = 'red';
//         c.fillRect(this.position.x, this.position.y, 100, this.height);
//     }

//     update() {
//         this.draw()

//         this.position.x += this.velocity.x
//         this.position.y += this.velocity.y


//         if (this.position.y + this.height + this.velocity.y < canvas.height)
//             this.velocity.y += gravity
//         else this.velocity.y = 0
//     }
// }

// // let y = 100
// // let y2 = 100

// const player = new Player({
//     x: 0,
//     y: 0,
        
// });
// const player2 = new Player({
//     x: 300,
//     y: 100,
        
// });
// function animate() {
//     window.requestAnimationFrame(animate);
// c.fillStyle = 'white';
//     c.fillRect(0, 0, canvas.width, canvas.height);
//     // player.draw()
//     player.update()
//     player2.update()
//     // console.log('go');


// // y++
    
// // c.fillStyle = 'red';
// //  c.fillRect(400, y2, 100, 100);
// //  y2++
// }

// animate()

// window.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'd':
//             console.log('I`m moving right')
//             player.velocity.x = 1
//             break
//     }
// //    console.log(event) 
// });