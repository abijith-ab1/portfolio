function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}

i = document.getElementById('mode-toggle')
window.addEventListener('load',()=>{
  if(window.matchMedia('(prefers-color-scheme:dark)').matches){
    i.classList.add("fa-sun")
  }else{
   i.classList.add("fa-moon")
  }
})
// changing the icon in darkmode and lightmode
i.addEventListener('click',()=>{
  if(i.classList.contains('fa-sun')){
    i.classList.replace('fa-sun','fa-moon')
  }else{
    i.classList.replace('fa-moon','fa-sun')
    
  }
})

