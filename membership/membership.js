const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".box-slider")[0];
arrowIcons = document.querySelectorAll(".wrapper .ctrl");

let isDragStart = false, isDragging = false, prevPagex, prevScrollLeft, positionDiff;


const showHideIcons =  () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 20;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth - 20;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft){
        carousel.scrollLeft += positionDiff  > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff  > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPagex = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPagex;
    carousel.scrollLeft =  prevScrollLeft - positionDiff;
    showHideIcons();

}

const dragStop = () => { 
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging ) return;
    isDragStart = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchStart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);



var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
ctx.strokeStyle = "#626381";
ctx.moveTo(5,0);
ctx.lineTo(5,83);
ctx.stroke();
var mycanvas2 = document.getElementById('mycanvas2');
var c = mycanvas2.getContext('2d');
c.strokeStyle = "#626381";
c.moveTo(2,0);
c.lineTo(2,17);
c.stroke();
var mycanvas3 = document.getElementById('mycanvas3');
var tx = mycanvas3.getContext('2d');
tx.strokeStyle = "#626381";
tx.moveTo(2,0);
tx.lineTo(2,17);
tx.stroke();