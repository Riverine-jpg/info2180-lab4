/* Add your JavaScript to this file */
let check = 0;
let url = "http://localhost/info2180-lab4/superheroes.php";

(function(window,document,undefined){
    window.onload = init;
    var xtml = new XMLHttpRequest();
    
    function init(){
        var btn = document.getElementsByClassName("btn")[0];
        btn.addEventListener("click",function(event){
            event.preventDefault();
            alert("check");
            xtml.onreadystatechange = function(){
                if (xtml.readyState === XMLHttpRequest.DONE) {
                    if (xtml.status === 200) {
                    var response = xtml.responseText;
                    alert(response);
                    } else {
                    alert('There was a problem with the request.');
                    }
                   }
            }
            xtml.open('GET', url);
            xtml.send();
            
        })
        
    }
})(window,document,undefined)