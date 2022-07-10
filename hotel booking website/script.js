let search = document.querySelector('#icon');
let searchbox = document.querySelector('#icon');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');




search.onclick = () =>{
    searchbox.classList.toggle('active');
}
menubar.onclick = () =>{
    menubar.classlist.toggle('fa-times')
    mynav.classlist.toggle('active')
}
}
