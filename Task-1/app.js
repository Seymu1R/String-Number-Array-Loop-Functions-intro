function opacity() {
  var text = "Want to see the content?";
  if (confirm(text) == true) {
    document.getElementById("content").style.opacity = "1";
    document.getElementById("btn").style.display = "none";

    document.getElementById("content").style.color = "red";
    document.getElementById("content").style.backgroundColor = "yellow";
  } else {
    document.getElementById("content").style.opacity = "0";
    
  }
}
