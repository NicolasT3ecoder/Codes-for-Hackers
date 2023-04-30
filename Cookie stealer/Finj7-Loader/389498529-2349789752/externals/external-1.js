function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("function", "service troop", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("JSON 50GB");
}