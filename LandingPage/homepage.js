var navlist_item1 = document.querySelector(".navlist_item1");
var navlist_item2 = document.querySelector(".navlist_item2");
var navlist_item3 = document.querySelector(".navlist_item3");
var navlist_item4 = document.querySelector(".navlist_item4");
var navlist_item6 = document.querySelector(".navlist_item6");

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    console.log(this.window.scrollY)
    if(window.scrollY>3580 && window.scrollY<6000){
        navlist_item4.classList.remove("heighlit");
        navlist_item6.classList.add("heighlit");
    }
    if(window.scrollY>2880 && window.scrollY<3580){
        navlist_item2.classList.remove("heighlit");
        navlist_item3.classList.remove("heighlit");
        navlist_item6.classList.remove("heighlit");
        navlist_item4.classList.add("heighlit");
    }
    if(window.scrollY>2000 && window.scrollY<2800){
        navlist_item2.classList.remove("heighlit");
        navlist_item4.classList.remove("heighlit");
        navlist_item6.classList.remove("heighlit");
        navlist_item3.classList.add("heighlit");
    }
    if(window.scrollY>600 && window.scrollY<2000){
        console.log('now')
        navlist_item1.classList.remove("heighlit");
        navlist_item3.classList.remove("heighlit");
        navlist_item4.classList.remove("heighlit");
        navlist_item6.classList.remove("heighlit");
        navlist_item2.classList.add("heighlit");
    }
    if(window.scrollY >100 && window.scrollY<600){
        header.classList.add("scrollingheader");
    }
    if(window.scrollY <100){
        header.classList.remove("scrollingheader");
        navlist_item1.classList.add("heighlit");
        navlist_item2.classList.remove("heighlit");
        navlist_item3.classList.remove("heighlit");
        navlist_item4.classList.remove("heighlit");
        navlist_item6.classList.remove("heighlit");
    }
})
var question1=document.querySelector('.question1')
var question2=document.querySelector('.question2')

var question3=document.querySelector('.question3')


var que=document.getElementsByClassName("question_answers")

var i;
var j;
var len=que.length;
for(i=0;i<len;i++){
    que[i].addEventListener('click',function(){
        this.classList.toggle('open');
        this.classList.toggle('artical_detels')
        question1.classList.add('is_closed')
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight +'px'
        }
    })
}

var span =document.getElementsByTagName('span')


var button=document.querySelector('.hamburger')
var navlist=document.querySelector('ul')
var lastitem=navlist.lastElementChild
var buttonchildlist=document.querySelector("nav ul")

var span=document.querySelectorAll(".hamburger span")

var list=buttonchildlist.children[4]

var nistedlist=document.querySelector('.drop_down_mum')
var nistedlistitems=document.querySelector('.drop_down')

button.addEventListener('click',function(){
    navlist.classList.toggle('hamburgermenu')
    nistedlist.classList.toggle("drop_down_mum")
    list.classList.toggle('arrowdown')
    span[0].classList.toggle("listopenright")
    span[1].classList.toggle("diably")
    span[2].classList.toggle("listopenleft")
})

nistedlist.addEventListener('click',function(){
    nistedlistitems.classList.toggle('nistlist')
    lastitem.classList.toggle("movedown")
})

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    grabCursor: true,

    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
