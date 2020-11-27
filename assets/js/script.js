var recipeDisplay = $("#recipes-row")

for(var i = 0; i < recipes.length; i++) {
    recipeCard = $("<div>").addClass("card mb-2")
    recipeCardImg = $("<img>").addClass("card-img-top").attr("src",recipes[i].mainImg)
    recipeCardBody = $("<div>").addClass("card-body")
    recipeCardBodyTitle = $("<h5>").addClass("card-title").text(recipes[i].title)
    recipeCardBodyDescr = $("<p>").addClass("card-text").text(recipes[i].description)

    recipeCardBody.append(recipeCardBodyTitle, recipeCardBodyDescr)
    recipeCard.append(recipeCardImg, recipeCardBody)
    recipeDisplay.append(recipeCard)
}