/* Add your JavaScript to this file */
let check = 0;
let url = "http://localhost/info2180-lab4/superheroes.php";

(function(window,document,undefined){
    window.onload = init;
    var xtml = new XMLHttpRequest();
    var arr;
    function init(){
        var btn = document.getElementsByClassName("btn")[0];
        let response;
        xtml.onreadystatechange = function(){
            if (xtml.readyState === XMLHttpRequest.DONE) {
                if (xtml.status === 200) {
                response = JSON.parse(xtml.responseText);
                
                } else {
                alert('There was a problem with the request.');
                }
               }
        }
        xtml.open('GET', url,false);
        xtml.send();
        var aliasarr = new Array(10);
        var namearr= new Array(10);
        for(var i = 0; i < 10; i++ ){
            aliasarr[i] = response[i].alias;
            namearr[i] = response[i].name;
        }
        btn.addEventListener("click",function(event){
            event.preventDefault();
            var result = document.getElementById("result");
            var search = document.getElementById("search").value;
            if(search == ''){
                result.textContent = "nope";
            }else{
                result.textContent = "???";
            }
        })
        
    }
})(window,document,undefined)