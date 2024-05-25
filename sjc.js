'use strict';

//selecting classes
const p1 = document.querySelector(".section__div1");
const p2 = document.querySelector(".section__div2");
const p3 = document.querySelector(".section__div3");
const p4 = document.querySelector(".section__div4");
const p5 = document.querySelector(".section__div5");
const p6 = document.querySelector(".section__div6");
const p7 = document.querySelector(".section__div7");
const p8 = document.querySelector(".section__div8");
const p9 = document.querySelector(".section__div9");
const p10 = document.querySelector(".section__div10");
const p11 = document.querySelector(".section__div11");
const p12 = document.querySelector(".section__div12");
const p13 = document.querySelector(".section__div13");
const p16 = document.querySelector(".section__div16");
const p17 = document.querySelector(".section__div17");
const p18 = document.querySelector(".section__div18");
let input1;
 input1 = document.getElementById('fname');
let p14 = document.querySelector('.section__div14'); 
let p20 = document.querySelector('.section__div20');
let sidebar = document.querySelector('.sectionsidebar');
let sideBarSvg2 = document.querySelector('.sectionsidebar__div');

let sideBarSvg1 = document.querySelector('.sectionsidebar__span');
let sideBarDiv1 = document.querySelector('.sectionsidebar__div1');
let sideBarDiv2 = document.querySelector('.sectionsidebar__div2');
let sideBarDiv3 = document.querySelector('.sectionsidebar__div3');
let sideBarDiv4 = document.querySelector('.sectionsidebar__div4');
const shiftKey = document.querySelector('.section__div15-p');
const shiftElement = document.querySelectorAll('.paragraph-green');
let sideBarStretchDiv5 = document.querySelector('.sectionsidebar__div5');

//Arranging elements in array for looping
const arr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p16, p17, p18];
const arr2 = [sideBarDiv1, sideBarDiv2, sideBarDiv3, sideBarDiv4, sideBarStretchDiv5];

const test = function (arr) {
    arr.forEach(function (curVal, index) {
        const clickEvent = function () {
            let newOutput;
            let newValue = curVal.textContent;
            newOutput = ` ${newValue} `;
            input1.innerHTML += newOutput;
        } 
        curVal.addEventListener('click', clickEvent);
    })
};
test(arr);

//For calculation 
/*const evaluate = function(){
    let output2;
    input1.innerHTML = output2;
    console.log(output);
}
p14.addEventListener('click', evaluate);
evaluate();*/

//For del event
const cleanOutput = function () {
    let text = " ";
    input1.innerHTML = text;
}
p20.addEventListener('click', cleanOutput);


//For sidebar stretch event
const stretchSideBar = function (e) {
    sidebar.classList.toggle("sidebar-stretch");
    sideBarSvg2.classList.toggle("sectionsidebar__div-initial");
    sideBarDiv1.classList.toggle("sectionsidebar__div-initial");
    sideBarDiv2.classList.toggle("sectionsidebar__div-initial");
    sideBarDiv3.classList.toggle("sectionsidebar__div-initial");
    sideBarDiv4.classList.toggle("sectionsidebar__div-initial");
    sideBarStretchDiv5.classList.toggle("sectionsidebar__div-initial");
    sideBarSvg1.classList.toggle("sidebar__svg1-hide");

    const test = function (arr) {
        let output;
        arr.forEach(function (curVal) {
            const clickEvent = function (e) {
                e.stopPropagation();
                let newOutput;
                let newValue = curVal.textContent;
                newOutput = ` ${newValue} `;
                input1.innerHTML += newOutput;
            } 
            curVal.addEventListener('click', clickEvent);
        })
    };
    test(arr2);
    e.stopPropagation();
}
sidebar.addEventListener('click', stretchSideBar);

//for shift key
const shiftFunc = function (e){
    e.stopPropagation();
    shiftKey.classList.replace('section__p', 'p-yellow__shift');
    shiftElement.classList.replace('shift__element', 'p-yellow');
};
shiftKey.addEventListener('click', shiftFunc);