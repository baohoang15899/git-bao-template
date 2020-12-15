/* ====================== 1, RESPONSIVE MENU ====================== */
let openBtn = document.querySelector(".header__mobile")
let navMenu = document.querySelector(".header__nav")
let menuStatus = true
var menu = {
    init:function(){
        this.show();
    },
    show:function(){
        openBtn.addEventListener("click",()=>{
            if (menuStatus == true) {
                navMenu.classList.add('menu__active')
                return menuStatus = false
            }
            else{
                navMenu.classList.remove('menu__active')
                return menuStatus = true
            }
        })
    }
}
menu.init();
/* ====================== 2, CHANGE HEADER WHEN SCROLL ====================== */
let header = document.querySelector(".header")
let logo = document.querySelector(".header__logo")
let headerChange = {
    init:function(){
        headerChange.change()
    },
    change:function(){
        let position = header.getBoundingClientRect().top
        if (scrollY > position + 100) {
        header.classList.add("change__active")
        logo.classList.add("logo__active")
        }
        else {
        header.classList.remove("change__active")
        logo.classList.remove("logo__active")
        }
    }
}
window.addEventListener('scroll',headerChange.init)
/* ====================== 3, SCROLL TO SECTION  ====================== */
let section = document.querySelectorAll(".section")
let navLink = document.querySelectorAll(".header__link")
let bannerBtn = document.querySelector(".banner__btn")
let aTag = document.querySelectorAll('a')
aTag.forEach(tags=>{
    tags.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})
let scrollSmooth = {
    init:function(){
        scrollSmooth.scrollSection()
    },
    scrollSection:function(){
        navLink.forEach((links,index)=>{
            links.addEventListener("click",(e)=>{
                e.preventDefault()
                let sectionPosition = section[index].offsetTop
                window.scrollTo(0,sectionPosition-66)
                navMenu.classList.remove("menu__active")
                return menuStatus = true
            })
        })
        bannerBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            let sectionPosition = section[0].offsetTop
            window.scrollTo(0,sectionPosition-66)
        })
    }
}
scrollSmooth.init()
/* ====================== 4, HIGHLIGHT NAV ====================== */
function removeColor(){
    navLink.forEach(links=>{
           links.classList.remove("highlight__active")
    })
}
let scrollHighLight = {
    init:function(){
        scrollHighLight.scroll()
    },
    scroll:function(){
        section.forEach((sections,index)=>{
            let sectionPosition = sections.offsetTop
            if (scrollY > sectionPosition -69){
                removeColor()
                navLink[index].classList.add("highlight__active")
            }
            else{
                navLink[index].classList.remove("highlight__active")
            }
        })
    }
}
window.addEventListener("scroll",scrollHighLight.init)
/* ====================== 5, FORM ====================== */
let input = document.querySelectorAll('.input')
let formBtn =document.querySelector('.contact__btn')
let contactWarning = document.querySelectorAll('.contact__warning')
let form = {
    init:function(){
        form.formCheck()
    },
    formCheck:function(){
        formBtn.addEventListener("click",(e)=>{
            e.preventDefault()
            for (let i = 0; i < input.length; i++) {
                let inputs = input[i];
                inputs.addEventListener("click",()=>{
                    contactWarning[i].classList.remove("warning__active")
                })
                if(inputs.value === ""){
                    contactWarning[i].classList.add("warning__active")
                }
            }
                input.forEach(clear=>{
                    clear.value=""
                })
        })
    }
}
form.init()
/* ====================== 6, SHOW MODAL ====================== */
let img = [
    {
        src:'assets/img/portfolio/01-full.jpg',
        first:"Date: January 2020",
        second:"Client: Threads",
        third:"Category: Illustration",
    },
    {
        src:'assets/img/portfolio/02-full.jpg',
        first:"Date: January 2020",
        second:"Client: Explore",
        third:"Category: Graphic Design",
    },
    {
        src:'assets/img/portfolio/03-full.jpg',
        first:"Date: January 2020",
        second:"Client: Finish",
        third:"Category: Identity",
    },
    {
        src:'assets/img/portfolio/04-full.jpg',
        first:"Date: January 2020",
        second:"Client: Lines",
        third:"Category: Branding",
    },
    {
        src:'assets/img/portfolio/05-full.jpg',
        first:"Date: January 2020",
        second:"Client: Southwest",
        third:"Category: Website Design",
    },
    {
        src:'assets/img/portfolio/06-full.jpg',
        first:"Date: January 2020",
        second:"Client: Window",
        third:"Category: Photography",
    },
]
let gallery = document.querySelectorAll(".portfolio__gallery")
let first = document.querySelector('.item__first')
let second = document.querySelector('.item__second')
let third = document.querySelector('.item__third')
let modal = document.querySelector('.modal')
let body = document.querySelector('body')
let modalContent = document.querySelector('.modal__wrapper')
let showModal = {
    init:function(){
        showModal.modalShow()
    },
    modalShow:function(){
        gallery.forEach((galleries,index)=>{
            galleries.addEventListener("click",()=>{
                let src = img[index].src
                first.innerText = img[index].first
                second.innerText = img[index].second
                third.innerText = img[index].third
                document.querySelector(".modal__body-img").src= src
                modal.classList.add("modal__active")
                body.classList.add("body__active")
                modalContent.classList.add("content__active")
            })
        })
    }
}
showModal.init()
/* ====================== 7, CLOSE MODAL ====================== */
let closeBtn = document.querySelector('.modal__closeBtn')
let closeIcon = document.querySelector('.modal__close')
let closeModal = {
    init:function(){
        closeModal.close()
    },
    close:function(){
        closeBtn.addEventListener("click",()=>{
            modal.classList.remove("modal__active")
            body.classList.remove("body__active")
            modalContent.classList.remove("content__active")
        })
        window.addEventListener("click",(event)=>{
            if (event.target == modal){
                modal.classList.remove("modal__active")
                body.classList.remove("body__active")
                modalContent.classList.remove("content__active")
              }
        })
        closeIcon.addEventListener("click",()=>{
            modal.classList.remove("modal__active")
            body.classList.remove("body__active")
            modalContent.classList.remove("content__active")
        })
    }
}
closeModal.init()