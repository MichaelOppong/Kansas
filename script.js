$(document).ready(function(){
var capital = "Topeka";

$("button").click(function(){
if(capital=== $("input").val()){
    $("p").html("That is correct!");
}
else {
        $("p").html("That is incorrect!");
}
});
});