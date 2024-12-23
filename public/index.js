const ham = document.getElementById('ham')
const cross = document.getElementById('cross')
const navbar = document.getElementById('navbar')

const toggleVisibility = () => {
    ham.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
};

ham.addEventListener('click', ()=>{
    toggleVisibility();
    document.body.style.overflow = 'hidden'
});
cross.addEventListener('click', ()=>{
    toggleVisibility();
    document.body.style.overflow = ''
});
navbar.addEventListener('click', ()=>{
    toggleVisibility();
    document.body.style.overflow = ''
});
