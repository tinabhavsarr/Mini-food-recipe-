const recipes = [
    {
      title: "Spicy Garlic Pasta",
      ingredients: ["200g pasta", "4 garlic cloves", "Chili flakes", "Olive oil", "Salt & pepper"],
      link: "https://www.youtube.com/watch?v=X-Z6mtWvXM4"
    },
    {
      title: "Classic Cheeseburger",
      ingredients: ["Burger buns", "Beef/Veggie patty", "Cheddar cheese", "Lettuce & tomato", "Burger sauce"],
      link: "https://www.youtube.com/shorts/CykeQQUDUas"
    },
    {
      title: "Margherita Pizza",
      ingredients: ["Pizza base", "Tomato sauce", "Mozzarella", "Basil leaves", "Olive oil"],
      link: "https://www.youtube.com/shorts/HSeohGLqhQs"
    },
    {
      title: "Green Power Salad",
      ingredients: ["Spinach", "Avocado", "Cucumber", "Feta cheese", "Lemon dressing"],
      link: "https://www.youtube.com/shorts/C82tIaMwZCA"
    },
    {
      title: "Creamy Tomato Soup",
      ingredients: ["Tomatoes", "Cream", "Garlic", "Onion", "Basil"],
      link: "https://www.youtube.com/shorts/LwksxC5OXF0"
    },
    {
      title: "Basic Sushi Roll",
      ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Avocado", "Soy sauce"],
      link: "https://www.youtube.com/shorts/PYcQMOXWKb0"
    },
    {
      title: "Loaded Masala Fries",
      ingredients: ["Potatoes", "Chaat masala", "Cheese", "Onion", "Mint chutney"],
      link: "https://www.youtube.com/shorts/tVz1GBz8iVo"
    },
    {
      title: "Fluffy Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Baking powder", "Maple syrup"],
      link: "https://www.youtube.com/shorts/z2G6p-CDOeQ"
    }
  ];
  
  function openModal(index) {
    const modal = document.getElementById("recipeModal");
    const title = document.getElementById("recipeTitle");
    const list = document.getElementById("ingredientsList");
    const link = document.getElementById("recipeLink");
  
    title.textContent = recipes[index].title;
    list.innerHTML = "";
    recipes[index].ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      list.appendChild(li);
    });
    link.href = recipes[index].link;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
  }
  