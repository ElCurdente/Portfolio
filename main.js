//                              INITIALISATION DES VARIABLES

//Intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

//Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarOpen = document.querySelector(".sidebar.open");
let closeBtn = document.querySelector("#btn");

//Menu
let menu = document.querySelector(".menu-section");
let navLink1 = document.querySelector("#nav-link-1");
let navLink2 = document.querySelector(".nav-link-2");
let navLink3 = document.querySelector(".nav-link-3");
let language = document.querySelector(".language");
let logoMenu = document.querySelector("#logo_menu");
let lastWork1 = document.querySelector(".latest-work-1");
let lastWork2 = document.querySelector(".latest-work-2");

//Tab bar
let nav = document.querySelector(".nav");
let tabLink1 = document.querySelector("#tab_link1");
let tabLink2 = document.querySelector("#tab_link2");
let tabLink3 = document.querySelector("#tab_link3");
let tabIcon1 = document.querySelector("#tab_icon1");
let tabIcon2 = document.querySelector("#tab_icon2");
let tabIcon3 = document.querySelector("#tab_icon3");

//Home
let home = document.querySelector("#home");
let titleRotate = document.querySelector(".div-titre-rotate");
let modalHover = document.querySelectorAll(".modal-hover");
let html = document.querySelector("html");
let textHome = document.querySelector(".text");
let workBtn = document.querySelector(".work-btn");
let logoHome = document.querySelector("#logo_home");

//Projects
let containerWorks = document.querySelector("#projects");
let containerProjects = document.querySelector("#container_works");
let containerDescWorks = document.querySelector(".container-desc-works");

let closeBtnWork = document.querySelectorAll("#btn_close");
let rightVideo = document.querySelectorAll(".right-video");
let workBtnBlur = document.querySelectorAll(".work-btn-blur");

let project1 = document.querySelector("#p1");
let pd1 = document.querySelector("#pd1");
let left1 = document.querySelector("#l1");
let right1 = document.querySelector("#r1");

let project2 = document.querySelector("#p2");
let pd2 = document.querySelector("#pd2");
let left2 = document.querySelector("#l2");
let right2 = document.querySelector("#r2");
let benefTab = ["BENEF est une web application proposant des bons plans pour tous sur différentes catégories comme des soirées ou des bons de réductions pour des activités, principalement pour les étudiants. Dans ce projet, j'occupe le rôle de développeur front-end.", "Ceci m'a permis de découvrir la librairie React JS et le framework CSS Tailwind CSS, appris en autonomie, mais aussi d'améliorer mes compétences en HTML, CSS, JS et PHP. De plus j'ai pu, grâce à la méthode Agile, grandement améliorer mon aisance et mon organisation en travail d'équipe.", "En effet, j'ai réalisé ce projet avec 4 camarades dans le cadre de mon projet tutoré de seconde année: </br> <ul class='ul-benef'> <li> <a href='http://gaspardfreyssinet.fr' target='_blank' rel='noopener' class='link_benef'>Gaspard Freyssinet</a> </li> </br> <li> <a href='http://merwan-jaudally.fr/' target='_blank' rel='noopener' class='link_benef'>Merwan Jaudally</a> </li></br> <li> <a href='http://antoine-droyer.fr' target='_blank' rel='noopener' class='link_benef'>Antoine Droyer</a> </li></br> <li> <a href='https://celianchevereau.fr' target='_blank' rel='noopener' class='link_benef'>Célian Chevereau</a> </li> </ul>"];
let swipeLeftBtn1 = document.querySelector("#swipe_left_btn1");
let swipeRightBtn1 = document.querySelector("#swipe_right_btn1");
let textDesc2 = document.querySelector("#text_desc_2");
let nbpBenef = document.querySelector("#nbp_benef");
let counterBenef = 0;

let project3 = document.querySelector("#p3");
let pd3 = document.querySelector("#pd3");
let left3 = document.querySelector("#l3");
let right3 = document.querySelector("#r3");

