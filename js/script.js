
// GET JSON data from external source
function fetchJSON(callback) {
    var obj = new XMLHttpRequest();
    obj.overrideMimeType("application/json");
    obj.open("GET", "https://api.myjson.com/bins/18esl0", true);
    obj.onreadystatechange = function() {
        if(obj.readyState == 4 && obj.status == "200") {
            callback(obj.responseText);
        }
    };
    obj.send(null);
}

// Parse received JSON data
function init() {
    fetchJSON(function(response) {
        var myJSON = JSON.parse(response);
        console.log(myJSON[2].amounts);
        for(var i = 0; i <= myJSON.length; i++) {
            console.log(myJSON[i]);
            // $(".column2").append(myJSON.amounts);
        }
       
    });
}

// Click Listener for Dynamic Slider
$(function(){
    $('.slider').click(function() {
        // $('.column2').css("outline", "1px solid red");
        console.log("Value: " + this.value);
        // $('.tickmarks p').removeClass('active');
        init();
    })
});