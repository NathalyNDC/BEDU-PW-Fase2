var balloon = document.querySelector("p");
var size = 20;
balloon.style.fontSize = size + "px";

function actionsBalloon(event) {
    if(event.key == "ArrowUp"){//arriba
        if(size > 80){
            balloon.textContent = "💥";
            window.removeEventListener("keydown", actionsBalloon);
        }
        else{
          size += size*0.1; 
          console.log(size);                            
          balloon.style.fontSize = size+"px;";
          event.preventDefault();
          
        } 
    }
    else if(event.key == "ArrowDown"){//abajo
         
        size -= size*0.1;   
        console.log(size);                      
        balloon.style.fontSize= size+"px;";
        event.preventDefault();
        
     }
    
}

window.addEventListener("keydown", actionsBalloon);
 
