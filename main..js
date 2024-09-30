//menu
let logo = document.getElementsByClassName('logo-text')
let logoEffect = document.getElementsByClassName('logo-effect')
logo[0].addEventListener('mouseover', ()=>{
    logoEffect[0].classList.add('logo-effect-active')
})
logo[0].addEventListener('mouseout', ()=>{
    logoEffect[0].classList.remove('logo-effect-active')
})


let burger = document.getElementsByClassName('burger')
let burgerActive = document.getElementsByClassName('burger-active')
let menuMobile = document.getElementsByClassName('menu-mobile')
burger[0].addEventListener('click', ()=>{
    burger[0].classList.toggle('burger-active')
    menuMobile[0].classList.toggle('menu-active')
})

burger[0].addEventListener('mouseover', ()=>{
    burger[0].classList.add('burger-over')
})
burger[0].addEventListener('mouseout', ()=>{
    burger[0].classList.remove('burger-over')
})

let filterBar = document.getElementsByClassName('filter-bar')
let filterSelect = document.getElementsByClassName('filter-select')
let filterOption = document.querySelectorAll('.filter-option')
let project = document.querySelectorAll('.project')
let projects = [{
    'project': 1,
    'properties': ['react', 'css', 'bootstrap', 'mongo' ]
}

]
let filterBase = [
    {"all": "all-f"},
    {"html": "html-f"},
    {"css": "css-f"},
    {"js": "js-f"},
    {"react":  "react-f"},
    {"bootstrap": "bootstrap-f"},
    {"mongo": "mong}o-f"},
    {"sql":  "sql-f"},
    {"flask": "flask-f"},
    {"node": "node-f"},
    {"python": "python-f"}

]     
//filtros barra 
function filter(val, classname) {
    if(filterSelect[0].value == 'all'){
        let projectGrid = document.getElementsByClassName('project-grid')
        projectGrid[0].classList.remove('project-grid-1')
        
        project.forEach(e =>{
            e.classList.add('project-active')
            

        })
        window.scroll({
            top: 2000,
            left: 0,
            behavior: "smooth",
          });
    }else if(filterSelect[0].value == val){
        let classnameParcial = document.querySelectorAll('.' + classname)
        let projectGrid = document.getElementsByClassName('project-grid')

        console.log(classnameParcial[0])
        
        if(classnameParcial.length == 1){
            projectGrid[0].classList.add('project-grid-1')
        }else{
            projectGrid[0].classList.remove('project-grid-1')
        }
        project.forEach(e =>{
                e.classList.remove('project-active')
            })
        classnameParcial.forEach(e=>{
                e.classList.add('project-active')
         })
        
         window.scroll({
            top: 2000,
            left: 0,
            behavior: "smooth",
          });
    }
}
filterOption.forEach(e => {
    e.addEventListener('click', ()=>{
        console.log(e)
    })
})
filterSelect[0]?.addEventListener('change', ()=>{
   
   filter( 'all')
   filter( 'html', 'html-f')
   filter( 'css', 'css-f')
   filter( 'js', 'js-f')
   filter( 'react', 'react-f')
   filter( 'bootstrap', 'bootstrap-f')
   filter( 'mongo', 'mongo-f')
   filter( 'sql', 'sql-f')
   filter( 'flask', 'flask-f')
   filter( 'node', 'node-f')
   filter( 'py', 'py-f')

})

//contacto

let screenHeight = window.innerHeight
let contact = document.getElementsByClassName('contact')

contact[0]?.setAttribute("style", `height:${screenHeight - 57}px;`);
console.log(contact[0])

let wp = document.getElementsByClassName('wp')
let gm = document.getElementsByClassName('gm')

wp[0]?.addEventListener('click', ()=>{
    window.location.replace('https://wa.me/3042583510')
})
let gmailCustom = document.getElementsByClassName('gmail-custom')
gm[0]?.addEventListener('click', ()=>{
    gmailCustom[0]?.classList.add('gm-active')
    wp[0]?.setAttribute("style", "display: none")
    gm[0]?.setAttribute("style", "display: none")

})

let hideGm = document.getElementsByClassName('hide-gm')

hideGm[0]?.addEventListener('click', ()=>{
    gmailCustom[0].classList.remove('gm-active')
    wp[0]?.setAttribute("style", "display: block")
    gm[0]?.setAttribute("style", "display: block")
})

//proyectos

let projectLink = document.getElementsByClassName('project-link')
let projectLinkMobile = document.getElementsByClassName('project-link-mobile')
function scroller(){
    window.scroll({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
}
projectLink[0].addEventListener('click', ()=>{
    scroller()
})
projectLinkMobile[0].addEventListener('click', ()=>{
    scroller()
})