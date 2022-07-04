var element = document.body;
var elemet2=document.getElementById('text');
function change() {
  var text = document.getElementById("input").value;
  var no = text.slice(-3, -2);
  if (no == 1) {
    element.style.backgroundColor = "aquamarine";
    document.getElementById("content").style.display="none";
    elemet2.innerText=`${text}`
    elemet2.style.color="yellow"
  }
  else if(no == 2){
    element.style.backgroundColor = "blue";
    document.getElementById("content").style.display="none";
    elemet2.innerText=`${text}`
    elemet2.style.color="red"

  }
  else if(no == 3){
    element.style.backgroundColor = "grey";
    document.getElementById("content").style.display="none"; 
    elemet2.innerText=`${text}`
    elemet2.style.color="black"      


  }

}
