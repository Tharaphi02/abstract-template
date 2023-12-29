const toggle = document.querySelector('.toggle');
const nav = document.querySelector('header nav')

toggle.onclick = () => {
    nav.classList.toggle('active');
}
// toggle.on('click', function(){
//     nav.classList.toggle('active');
// })