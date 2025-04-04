//Home page wellness tip 
document.addEventListener('DOMContentLoaded', () => {
    const wellnessTips = [
        "Stay hydrated throughout the day.",
        "Take a 5-minute break every hour to stretch.",
        "Practice mindfulness meditation daily.",
        "Aim for at least 7-8 hours of sleep each night.",
        "Incorporate more fruits and veggies into your diet.",
        "Get 30 minutes of physical activity daily.",
        "Spend time outdoors to boost your mood.",
        "Set achievable wellness goals for yourself."
    ];

    const tipContainer = document.getElementById('wellness-tip-container');

    function showWellnessTip() {
        const randomIndex = Math.floor(Math.random() * wellnessTips.length);
        const tip = wellnessTips[randomIndex];

        // Set the tip text
        tipContainer.innerText = tip;

        // Add animation class for fade-in effect
        tipContainer.classList.add('show');
        setTimeout(() => {
            tipContainer.classList.remove('show');
        }, 4000); // Remove after 4 seconds
    }

    // Add event listener to button
    document.getElementById('get-tip-btn').addEventListener('click', showWellnessTip);
});




  // Exercise page BMI calculator 
  function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    if (!weight || !height) {
      document.getElementById('bmi-result').innerText = "Please enter valid weight and height.";
      return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Healthy Weight";
    else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
    else category = "Obesity";
  
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${category}).`;
  }
  
 


  // Home page water intake bar 
  document.addEventListener('DOMContentLoaded', (event) => {
    let glassesDrunk = 0;
    const glassCapacity = 0.25; // Each glass is 0.25 liters
    const goalLiters = 2; // Goal is 2 liters
    const progressBar = document.getElementById('progress-bar');
    const glassesCountElement = document.getElementById('glasses-count');
    const hydrationInfoElement = document.getElementById('hydration-info');
    const hydrationMessageElement = document.getElementById('hydration-message');

    // Function to add a glass of water
    function addGlass() {
        if (glassesDrunk * glassCapacity >= goalLiters) {
            hydrationMessageElement.innerText = "🎉 Great job! You've reached your daily hydration goal! 🎉";
            return; // Prevent further glasses after reaching the goal
        }

        // Increment glasses
        glassesDrunk++;

        // Update progress bar width
        const progressPercentage = (glassesDrunk * glassCapacity / goalLiters) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update hydration info text
        glassesCountElement.innerText = glassesDrunk;
        hydrationInfoElement.innerText = `You've consumed ${glassesDrunk} glasses (${(glassesDrunk * glassCapacity).toFixed(2)} liters) today.`;

        // If goal reached, display success message
        if (glassesDrunk * glassCapacity >= goalLiters) {
            hydrationMessageElement.innerText = "🎉 Great job! You've reached your daily hydration goal! 🎉";
        }
    }

    // Function to reset hydration tracker
    function resetHydration() {
        glassesDrunk = 0;
        progressBar.style.width = '0%'; // Reset progress bar to 0%

        // Reset hydration info text
        glassesCountElement.innerText = glassesDrunk;
        hydrationInfoElement.innerText = "You've consumed 0 glasses (0 liters) today.";
        hydrationMessageElement.innerText = "Click the button for each glass (250ml) you drink."; // Reset message
    }

    // Add event listeners to buttons
    document.querySelector("button[onclick='addGlass()']").addEventListener("click", addGlass);
    document.querySelector("button[onclick='resetHydration()']").addEventListener("click", resetHydration);
});




//Nutrition fact finder (Per 100g of the food)
const nutritionData = {
    apple: { calories: 52, carbs: 14, protein: 0.3 },
    banana: { calories: 96, carbs: 27, protein: 1.3 },
    spinach: { calories: 23, carbs: 3.6, protein: 2.9 },
    orange: { calories: 47, carbs: 12, protein: 0.9, fat: 0.1 },
    chickenBreast: { calories: 165, carbs: 0, protein: 31, fat: 3.6 },
    salmon: { calories: 208, carbs: 0, protein: 20, fat: 13 },
    almonds: { calories: 579, carbs: 22, protein: 21, fat: 49 },
    eggs: { calories: 155, carbs: 1.1, protein: 13, fat: 11 },
    rice: { calories: 130, carbs: 28, protein: 2.7, fat: 0.3 },
    broccoli: { calories: 55, carbs: 11, protein: 3.7, fat: 0.6 },
    avocado: { calories: 160, carbs: 9, protein: 2, fat: 15 },
    sweetPotato: { calories: 86, carbs: 20, protein: 1.6, fat: 0.1 },
    peanutButter: { calories: 588, carbs: 20, protein: 25, fat: 50 },
    milk: { calories: 42, carbs: 5, protein: 3.4, fat: 1 },
    yogurt: { calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
    oats: { calories: 389, carbs: 66, protein: 17, fat: 7 },
    tofu: { calories: 76, carbs: 1.9, protein: 8, fat: 4.8 },
    beefSteak: { calories: 250, carbs: 0, protein: 26, fat: 17 },
    quinoa: { calories: 120, carbs: 21, protein: 4.1, fat: 1.9 },
    lentils: { calories: 116, carbs: 20, protein: 9, fat: 0.4 },
    blueberries: { calories: 57, carbs: 14, protein: 0.7, fat: 0.3 },
    strawberries: { calories: 32, carbs: 7.7, protein: 0.7, fat: 0.3 },
    cheese: { calories: 402, carbs: 1.3, protein: 25, fat: 33 },
    cucumber: { calories: 16, carbs: 3.6, protein: 0.7, fat: 0.1 },
    tomato: { calories: 18, carbs: 3.9, protein: 0.9, fat: 0.2 },
    oliveOil: { calories: 884, carbs: 0, protein: 0, fat: 100 },
    walnuts: { calories: 654, carbs: 14, protein: 15, fat: 65 },
    pizza: { calories: 266, carbs: 33, protein: 11, fat: 10 }
  };
  
  function findNutrition() {
    const food = document.getElementById('food-input').value.toLowerCase();
    const nutrition = nutritionData[food];
  
    if (nutrition) {
      document.getElementById('nutrition-result').innerText = 
        `Calories: ${nutrition.calories}, Carbs: ${nutrition.carbs}g, Protein: ${nutrition.protein}g`;
    } else {
      document.getElementById('nutrition-result').innerText = "Nutrition data not found!";
    }
  }
  
