const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const cakeBtn = document.getElementById('cake-btn');
const dishBtn = document.getElementById('dish-btn');
const otherBtn = document.getElementById('other-btn');

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
})

function openDishCategory(){
    document.getElementById('cake-category').style.display = 'none';
    document.getElementById('other-category').style.display = 'none';
    document.getElementById('dish-category').style.display = 'block';
}

function openCakeCategory(){
    document.getElementById('cake-category').style.display = 'block';
    document.getElementById('other-category').style.display = 'none';
    document.getElementById('dish-category').style.display = 'none';
}

function openOtherCategory(){
    document.getElementById('cake-category').style.display = 'none';
    document.getElementById('other-category').style.display = 'block';
    document.getElementById('dish-category').style.display = 'none';
}