var recipes = [
    {
        title: "Veggie Pot Pie",
        description: "An easy vegetarian spin on a classic favorite.",
        mainImg: "./assets/images/pot-pie.jpg",
        servingCount: "4",
        ingredients: [
            {
                ingreds: [
                    "1 can of condensed cream of potato soup",
                    "2 cups of canned or frozen mixed vegetables (canned- drained and rinsed)",
                    "½ yellow onion, chopped",
                    "½ cup oat milk",
                    "½ tsp dried thyme",
                    "½ tsp black pepper",
                    "2 frozen pie crusts"
                ]
            }
        ],
        prepTime: "5 mins",
        cookTime: "40 mins",
        totalTime: "45 mins",
        directions: [
            "Preheat oven to 375°F",
            "Combine soup, veggies, milk, and spices in a bowl",
            "Place 1 pie crust into pan and spoon in the filling",
            "Cover with top crust and press edges together",
            "Bake for 40 minutes"
        ]
    },
    {
        title: "Fancy Ramen - For One",
        description: "An Asian favorite with wholesome ingredients.",
        mainImg: "./assets/images/fancy-ramen.jpeg",
        servingCount: "1",
        ingredients: [
            {
                ingreds: [
                    "1 pack of preferred ramen (I used vegetarian ramen packet)",
                    "2 garlic cloves, minced",
                    "1 tbsp ginger, minced",
                    "1 medium carrot, chopped",
                    "2 small mushrooms",
                    "2 tbsp olive oil",
                    "2 scallions, chopped, separate white part from green",
                    "1 can of baby corn, drained and rinsed"
                ]
            }
        ],
        prepTime: "5 mins",
        cookTime: "15 mins",
        totalTime: "20 mins",
        directions: [
            "Prepare ramen according to package.",
            "While ramen is cooking, add olive oil to a pan over medium heat.",
            "Add garlic, ginger, and white part of scallions to hot pan and stir until aromatic (around 3 mins).",
            "Next add carrot and mushrooms to pan and cook until carrots turned more vibrant orange color (around 4 mins). Turn off heat",
            "Add cooked vegetables to the ramen and stir.",
            "Garnish with chopped green scallions and baby corn.",
            "Enjoy!"
        ],
        Variations: [
            "Optional additional garnishes: red pepper flakes, sesame seeds, cilantro, chili oil"
        ]
    },
    {
        title: "Protein Packed Pesto Pasta",
        description: "A quick, hearty Italian meal.",
        mainImg: "./assets/images/protein-packed-pesto-pasta.jpeg",
        servingCount: "1",
        ingredients: [
            {
                ingreds: [
                    "1 small zucchini, chopped into disks",
                    "3 tbsp olive oil",
                    "1 cup of chickpea noodles (I used Barilla Chickpea Rotini)",
                    "4 tbsp of pesto",
                    "Field Roast Italian Garlic & Fennel plant-based sausage, 1 link chopped"          
                ]
            }
        ],
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        directions: [
            "Preheat oven to 425, and line a baking sheet with parchment paper.",
            "Cook noodles according to packaging.",
            "While pasta is cooking add the chopped zucchini to a mixing bowl and coat with olive oil (1tbsp or more). Season with salt and pepper.",
            "Place zucchini disks in a single layer on the baking sheet and bake for 10 minutes.",
            "Next, sautee field roast sausage in a pan according to packaging, they should be lightly browned.",
            "Once sausage is cooked place on a paper towel to absorb extra oil.",
            "After everything is cooked, place pasta in a bowl and mix in the pesto. Top with roasted zucchini and sausage. Add red pepper flakes or parmesan if desired.",
            "Enjoy!"
        ],
        Protein_Count: [
            "1 cup of Barilla Chickpea Rotini has 11g of protein",
            "1 link of Field Roast Italian Garlic & Fennel plant-based sausage has 25g of protein",
            "1 small zucchini has 1.2g of protein",
            "Total grams of protein: ~ 37.2g"
        ]
    },     
    {
        title: "Vegan Gnocchi Soup",
        description: "A refreshing vegan soup for any season.",
        mainImg: "./assets/images/vegan-gnocchi-soup.jpeg",
        servingCount: "4+",
        ingredients: [
            {
                ingreds: [
                    "2 cups of spinach, chopped into smaller pieces",
                    "¼ cup yellow onion, diced",
                    "4 cloves of garlic, minced",
                    "28 oz canned diced tomatoes (I prefer the basil, garlic, & oregano style)",
                    "1 cup of dairy free milk (I used oat milk)",
                    "2 tbsp olive oil",
                    "2 tbsp dried basil",
                    "2 cups of vegetable broth",
                    "1 package 16 oz of gnocchi (I prefer mini gnocchi)"
                ]
            }
        ],
        prepTime: "5 mins",
        cookTime: "15 mins",
        totalTime: "20 mins",
        directions: [
            "Add olive oil to a large pot over medium heat.",
            "Add garlic and onion to oil and heat until translucent (3 minutes).",
            "Next add in the tomatoes and dried basil and stir.",
            "Then add in the oat milk and broth, stir, and bring to a boil.",
            "Once boiling, add gnocchi and spinach and stir.",
            "Cook for 5 minutes or until spinach is wilted and the gnocchi are soft.",
            "Serve and enjoy!"
        ]
    },
    {
        title: "Holiday Mojito Mocktail",
        description: "A non-alcholic version of a holiday classic!",
        mainImg: "./assets/images/holiday-mojito-mocktail.jpg",
        ingredients: [
            {
                ingreds: [
                    "6 tbsp sugar",
                    "6 tbsp water",
                    "1 cup fresh cranberries",
                    "10-20 sprigs of mint",
                    "4 limes, juiced",
                    "8 ounces of pomegranate juice",
                    "3 cans of ginger ale"
                ]
            }
        ],
        prepTime: "10 mins",
        cookTime: "10 mins",
        totalTime: "20 mins",
        directions: [
            "Make cranberry simple syrup by combining sugar, water, and fresh cranberries in a saucepan. Put on low heat and simmer for 5 to 10 minutes. The cranberries will begin to open up the syrup will become thicker. Let cool.",
            "Add mint and lime peel to pitcher, muddle together.",
            "Add in the ginger ale, lime juice, pomegranate juice, and cranberry syrup into the pitcher and stir.",
            "For a finished look, garnish with more mint leaves and cranberries"
        ]
    },    
    {
        title: "Sheet Pan Dinner",
        description: "A quick one pan dinner solution.",
        mainImg: "./assets/images/sheet-pan.jpg",
        ingredients: [
            {
                ingreds: [
                    "1 lb. baby red potatoes, sliced in half",
                    "1 lb. asparagus, cut into thirds",
                    "1 medium yellow onion, sliced",
                    "1 ½ cups baby carrots",
                    "1 can chickpeas, drained and rinsed",
                    "1 tsp. dried basil, oregano, thyme, and paprika",
                    "½ tsp. garlic powder",
                    "2-3 tbsp olive oil",
                    "Salt and pepper"                    
                ]
            }
        ],
        prepTime: "10 mins",
        cookTime: "30-40 mins",
        totalTime: "40-50 mins",
        directions: [
            "Preheat oven to 425°F and line a baking sheet with parchment paper or grease with oil.",
            "Put potatoes (cut side down), carrots, and chickpeas on the baking sheet and drizzle 1 ½ tbsp of olive oil. Add ¾ of the listed herbs/spices and toss to coat.",
            "Roast for 20-25 minutes.",
            "Remove pan from the oven and push the vegetables to one side. Place onion and asparagus alongside the other vegetables on the sheet pan. Toss them in remining oil and spices/herbs. Place back in the oven for 10-15 additional minutes.",
            "Let cool and serve.",
            "Can be stored in the refrigerator for up to six days."
        ],
        Variations: [
            "Plate with avocado and top with fresh herbs such as parsley",
            "Serve over yellow rice, brown rice, or quinoa",
            "Top a salad with these roasted veggies"
        ]
    },
    {
        title: "Mexican Quinoa Casserole",
        description: "A hearty mexican casserole that is ideal for meal-prepping for the week!",
        mainImg: "./assets/images/mexican-quinoa-casserole.jpeg",
        ingredients: [
            {
                ingreds: [
                    "1 cup uncooked quinoa",
                    "1 cup yellow onion, diced",
                    "15 oz black beans, drained and rinsed",
                    "4 oz can diced green chiles",
                    "28 oz can diced tomatoes, drained",
                    "1 can yellow corn, rinsed and drained",
                    "1 tsp cumin, oregano, chili powder",
                    "1 lime, juiced",
                    "2 cups shredded Mexican blend cheese",
                    "Optional: Fresh cilantro, nutritional yeast"
                ]
            }
        ],
        prepTime: "15 mins",
        cookTime: "40 mins",
        totalTime: "55 mins",
        directions: [
            "Preheat oven to 375°F. Spray 9x13in baking dish with cooking spray.",
            "Cook quinoa according to package.",
            "Meanwhile in a large bowl mix onion, beans, corn, green chiles, tomatoes, spices, and lime juice together.",
            "Once quinoa is cooked add it to the mixture and place in the prepared dish.",
            "Bake for 30 minutes.",
            "After baking carefully pull out of the oven and top with cheese (optional: nutritional yeast). Place back in the oven for an additional 10 minutes.",
            "Let cool, add optional toppings, serve."            
        ],
        Variations: [
            "Plate with avocado and top with fresh herbs such as parsley",
            "Serve over yellow rice, brown rice, or quinoa",
            "Top a salad with these roasted veggies"
        ]
    },
    {
        title: "Jackfruit Noodle Soup",
        description: "A vegan take on the chicken noodle soup classic!",
        mainImg: "./assets/images/jackfruit-noodle-soup.jpeg",
        ingredients: [
            {
                ingreds: [
                    "2 cans of jackfruit, seeded and shredded",
                    "2 cups of carrot, finely chopped",
                    "1 medium yellow onion, diced",
                    "1 carton of vegetable stock",
                    "2 cups of water",
                    "2 tbsp lemon juice",
                    "2 tbsp olive oil",
                    "2 cups of preferred noodles", 
                    "Added to preference: red pepper flakes, black pepper, salt, Italian seasoning, chili powder, garlic powder",
                ]
            }
        ],
        prepTime: "15 mins",
        cookTime: "30 mins",
        totalTime: "45 mins",
        directions: [
            "Heat jackfruit, carrot, and onion in a deep saucepan with olive oil for 10 minutes (or until aromatic and onion is translucent).",
            "Add veggie stock and water. Cover and bring to a boil, then reduce heat down to a simmer for 10 minutes.",
            "Add lemon juice and optional spices.",
            "Simmer for another 10 minutes.",
            "While simmering soup, cook pasta according to box.",
            "Once soup is done stir in pasta and add other spices to taste.",
            "Serve"
        ]
    }
]