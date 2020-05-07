const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  console.log(nav.classList);
burger.addEventListener('click', ()=> {
  nav.classList.toggle('nav-active');
  console.log(nav.classList);
});
//console.log(nav.classList);
navLinks.forEach((link, index) =>{
  link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7 + 0.2)s`;//
});

}

navSlide();

const backgroundChange = () => {
  const image = document.querySelector('.Hero');
  const next = document.querySelector('.Next');
  const prev = document.querySelector('.Prev');
  const number = document.querySelector('.Number');
  const scroll = document.querySelector('.Scroll-white');

  next.addEventListener('click', ()=>{
    image.style.backgroundImage= "url('portfolio2.png')";
    prev.classList.add('Prev-toggle');
    number.innerHTML = '02';
    scroll.style = 'left:1355px;';
  });
  //prev.addEventListener('click', ()=>{
  //  image.style.backgroundImage= "url('portfolio.png')";
  //  prev.classList.removeClass('Prev-toggle');
  //  number.innerHTML = '01';
  //  scroll.style = 'left:1275px;';
  //}
}

backgroundChange();
