let list_responsive = document.getElementById("list_responsive");
let bars = document.getElementById("bars");
let mark = document.getElementsByName("mark");
let test = false;

bars.addEventListener("click",opp)

function opp(){
    if(test == false){
        list_responsive.style.display = 'block';
        test = true;
        bars.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    else if(test == true){
        list_responsive.style.display = 'none';
        test = false;
        bars.innerHTML = '<i class="fa-solid fa-bars" ></i>'
      
    }
}