const btnContainer = document.getElementById('sectionA')
const btns = document.getElementsByClassName('btn')

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
      let current = document.getElementsByClassName('active')
      current[0].className = current[0].className.replace('active')
      this.className += 'active'
   })
}

const linkAktif1 = document.querySelector('#sectionA .a-satu')
const linkAktif2 = document.querySelector('#sectionA .a-dua')
const linkAktif3 = document.querySelector('#sectionA .a-tiga')
const linkAktif4 = document.querySelector('#sectionA .a-empat')
const linkAktif5 = document.querySelector('#sectionA .a-lima')
const linkAktif6 = document.querySelector('#sectionA .a-enam')

const p1 = document.querySelector('#sectionA .p-satu .ul-satu')
const p2 = document.querySelector('#sectionA .p-dua .ul-dua')
const p3 = document.querySelector('#sectionA .p-tiga .ul-tiga')
const p4 = document.querySelector('#sectionA .p-empat .ul-empat')
const p5 = document.querySelector('#sectionA .p-lima .ul-lima')
const p6 = document.querySelector('#sectionA .p-enam .ul-enam')

linkAktif1.addEventListener('click', function () {
   p1.classList.toggle('ul-satu');
});
linkAktif2.addEventListener('click', function () {
   p2.classList.toggle('ul-dua');
});
linkAktif3.addEventListener('click', function () {
   p3.classList.toggle('ul-tiga');
});
linkAktif4.addEventListener('click', function () {
   p4.classList.toggle('ul-empat');
});
linkAktif5.addEventListener('click', function () {
   p5.classList.toggle('ul-lima');
});
linkAktif6.addEventListener('click', function () {
   p6.classList.toggle('ul-enam');
});

