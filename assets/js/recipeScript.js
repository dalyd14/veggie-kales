var i = parseInt(window.location.search[1])

if(!i) {
    i = 0
}

var recipe = recipes[i]

$("#recipe-title").text(recipe.title)
$("#description").text(recipe.description)

$("#prep-time").text(recipe.prepTime)
$("#cook-time").text(recipe.cookTime)
$("#total-time").text(recipe.totalTime)

$("#recipe-img").attr("src", recipe.mainImg)

for(var n = 0; n < recipe.ingredients.length; n++) {
    if ("title" in recipe.ingredients[n]) {
        var ingredTitle = $("<h5>").text(recipe.ingredients[n].title)
    }
    var ingredList = $("<ul>")
    for(var j = 0; j < recipe.ingredients[n].ingreds.length; j++) {
        var ingredLI = $("<li>").text(recipe.ingredients[n].ingreds[j]) 
        ingredList.append(ingredLI)
        
    }
    $(".ingredients-container").append(ingredTitle, ingredList)
}

var directionsList = $("<ol>")

for(var k = 0; k < recipe.directions.length; k++){
    var directItem = $("<li>").text(recipe.directions[k])
    directionsList.append(directItem)
}

if ("variations" in recipe) {
    $("#recipe").append($("<h3>").text("Variaions"))
    $("#recipe").append($("<div>").addClass("variations-container"))
    var variationsList = $("<ul>")
    for(var k = 0; k < recipe.variations.length; k++){
        var variationItem = $("<li>").text(recipe.variations[k])
        variationsList.append(variationItem)
    }
    $(".variations-container").append(variationsList)
}


$(".directions-container").append(directionsList)