let project4 = document.querySelector("#p4");
let pd4 = document.querySelector("#pd4");
let left4 = document.querySelector("#l4");
let right4 = document.querySelector("#r4");
let iceTab = ["Créez une ou plusieurs pages web qui présenteront le code hexadécimal choisi parmi ceux disponibles sur <a href='https://c0ffee.surge.sh' target='_blank' rel='noopener' class='link_ice'>c0ffe.surge</a>, tel est le concept de ce projet. Le site web devait être responsive, développé en mobile first et compatible avec les principaux navigateurs.", "J'ai donc choisi le mot Ice associé au code hexadécimal #1CE dans le but de sensibiliser les utilisateurs à la fonte des glaces et ses conséquences. Pour ce faire, j'ai choisi de rediriger l'utilisateur vers différents articles disponibles sur le site <a href='https://www.nationalgeographic.fr' target='_blank' rel='noopener' class='link_ice'>National Geographic</a>."];
let swipeLeftBtn4 = document.querySelector("#swipe_left_btn4");
let swipeRightBtn4 = document.querySelector("#swipe_right_btn4");
let textDesc4 = document.querySelector("#text_desc_4");
let nbpIce = document.querySelector("#nbp_hex");
let counterIce = 1;

let project5 = document.querySelector("#p5");
let pd5 = document.querySelector("#pd5");
let left5 = document.querySelector("#l5");
let right5 = document.querySelector("#r5");
let jeuTab = ["Dans le cadre de ma formation en MMI, j'ai été amené à réaliser un mini jeu à l'aide de la librairie javascript D3.js. Nous devions créer un jeu du type Shoot'em Up dont le but est de gagner le plus de points possible avec un nombre limité de vies.", "Grâce à ce projet, j'ai pu découvrir et acquérir des compétences en programmation par objet (POO). J'ai réalisé ce jeu en binôme avec <a href='http://merwan-jaudally.fr' target='_blank' rel='noopener' class='link-jeu'>Merwan Jaudally</a> pour lequel nous nous sommes répartis les tâches équitablement."];
let swipeLeftBtn5 = document.querySelector("#swipe_left_btn5");
let swipeRightBtn5 = document.querySelector("#swipe_right_btn5");
let textDesc5 = document.querySelector("#text_desc_5");
let nbpJeu = document.querySelector("#nbp_jeu");
let counterJeu = 1;

let project6 = document.querySelector("#p6");
let pd6 = document.querySelector("#pd6");
let left6 = document.querySelector("#l6");
let right6 = document.querySelector("#r6");
let blogTab = ["L'objectif de ce projet était de mélanger l'ensemble des notions vues en cours comme l'intéraction avec une base de données, le modèle CRUD, la gestion de sessions ou encore le contrôle d'accès. J'ai créé ce blog avec <a href='http://chloe-montoya.fr' target='_blank' rel='noopener' class='link-blog'>Chloé Montoya</a> qui s'est chargée d'une partie du développement front-end du site.", "Pour ma part, je suis occupé d'une autre partie du développement front-end ainsi que de toute la partie PHP et MYSQL."];
let swipeLeftBtn6 = document.querySelector("#swipe_left_btn6");
let swipeRightBtn6 = document.querySelector("#swipe_right_btn6");
let textDesc6 = document.querySelector("#text_desc_6");
let nbpBlog = document.querySelector("#nbp_blog");
let counterBlog = 1;

let project7 = document.querySelector("#p7");
let pd7 = document.querySelector("#pd7");
let left7 = document.querySelector("#l7");
let right7 = document.querySelector("#r7");
let cvInteTab = ["Ce CV interactif a été réalisé à la fin de ma première année en DUT MMI. J'ai ainsi pu mélanger et mettre en pratique l'ensemble des notions apprises durant l'année et notamment dans les langages de base comme HTML, CSS et Javascript.", "Nous n'avions pas encore vu le responsive, il n'était donc pas demandé dans les consignes. Cependant, j'ai tout de même essayé afin de rendre le site plus agréable à visiter sur différentes tailles d'écrans."];
let swipeLeftBtn7 = document.querySelector("#swipe_left_btn7");
let swipeRightBtn7 = document.querySelector("#swipe_right_btn7");
let textDesc7 = document.querySelector("#text_desc_7");
let nbpCvInte = document.querySelector("#nbp_cv_inte");
let counterCvInte = 1;

let nbpTab = ["1-2", "2-2"];
let nbpTab3 = ["1-3", "2-3", "3-3"];

//ABOUT SECTION

let about = document.querySelector("#about");
let imgAbout = document.querySelector("#img_about");
let textCv = document.querySelector("#text_cv");



let width = document.querySelector("#width");
let pbInt = document.querySelectorAll(".pjbx");
let pbExt = document.querySelectorAll(".link-ex-page");

