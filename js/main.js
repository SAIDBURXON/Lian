const menuBtn = document.querySelector('.navbar__btn'),
      navbarMenu = document.querySelector('.navbar__collapse'),
      navbarSearch = document.querySelector('.navbar__search'),
      menuItems = document.querySelectorAll('.navbar__menu li'),
      inputSearch = document.querySelector('.search__input'),
      searchBtn = document.querySelector('.navbar__search button'),
      inputContent = document.querySelector('.navbar__search'),
      worksBox = document.querySelector('.works__box'),
      workImgs = document.querySelectorAll('.works__box img');

    
    (function () { 
    
    // События
    menuBtn.addEventListener('click', menuOpen);
    document.addEventListener('mouseup', menuClose);
    searchBtn.addEventListener('click',searchOpen);
    document.addEventListener('mouseup',searchClose);
    // document.addEventListener('DOMContentLoaded', setBlckHeight)


    // Меню 
    function menuOpen(event){
        let thescreen = window.screen.width;
        console.log(`MenuBtn: ${menuBtn.classList.contains('active')}`, `Event: ${event.target.classList.contains('navbar__menu')}`);
        if(menuBtn.classList.contains('active') === false || event.target.classList.contains('navbar__menu') === true){
            if(thescreen <= 768){
                console.log("A1");
                menuBtn.classList.add('active')
                navbarMenu.style = "top: 99%; transition: top 0.5s";
            }else{
                console.log("A2");
                menuBtn.classList.add('active')
                navbarMenu.style = "left: 0%; transition: left 0.5s";
            }
        } //else{
        //     if(thescreen <= 768){
        //         console.log("R1");
        //         menuBtn.classList.remove('active')
        //         navbarMenu.style = "top: -500%; transition: top 0.5s";
        //     }else{
        //         console.log("R2");
        //         menuBtn.classList.remove('active')
        //         navbarMenu.style = "left: -102%; transition: left 0.5s";
        //     }
        //     }
        }
    function menuClose(event) {
        let thescreen = window.screen.width;
        // console.log(`MenuBtn: ${menuBtn.classList.contains('active')}`, `Event: ${event.target.classList.contains('navbar__menu')}`);
        // console.log([event.target]);
        if(event.target){
            if(thescreen <= 768){
                console.log("R1");
                menuBtn.classList.remove('active')
                navbarMenu.style = "top: -600%; transition: top 0.5s";
            }else{
                // console.log("R2");
                menuBtn.classList.remove('active')
                navbarMenu.style = "left: -102%; transition: left 0.5s";
            }
        }
    }
    function searchOpen() {
        if(inputContent.classList.contains('active') === false){
            inputSearch.style.width = "150px";
            inputSearch.value = "";
            inputContent.classList.add('active');
        }
    }
    function searchClose(event){
        if(event.target.classList.contains('search__input') === false){
            inputSearch.style.width = "0px";
            inputSearch.value = "";
            inputContent.classList.remove('active');
        }
    }
    // function setBlckHeight() {
    //     try{
    //         const img = document.querySelector('.team__info img'),
    //               textContainer = document.querySelector('.team__description');
           
    //               img.style.height = `${textContainer.offsetHeight+10}px`;
    //     }
    //     catch(err){
    //     }
    //  }
 })();