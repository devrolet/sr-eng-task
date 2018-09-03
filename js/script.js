
$(function(){
    
// GET JSON data from external source
function getJSON(callback) {
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
function addData() {
    getJSON(function(response) {
        var slider = document.getElementById("slider");
        var data = JSON.parse(response);
        $(".prem1").append("$"+data[2].amounts.prem1);
        $(".prem2").append("$"+data[2].amounts.prem2);
        $(".prem3").append("$"+data[2].amounts.prem3);
        $(".prem4").append("$"+data[2].amounts.prem4);
        $(".drk-blgr:last").append("$"+data[2].amounts.total);
        console.log(slider.value);
        for(var i = 0; i < data.length; i++) {
            
            
        } 
    });
}

// Click Listener for Dynamic Slider
$('.slider').click(function() {
    console.log("Value: " + this.value);
})

addData();
});