//                              DEVELOPPEMENT

if (window.matchMedia("(max-width: 575px)").matches) {
    pbExt.forEach(e => {
        e.style.display = "block";
    })
    pbInt.forEach(e => {
        e.style.display = "none";
    })
} else {
    pbExt.forEach(e => {
        e.style.display = "none";
    })
    pbInt.forEach(e => {
        e.style.display = "block";
    })
}

//Evènements au clic sur la boîte projet 1
project1.addEventListener("click", () => {
    left1.style.left = "0";
    right1.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd1.style.zIndex = "1";
    html.style.overflowY = "hidden";

})

//Evènements au clic sur la boîte projet 2
project2.addEventListener("click", () => {
    left2.style.left = "0";
    right2.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd2.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Fonction de changement de texte avec effet fade
function changeP2() {
    textDesc2.classList.add('fade');
    nbpBenef.classList.add('fade');

    setTimeout(function () {
        // textDesc2.innerHTML = benefTab[counterBenef];
        // nbpBenef.innerHTML = nbpTab3[counterBenef];
        if (counterBenef >= benefTab.length) {
            counterBenef = 0;
        } else if (counterBenef < 0) {
            counterBenef = 2;
        }
        if (counterBenef == 0) {
            textDesc2.innerHTML = benefTab[0];
            nbpBenef.innerHTML = nbpTab3[0];
            console.log("1");
        } else if (counterBenef == 1) {
            textDesc2.innerHTML = benefTab[1];
            nbpBenef.innerHTML = nbpTab3[1];
            console.log("2");
        } else if (counterBenef == 2) {
            textDesc2.innerHTML = benefTab[2];
            nbpBenef.innerHTML = nbpTab3[2];
            console.log("3");
        }
        textDesc2.classList.remove('fade');
        nbpBenef.classList.remove('fade');

    }, 300);
}

//Modification du texte de présentation du projet BENEF au clic sur la flèche droite
swipe_right_btn1.addEventListener("click", () => {
    counterBenef++;
    changeP2();

})

//Modification du texte de présentation du projet BENEF au clic sur la flèche gauche
swipe_left_btn1.addEventListener("click", () => {
    counterBenef--;
    changeP2();

})

//Evènements au clic sur la boîte projet 3
project3.addEventListener("click", () => {
    left3.style.left = "0";
    right3.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd3.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Evènements au clic sur la boîte projet 4
project4.addEventListener("click", () => {
    left4.style.left = "0";
    right4.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd4.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Fonction de changement de texte avec effet fade
function changeP4() {
    textDesc4.classList.add('fade');
    nbpIce.classList.add('fade');

    setTimeout(function () {
        textDesc4.innerHTML = iceTab[counterIce];
        nbpIce.innerHTML = nbpTab[counterIce];
        textDesc4.classList.remove('fade');
        nbpIce.classList.remove('fade');
        counterIce++;
        if (counterIce >= iceTab.length) {
            counterIce = 0;
        }
    }, 300);
}

//Modification du texte de présentation du projet Hex#words au clic sur la flèche droite
swipe_right_btn4.addEventListener("click", () => {
    changeP4();
})

//Modification du texte de présentation du projet Hew#words au clic sur la flèche gauche
swipe_left_btn4.addEventListener("click", () => {
    changeP4();
})

//Evènements au clic sur la boîte projet 5
project5.addEventListener("click", () => {
    left5.style.left = "0";
    right5.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd5.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Fonction de changement de texte avec effet fade
function changeP5() {
    textDesc5.classList.add('fade');
    nbpJeu.classList.add('fade');

    setTimeout(function () {
        textDesc5.innerHTML = jeuTab[counterJeu];
        nbpJeu.innerHTML = nbpTab[counterJeu];
        textDesc5.classList.remove('fade');
        nbpJeu.classList.remove('fade');
        counterJeu++;
        if (counterJeu >= jeuTab.length) {
            counterJeu = 0;
        }
    }, 300);
}

//Modification du texte de présentation du jeu au clic sur la flèche droite
swipe_right_btn5.addEventListener("click", () => {
    changeP5();
})

//Modification du texte de présentation du jeu au clic sur la flèche gauche
swipe_left_btn5.addEventListener("click", () => {
    changeP5();
})

//Evènements au clic sur la boîte projet 5
project6.addEventListener("click", () => {
    left6.style.left = "0";
    right6.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd6.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Fonction de changement de texte avec effet fade
function changeP6() {
    textDesc6.classList.add('fade');
    nbpBlog.classList.add('fade');

    setTimeout(function () {
        textDesc6.innerHTML = blogTab[counterBlog];
        nbpBlog.innerHTML = nbpTab[counterBlog];
        textDesc6.classList.remove('fade');
        nbpBlog.classList.remove('fade');
        counterBlog++;
        if (counterBlog >= blogTab.length) {
            counterBlog = 0;
        }
    }, 300);
}

//Modification du texte de présentation du jeu au clic sur la flèche droite
swipe_right_btn6.addEventListener("click", () => {
    changeP6();
})

//Modification du texte de présentation du jeu au clic sur la flèche gauche
swipe_left_btn6.addEventListener("click", () => {
    changeP6();
})

//Evènements au clic sur la boîte projet 7
project7.addEventListener("click", () => {
    left7.style.left = "0";
    right7.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd7.style.zIndex = "1";
    html.style.overflowY = "hidden";
})

//Fonction de changement de texte avec effet fade
function changeP7() {
    textDesc7.classList.add('fade');
    nbpCvInte.classList.add('fade');

    setTimeout(function () {
        textDesc7.innerHTML = cvInteTab[counterCvInte];
        nbpCvInte.innerHTML = nbpTab[counterCvInte];
        textDesc7.classList.remove('fade');
        nbpCvInte.classList.remove('fade');
        counterCvInte++;
        if (counterCvInte >= cvInteTab.length) {
            counterCvInte = 0;
        }
    }, 300);
}

//Modification du texte de présentation du projet Hex#words au clic sur la flèche droite
swipe_right_btn7.addEventListener("click", () => {
    changeP7();
})

//Modification du texte de présentation du projet Hew#words au clic sur la flèche gauche
swipe_left_btn7.addEventListener("click", () => {
    changeP7();
})

//Evènements au clic sur le bouton close de chaque page projet
closeBtnWork.forEach(e => {
    e.addEventListener("click", () => {
        left1.style.left = "-50vw";
        right1.style.right = "-50vw";
        left2.style.left = "-50vw";
        right2.style.right = "-50vw";
        left3.style.left = "-50vw";
        right3.style.right = "-50vw";
        left4.style.left = "-50vw";
        right4.style.right = "-50vw";
        left5.style.left = "-50vw";
        right5.style.right = "-50vw";
        left6.style.left = "-50vw";
        right6.style.right = "-50vw";
        left7.style.left = "-50vw";
        right7.style.right = "-50vw";
        pd1.style.zIndex = "0";
        pd2.style.zIndex = "0";
        pd3.style.zIndex = "0";
        pd4.style.zIndex = "0";
        pd5.style.zIndex = "0";
        pd6.style.zIndex = "0";
        pd7.style.zIndex = "0";
        setTimeout(toggleZIndex, 500);
        setTimeout(toggleScroll, 500);
    })
})

//Evènements au survole de la vidéo en bas à droite sur chaque page de projet
rightVideo.forEach(e => {
    e.addEventListener("mouseover", () => {
        workBtnBlur.forEach(e => {
            e.style.opacity = "1";
        })
        rightVideo.forEach(e => {
            e.style.filter = "blur(2px)";
        })
    })
})

//Evènements lorsqu'on ne survole plus la vidéo en bas à droite sur chaque page de projet
rightVideo.forEach(e => {
    e.addEventListener("mouseout", () => {
        workBtnBlur.forEach(e => {
            e.addEventListener("mouseenter", () => {
                workBtnBlur.forEach(e => {
                    e.style.opacity = "1";
                })
                rightVideo.forEach(e => {
                    e.style.filter = "blur(2px)";
                })
            })
            workBtnBlur.forEach(e => {
                e.addEventListener("mouseout", () => {
                    rightVideo.forEach(e => {
                        e.style.filter = "blur(2px)";
                    })
                })
            })
            workBtnBlur.forEach(e => {
                e.style.opacity = "0";
            })
            rightVideo.forEach(e => {
                e.style.filter = "blur(0px)";
            })
        })
    })
})

//Introduction de site
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 3000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 3600)
    });
})

//Ferme le menu
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

//Ferme le menu
navLink1.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

//Ferme le menu
navLink2.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

//Ferme le menu
navLink3.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

//Ferme le menu
lastWork1.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    left2.style.left = "0";
    right2.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd2.style.zIndex = "1";
    html.style.overflowY = "hidden";
    menuBtnChange();

});

//Ferme le menu
lastWork2.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    left3.style.left = "0";
    right3.style.right = "0";
    containerWorks.style.zIndex = "8";
    containerDescWorks.style.zIndex = "10";
    pd3.style.zIndex = "1";
    html.style.overflowY = "hidden";
    menuBtnChange();
});

// searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
// });

//Tab Bar Menu
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
    if (tabLink1.classList.contains("active-link")) {
        tabIcon1.setAttribute("name", "home");
    } else {
        tabIcon1.setAttribute("name", "home-outline");
    }
    if (tabLink2.classList.contains("active-link")) {
        tabIcon2.setAttribute("name", "briefcase");
    } else {
        tabIcon2.setAttribute("name", "briefcase-outline");
    }
    if (tabLink3.classList.contains("active-link")) {
        tabIcon3.setAttribute("name", "person");
    } else {
        tabIcon3.setAttribute("name", "person-outline");
    }
}
window.addEventListener('scroll', scrollActive);

