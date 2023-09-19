let aboutme = document.querySelector('#About>div:nth-child(1)')
let myphoto = document.querySelector('#About>div:nth-child(2)')
let navelements = document.querySelectorAll('header>nav>ul>li>a')

function setup(){
    aboutme.classList.add('showsection')
    myphoto.classList.add('showsection')
}


window.addEventListener('scroll',()=>{
    if(window.scrollY<49){
        navelements[0].classList=""
        navelements[1].classList=""
        navelements[2].classList=""
        navelements[3].classList=""
        navelements[4].classList=""
        navelements[5].classList=""
    }
    //about
    if(window.scrollY>50 && window.scrollY<778){
        navelements[0].classList.add('highlight')
        navelements[1].classList=""
        navelements[2].classList=""
        navelements[3].classList=""
        navelements[4].classList=""
        navelements[5].classList=""
    }
    //projects
    if(window.scrollY>778 && window.scrollY<1490){
        navelements[0].classList=""
        navelements[1].classList.add('highlight')
        navelements[2].classList=""
        navelements[3].classList=""
        navelements[4].classList=""
        navelements[5].classList=""
    }
    //achievements
    if(window.scrollY>1490 && window.scrollY<2000){
        navelements[0].classList=""
        navelements[1].classList=""
        navelements[2].classList.add('highlight')
        navelements[3].classList=""
        navelements[4].classList=""
        navelements[5].classList=""
    }
    //skills
    if(window.scrollY>2000 && window.scrollY<2900){
        navelements[0].classList=""
        navelements[1].classList=""
        navelements[2].classList=""
        navelements[3].classList.add('highlight')
        navelements[4].classList=""
        navelements[5].classList=""
    }
    //resume
    if(window.scrollY>2900 && window.scrollY<3395){
        navelements[0].classList=""
        navelements[1].classList=""
        navelements[2].classList=""
        navelements[3].classList=""
        navelements[4].classList.add('highlight')
        navelements[5].classList=""
    }
    //contact me
    if(window.scrollY>3395 && window.scrollY<10000){
        navelements[0].classList=""
        navelements[1].classList=""
        navelements[2].classList=""
        navelements[3].classList=""
        navelements[4].classList=""
        navelements[5].classList.add('highlight')
    }
})