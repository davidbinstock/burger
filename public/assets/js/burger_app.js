$(document).ready(function(){
    console.log("burger_app is in!!");

    $(document).on("click", ".eat-button", function(){
        console.log("Eat Button Clicked!")
        var id = $(this).data("id")
        $.ajax({
           url: "/api/update/"+id,
           type: "PUT"
        }).then(function(){
            console.log("Burger updated")
            location.reload();
        })
    });
    
    $("#add-burger-button").on("click", function(event){
        burgerInput = $("#input-box").val();
        if(!burgerInput){ 
            return console.log("please enter a burger name");
        }
        
        console.log("Add Burger Button Clicked!")
        var newBurger = {
           burgerName: $("#input-box").val()
        }
        $.post("/api/add",newBurger, function(){
            console.log("front end Burger Added")
            location.reload();
        })
    });

})