if (tabLink1.classList.contains("active-link")) {
    tabIcon1.setAttribute("name", "home");
} else {
    tabIcon1.setAttribute("name", "home-outline");
}

// Ouvrir et fermer la sidebar
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-x");//replacing the iocns class
        modalHover.forEach(e => {
            e.style.left = "calc(-100% - 40px)";
        });
        menu.style.left = "0";
        home.style.left = "100vw";
        // logoHome.style.right = "-100vw";
        logoMenu.style.left = "0";
        containerWorks.style.left = "100vw";
        containerProjects.style.marginLeft = "100vw";
        html.style.overflow = "hidden";
        language.style.right = "150px";
        about.style.left = "100vw";
        setTimeout(toggleLeftRight, 500);
        setTimeout(toggleZIndex, 500);
    } else {
        closeBtn.classList.replace("bx-x", "bx-menu");//replacing the iocns class
        modalHover.forEach(e => {
            e.style.left = "calc(100% + 15px)";
        });
        menu.style.left = "-100vw";
        home.style.left = "0";
        logoMenu.style.left = "-100vw";
        containerWorks.style.left = "0";
        if (window.matchMedia("(max-width: 1030px)").matches) {
            containerProjects.style.marginLeft = "50%";
        } else {
            containerProjects.style.marginLeft = "80px";
        }

        setTimeout(toggleScroll, 500);
        language.style.right = "110vw";
        about.style.left = "0";
    }
}

