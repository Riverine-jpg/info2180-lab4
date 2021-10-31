/* Add your JavaScript to this file */
let check = 0;
let url = "http://localhost/info2180-lab4/superheroes.php?query=";

(function(window,document,undefined){
    window.onload = init;
    var xtml = new XMLHttpRequest();
    var alias;
    var name;
    var desc;
    
    function init(){
        var btn = document.getElementsByClassName("btn")[0];
        let response;
        let responsearr;
        btn.addEventListener("click",function(event){
            let search = document.getElementById("search");
            let result = document.getElementById("result");
            event.preventDefault();
            xtml.onreadystatechange = function(){
                if (xtml.readyState === XMLHttpRequest.DONE) {
                    if (xtml.status === 200) {
                    response = xtml.responseText;
                    
                    } else {
                    alert('There was a problem with the request.');
                    }
                   }
            }
            xtml.open('GET', url + search.value,false);
            console.log(url + search.value);
            xtml.send();
            if(search.value == ""){
                $("#result").html("<ul></ul>")
                responsearr = JSON.parse(response);
                var aliasarr = new Array(10);
                var namearr= new Array(10);

                for(var i = 0; i < 10; i++ ){
                    $("ul").append("<li>" + responsearr[i].alias +"</li>")
                }
            }else if(response.length == 2){
                $("#result").html("<h5>SUPERHERO NOT FOUND</h5>") ;
            }else{
                responsearr = JSON.parse(response)
                alias = responsearr['alias'];
                name = responsearr['name'];
                desc = responsearr['biography'];
                $("#result").html("<h3>" + alias + "</h3>" + "<h4>" + name + "</h4>" + "<p>" + desc + "</p>") ;
            }
            
        })
    }
})(window,document,undefined)