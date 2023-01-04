let menuView = false;

// Funcion para mostrar Menu
function showMenu() {
    if (menuView) {
        document.getElementById("nav").classList = '';
        menuView = false;
    }
    else {
        document.getElementById("nav").classList = 'responsive';
        menuView = true;
    }
}

function select() {
    // Ocultar menu una vez seleccionada una opcion
    document.getElementById("nav").classList = "";
    menuView = false;
}

// Funcion que aplica animacion de las skills
function skillsEffect () {
    var skills = document.getElementById("skills");
    var distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distanceSkills >= 300) {
        let ability = document.getElementsByClassName("progress");
        ability[0].classList.add("javascript");
        ability[1].classList.add("htmlcss");
        ability[2].classList.add("java");
        ability[3].classList.add("c");
        ability[4].classList.add("python");
        ability[5].classList.add("php");
        ability[6].classList.add("angular");
        ability[7].classList.add("react");
        ability[8].classList.add("sql");
        ability[9].classList.add("git");
        ability[10].classList.add("comunication");
        ability[11].classList.add("creative");
        ability[12].classList.add("teamwork");
        ability[13].classList.add("resilience");
        ability[14].classList.add("dedication");
        ability[15].classList.add("activelistener");
        ability[16].classList.add("perseverance");
        ability[17].classList.add("autodidact");
        ability[18].classList.add("flexibility");
        ability[19].classList.add("analytical");
        ability[20].classList.add("organized");
    }
}

// Detecta el scrolling para aplicar animacion
window.onscroll = function() {
    skillsEffect();
}