//Passe le scroll en mode "visible"
function toggleScroll() {
    html.style.overflowY = "visible";
}

//Passe la boite de mes travaux en arrière plan
function toggleZIndex() {
    containerDescWorks.style.zIndex = "0";
    containerWorks.style.zIndex = "0";
}

//Retire les pages de description de projets si l'utilisateur ouvre le menu
function toggleLeftRight() {
    left1.style.left = "-50vw";
    right1.style.right = "-50vw";
    left2.style.left = "-50vw";
    right2.style.right = "-50vw";
    left3.style.left = "-50vw";
    right3.style.right = "-50vw";
    left4.style.left = "-50vw";
    right4.style.right = "-50vw";
    left5.style.left = "-50vw";
    right5.style.right = "-50vw";
    left6.style.left = "-50vw";
    right6.style.right = "-50vw";
    left7.style.left = "-50vw";
    right7.style.right = "-50vw";
    pd1.style.zIndex = "0";
    pd2.style.zIndex = "0";
    pd3.style.zIndex = "0";
    pd4.style.zIndex = "0";
    pd5.style.zIndex = "0";
    pd6.style.zIndex = "0";
    pd7.style.zIndex = "0";
}

imgAbout.addEventListener("mouseover", () => {
    textCv.style.opacity = "1";
    imgAbout.style.filter = "blur(2px)";
    textCv.addEventListener("mouseover", () => {
        imgAbout.style.filter = "blur(2px)";
        textCv.style.opacity = "1";
    })
})

imgAbout.addEventListener("mouseleave", () => {
    textCv.style.opacity = "0";
    imgAbout.style.filter = "none";
})

// barba.init({
//     // ...
// })

