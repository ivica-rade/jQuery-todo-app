//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete a listing
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stops event bubbling
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing todo text from input, clears the input
        var todoText = $(this).val();
        $(this).val("");
        //creates a new li and adds to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

//click on the plus icon to toggle the input 
$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
});