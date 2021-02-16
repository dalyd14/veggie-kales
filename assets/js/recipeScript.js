var i = parseInt(window.location.search[1])

if(!i) {
    i = 0
}

var recipe = recipes[i]

var {
    title,
    description,
    prepTime,
    cookTime,
    totalTime,
    mainImg,
    ingredients,
    directions,
    ...rest
} = recipe

$("#recipe-title").text(title)
$("#description").text(description)

$("#prep-time").text(prepTime)
$("#cook-time").text(cookTime)
$("#total-time").text(totalTime)

$("#recipe-img").attr("src", mainImg)

for(var n = 0; n < ingredients.length; n++) {
    if ("title" in ingredients[n]) {
        var ingredTitle = $("<h5>").text(ingredients[n].title)
    }
    var ingredList = $("<ul>")
    for(var j = 0; j < ingredients[n].ingreds.length; j++) {
        var ingredLI = $("<li>").text(ingredients[n].ingreds[j]) 
        ingredList.append(ingredLI)
        
    }
    $(".ingredients-container").append(ingredTitle, ingredList)
}

var directionsList = $("<ol>")
for(var k = 0; k < directions.length; k++){
    var directItem = $("<li>").text(directions[k])
    directionsList.append(directItem)
}
$(".directions-container").append(directionsList)

for (const [key, value] of Object.entries(rest)) {
    if (key === 'servingCount') {
        $('#servings').text("Servings: " + value)
    } else {
        let listName = key.split("_").join(" ")
        $("#recipe").append($("<h3>").text(listName))
        $("#recipe").append($("<div>").addClass("extra-container"))
        var extrasList = $("<ul>")
        for(var k = 0; k < value.length; k++){
            var extraItem = $("<li>").text(value[k])
            extrasList.append(extraItem)
        }
        $(".extra-container").append(extrasList)
    }
}