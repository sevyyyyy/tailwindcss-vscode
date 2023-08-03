const borger = document.querySelector(".borger");
const drop = document.querySelector(".drop");
console.log(borger)
console.log(drop)


borger.addEventListener('click',()=>{
    drop.classList.toggle('h-[23.3rem]');
    drop.classList.toggle('overflow-y-scroll');
})