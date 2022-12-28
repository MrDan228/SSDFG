// let k1 = document.getElementById('lol1').textContent;
// let k2 = document.getElementById('lol2');

// function lol () {
// k2.innerHTML = k1;
// }

let img = document.getElementById('img1');
let imgArr = ['1.jpg','2.jpg','3.jpg']
let button1 = document.getElementById('button2')
let button2 = document.getElementById('button1')

//event lisener
button1.addEventListener('click', func1)
button2.addEventListener('click', func2)


// // counter
let cn = 0;

//function
function func1(){
    if(cn == imgArr.length - 1){
        cn = -1;
    }
    img.src = imgArr[cn + 1];
    cn++
    console.log(cn)
}
function func2(){
    if(cn == imgArr.length - 1){
        cn = -1;
    }
    img.src = imgArr[cn + 1];
    cn++
    console.log(cn)
}