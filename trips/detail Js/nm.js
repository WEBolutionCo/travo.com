const mainPic = document.getElementById("mainPic");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");

pic1.style.border = "solid 2px #f96e06";

const changePic1 = () => {
    mainPic.src = "../images/north-merca.png";
    pic1.style.border = "solid 2px #f96e06";
    pic2.style.border = "none";
    pic3.style.border = "none";
}

const changePic2 = () => {
    mainPic.src = "../images/north-merca2.jpg";
    pic2.style.border = "solid 2px #f96e06";
    pic1.style.border = "none";
    pic3.style.border = "none";
}

const changePic3 = () => {
    mainPic.src = "../images/north-merca3.jpg";
    pic3.style.border = "solid 2px #f96e06";
    pic1.style.border = "none";
    pic2.style.border = "none";
}

