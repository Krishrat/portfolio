const buttonElement1 = document.getElementById("home-item");
const buttonElement2 = document.getElementById("skills-item");
const buttonElement3 = document.getElementById("contact-item");
buttonElement1.addEventListener("click", function () {
  buttonElement1.classList.add("click");
  buttonElement2.classList.remove("click");
  buttonElement3.classList.remove("click");
});

buttonElement2.addEventListener("click", function () {
  buttonElement2.classList.add("click");
  buttonElement1.classList.remove("click");
  buttonElement3.classList.remove("click");
});

buttonElement3.addEventListener("click", function () {
  buttonElement3.classList.add("click");
  buttonElement2.classList.remove("click");
  buttonElement1.classList.remove("click");
});
let toggleBtn=document.querySelector('.toggle-btn');
let nav=document.querySelector('.nav')
let navItems=document.querySelectorAll('.nav-item');

navItems.forEach( item => {
  item.addEventListener('click', function(){
    navItems.forEach(i => {
      i.classList.remove('click')
    })
    item.classList.add('click')


  })
})

function setToggle(){

  let win = window, doc = document, docElem = doc.documentElement, body = doc.getElementsByTagName('body')[0]
   let x = win.innerWidth || docElem.clientWidth || body.clientWidth
  
  if(x<=768){
    toggleBtn.classList.remove('hide')
    nav.classList.add('hide')

    navItems.forEach( item => {

      item.addEventListener('click', function(){
        toggleBtn.click()
      })
    })
    
  }
  else{
 
    toggleBtn.classList.add('hide')
    nav.classList.remove('hide')
   
  }

}
window.addEventListener("load", setToggle)
window.addEventListener("resize", setToggle);

toggleBtn.addEventListener('click', function(){
  nav.classList.toggle('hide')
})