function drop() {
    document.getElementById("mydropdown").classList.toggle("show");
}
function popup(){
    document.getElementById("myFilter").classList.toggle("show");

} 
function starcolor(){
    // document.getElementById("strclr").style.color="yellow";
    var element =document.getElementById("strclr");
    // element.classList.toggle("color");
    event.currentTarget.classList.toggle("color");
}
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
}
function active1(){
    var header = document.getElementById("browseid");
    var btns = header.getElementsByClassName("browseblock");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace(" active1", "");
        this.className += " active1";
      });
    }
}
function active(){
    var header = document.getElementById("myId");
    var btns = header.getElementsByClassName("block");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
}
function starcolor(){
                                
    var element =document.getElementById("strclr");
    
    event.currentTarget.classList.toggle("color");
}
function popup(){
    document.getElementById("myFilter").classList.toggle("show");

} 
function drop() {
    document.getElementById("mydropdown").classList.toggle("show");
}
