$(function(){
    $('.slider').click(function() {
        $('.column2').css("outline", "1px solid red");
        console.log("Value: " + this.value);
    })
});