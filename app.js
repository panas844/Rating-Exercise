console.log("start")


// Hover Action for Stars-Red Color
function functionHover(x){
    var index = ""
    x.style.color = "red";
    var elements = document.getElementsByClassName("icon-star")
for(var i =0;i<elements.length;i++){
    // console.log(i+elements[i].style.color) 
   if(elements[i].style.color=="red"){
       index =i
   }
}

for(var i =0;i<index;i++){
    document.getElementsByClassName("icon-star")[i].style.color = "red"
}

for(var i =0;i<elements.length;i++){
    if(elements[i].style.color=="green"){
    elements[i].style.color= "black"}
}

}

// No hover Stars return black

function functionOut(x){
    var elements = document.getElementsByClassName("icon-star")
    for(var i =0;i<elements.length;i++){
        if(elements[i].style.color!="green"){
        elements[i].style.color= "black"}
    }
    
}

// Click Action for Stars-Green Color
function functionClick(x){
    var elements = document.getElementsByClassName("icon-star")
    var index = ""
    event.stopPropagation();
    for(var i =0;i<elements.length;i++){
    elements[i].style.color="black"
    }

    x.style.color = "green";
    for(var i =0;i<elements.length;i++){
    // console.log(i+elements[i].style.color) 
   if(elements[i].style.color=="green"){
       index =i
   }
    }

    for(var i =0;i<index;i++){
        document.getElementsByClassName("icon-star")[i].style.color = "green"
    
    }

}

document.getElementById("paok").onclick=function(){

    for(let i=0;i<5;i++){
        document.getElementsByClassName("icon-star")[i].style.color="black"
    }
    }

