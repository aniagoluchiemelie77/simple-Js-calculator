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
let newParagraphColor = document.getElementsByTagName('p');


const arr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p16, p17, p18];

const test = function (arr) {
    let numberOfClicks = [];
    let output;
    let newClicks;
    arr.forEach(function (curVal, index){
        const clickEvent = function () {
            newParagraphColor.classList.add("sidebar__svg1-display");
            let newOutput;
            let newValue = curVal.textContent;
            newOutput = ` ${newValue} `;
            input1.innerHTML += newOutput;
            //numberOfClicks.push(output);
        } 
        curVal.addEventListener('click', clickEvent);
    })
    output = input1.innerHTML;
     
    const evaluate = function(){
        let output2;
        input1.innerHTML = output2;
        console.log(newClicks);
    }
    p14.addEventListener('click', evaluate)
};
test(arr);

const cleanOutput = function () {
    let text = " ";
    input1.innerHTML = text;
}
p20.addEventListener('click', cleanOutput);



const stretchSideBar = function () {
   sidebar.classList.toggle("sidebar-stretch");

    sideBarSvg2.classList.add("sidebar__svg1-display");
    sideBarDiv1.classList.add("sidebar__cos");
    sideBarDiv2.classList.add("sidebar__sin");
    sideBarDiv3.classList.add("sidebar__tan");
    sideBarDiv4.classList.add("sidebar__percent");
    sideBarSvg1.classList.add("sidebar__svg1-hide");
}
sidebar.addEventListener('click', stretchSideBar);