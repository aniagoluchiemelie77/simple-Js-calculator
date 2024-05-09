'use strict';

//selecting classes
const p1 = document.querySelector(".section__div1-p");
const p2 = document.querySelector(".section__div2-p");
const p3 = document.querySelector(".section__div3-p");
const p4 = document.querySelector(".section__div4-p");
const p5 = document.querySelector(".section__div5-p");
const p6 = document.querySelector(".section__div6-p");
const p7 = document.querySelector(".section__div7-p");
const p8 = document.querySelector(".section__div8-p");
const p9 = document.querySelector(".section__div9-p");
const p10 = document.querySelector(".section__div10-p");
const p11 = document.querySelector(".section__div11-p");
const p12 = document.querySelector(".section__div12-p");
const p13 = document.querySelector(".section__div13-p");
const p14 = document.querySelector(".section__div14-p");
const p15 = document.querySelector(".section__div15-p");
const p16 = document.querySelector(".section__div16-p");
const p17 = document.querySelector(".section__div17-p");
const p18 = document.querySelector(".section__div18-p");
const input1 = document.getElementById('fname')
const p20 = document.querySelector(".section__div20-p");
const divs = document.querySelectorAll(".sec__div")

const arr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p20];
const arrFunc = arr.forEach(function(para){
    let contents = para.textContent;
    return contents;
})

const updateInput = function () {
    divs.addEventListener('click', function () {
        arrFunc();
        let input2 = ` ${curNum} `;
        input1.textContent = input2;
    })
}
updateInput();