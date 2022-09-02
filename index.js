function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

function myOptions() {
    var text = document.querySelector("#mySelectors");
    text.style.color = "yellow";
    var opt = document.getElementById("mySelectors").value;
    document.getElementById("demo").innerHTML = opt;
}
function linkread() {
    document.getElementById("pRM").innerHTML = "Web Developer is required a skills of Front end Development: Html, Css, Javascript and for Back end Development is Php, Java, Nodejs Python etc.";
}
function Executer() {
  document.getElementById("myImages").src = "./image/eduard.jpg";
}
function myExecuter() {
  document.getElementById("ttImg").src = "./image/eduard.jpg";
}