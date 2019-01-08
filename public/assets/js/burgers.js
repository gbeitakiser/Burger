// Handles Inputs From The Front End

// Start Function
//================================
$(function() {
    $(".change-devoured").on("click", function() {
        var id = $(this).data("id");
        var nowDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function() {
            console.log("Burger eaten...ID: " + id + "...Devoured: " + nowDevoured);
            location.reload();
        });
    })
})