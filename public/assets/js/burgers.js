// Handles Inputs From The Front End

// Start Function
//================================
$(function() {

    // Listens to 'Devour' button and changes burger to eaten when it's clicked
    //_________________________________________________________________________
    $(".change-devoured").on("click", function() {
        var id = $(this).data("id");
        var nowDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function() {
            location.reload();
        });
    });


    // Submits new burger to and changes burger to eaten when it's clicked
    //_________________________________________________________________________
    $(".new-burger-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burg").val().trim()
        };


        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New Burger Added!");
            location.reload();
        })
    })

})


