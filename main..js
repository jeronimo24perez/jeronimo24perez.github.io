// Menu
const logo = document.querySelector('.logo-text');
const logoEffect = document.querySelector('.logo-effect');
logo.addEventListener('mouseover', () => {
    logoEffect.classList.add('logo-effect-active');
});
logo.addEventListener('mouseout', () => {
    logoEffect.classList.remove('logo-effect-active');
});

const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    menuMobile.classList.toggle('menu-active');
});

burger.addEventListener('mouseover', () => {
    burger.classList.add('burger-over');
});
burger.addEventListener('mouseout', () => {
    burger.classList.remove('burger-over');
});

// Filtros
const filterSelect = document.querySelector('.filter-select');
const projects = document.querySelectorAll('.project');

const filterClasses = {
    all: "project-active",
    html: "html-f",
    css: "css-f",
    js: "js-f",
    react: "react-f",
    bootstrap: "bootstrap-f",
    mongo: "mongo-f",
    sql: "sql-f",
    flask: "flask-f",
    node: "node-f",
    py: "py-f"
};

filterSelect.addEventListener('change', () => {
    const selectedFilter = filterSelect.value;
    let activeCount = 0; 

    projects.forEach(project => {
        const matches = selectedFilter === 'all' || project.classList.contains(filterClasses[selectedFilter]);
        project.classList.toggle('project-active', matches);
        if (matches) activeCount++;
    });

    const projectGrid = document.querySelector('.project-grid');
    
    
    if (activeCount === 1) {
        projectGrid.classList.add('project-grid-1') 
        
    }else{
        projectGrid.classList.remove('project-grid-1') 
    }

    window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
});


// Contacto
const contact = document.querySelector('.contact');
contact.style.height = `${window.innerHeight - 57}px`;

const wp = document.querySelector('.wp');
const gm = document.querySelector('.gm');
const gmailCustom = document.querySelector('.gmail-custom');
const hideGm = document.querySelector('.hide-gm');

wp.addEventListener('click', () => {
    window.location.replace('https://wa.me/3042583510');
});
gm.addEventListener('click', () => {
    gmailCustom.classList.add('gm-active');
    wp.style.display = "none";
    gm.style.display = "none";
});
hideGm.addEventListener('click', () => {
    gmailCustom.classList.remove('gm-active');
    wp.style.display = "block";
    gm.style.display = "block";
});

// Proyectos
const projectLink = document.querySelector('.project-link');
const projectLinkMobile = document.querySelector('.project-link-mobile');

const scroller = () => {
    window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
};
projectLink.addEventListener('click', scroller);
projectLinkMobile.addEventListener('click', scroller);
