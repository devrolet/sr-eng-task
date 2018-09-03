
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
        // Change Dollar Values based on Slider Position
        if(slider.value == 150000) {
            $("._150k").addClass("active");
            $(".column2").empty();
            $(".drk-blgr:last").empty();
            $(".prem1").append("$"+data[2].amounts.prem1);
            $(".prem2").append("$"+data[2].amounts.prem2);
            $(".prem3").append("$"+data[2].amounts.prem3);
            $(".prem4").append("$"+data[2].amounts.prem4);
            $(".drk-blgr:last").append("$"+data[2].amounts.total);
        } else if(slider.value == 50000){
            $("p:first-child").addClass("active");
            $(".column2").empty();
            $(".drk-blgr:last").empty();
            $(".prem1").append("$"+data[0].amounts.prem1);
            $(".prem2").append("$"+data[0].amounts.prem2);
            $(".prem3").append("$"+data[0].amounts.prem3);
            $(".prem4").append("$"+data[0].amounts.prem4);
            $(".drk-blgr:last").append("$"+data[0].amounts.total);
        } else if(slider.value == 100000) {
            $("._100k").addClass("active");
            $(".column2").empty();
            $(".drk-blgr:last").empty();
            $(".prem1").append("$"+data[1].amounts.prem1);
            $(".prem2").append("$"+data[1].amounts.prem2);
            $(".prem3").append("$"+data[1].amounts.prem3);
            $(".prem4").append("$"+data[1].amounts.prem4);
            $(".drk-blgr:last").append("$"+data[1].amounts.total);
        } else if(slider.value == 200000) {
            $("._200k").addClass("active");
            $(".column2").empty();
            $(".drk-blgr:last").empty();
            $(".prem1").append("$"+data[3].amounts.prem1);
            $(".prem2").append("$"+data[3].amounts.prem2);
            $(".prem3").append("$"+data[3].amounts.prem3);
            $(".prem4").append("$"+data[3].amounts.prem4);
            $(".drk-blgr:last").append("$"+data[3].amounts.total);
        } else if(slider.value == 250000) {
            $("p:last-child").addClass("active");
            $(".column2").empty();
            $(".drk-blgr:last").empty();
            $(".prem1").append("$"+data[4].amounts.prem1);
            $(".prem2").append("$"+data[4].amounts.prem2);
            $(".prem3").append("$"+data[4].amounts.prem3);
            $(".prem4").append("$"+data[4].amounts.prem4);
            $(".drk-blgr:last").append("$"+data[4].amounts.total);
        } else {
            console.log("There was an error");
        }
    });
}

// Click Listener for Dynamic Slider
$('.slider').click(function() {
    var activeAmt = document.getElementsByClassName("active");
    $("p").removeClass("active");
    addData();
})

addData();
});