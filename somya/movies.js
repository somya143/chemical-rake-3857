let imgNum = 0;
let img = document.querySelector("img");

let button = document.querySelectorAll("button");



let imageArray = [

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145103/cover/1170x658withlogo5b18fb5da683450b82714d741dcfa67b.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1921832123/cover/00movie1921832123inlist.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z524435/cover/1170x658withlogo48c25644371544e79a12a262184a14bc.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-199529/cover/00199529inlis1911854783b40ef40aeea54163b2bc27bbaab8a368.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/cover/1170x658withlogo6960926aa098486099aaf0cd96a372e4.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/cover/1170x658withlogo1c10879e20964ec5aab27cf7e7884519.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5114100/cover/1170x658withlogo8a2c647d516b40348c58da73469453ce.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5191648/cover/1170x658withlogo8f522686e41a4604a38fadb8bf948d16.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1170x658withlogo39e9b67c713e4044a52d5131b6ccd53521a38ea1dd104036bec69b8f16b84347.jpg",

"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/cover/1170x658withlogof994f29250bc49d1b5c4b7d8df4454803b1854ad776d49be880c19d6b0411f77.jpg",

];

 button[0].addEventListener("click" , function(){

    if(imgNum===0){
        imgNum = imageArray.length-1;
    } else{
        imgNum--;
    }

    img.src = imageArray[imgNum];
 })

 button[1].addEventListener("click" , function(){

if(imgNum===imageArray.length-1){
    imgNum = 0;
} else{
    imgNum++;
}

img.src = imageArray[imgNum];
})

 console.log(imgNum)