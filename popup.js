
//Render storage data to popup labels at startup.
function RenderFromLocalStorage(){
  document.getElementById('advice-number').textContent = "#"+localStorage.advicenumber;
  document.getElementById('advice-txt').textContent = localStorage.currentadvice;
}

//
document.addEventListener('DOMContentLoaded', function() {
  RenderFromLocalStorage();
}); 
