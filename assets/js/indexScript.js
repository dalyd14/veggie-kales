var recipeDisplay = $("#recipes-row")

for(var i = 0; i < recipes.length; i++) {
    var recipeCol = $("<div>").addClass("col-6 col-md-4")
    recipeCol.html(
        `
        <div class="recipe-container mb-2" id="` + i + `">
            <img class="recipe-img" src="` + recipes[i].mainImg + `"/>
            <div class="recipe-display-text">
                <h5>` + recipes[i].title + `</h5>
            </div>
        </div>
        `
    )
    recipeDisplay.append(recipeCol)
}

$("#recipes-container").on("click", ".recipe-container", function(){
    window.location = "/recipes?" + $(this).attr("id")
})