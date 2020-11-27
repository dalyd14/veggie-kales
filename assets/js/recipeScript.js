var i = parseInt(window.location.search[i])
if(!i) {
    i = 0
}
console.log(i)

var recipe = recipes[i]

$("#recipe-title").text(recipe.title)
$("#description").text(recipe.description)
// console.log($("#recipe-img"), recipe.mainImg)
// $("#recipe-img").attr("src", recipe.mainImg)(

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

$(".directions-container").append(directionsList)