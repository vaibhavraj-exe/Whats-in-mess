const messDict = [
    // Sunday
    [["Bread", "Butter", "Jam", "Chole Bhature", "Veg Upma", "Chutney", "Tea/Coffee/Milk"],
    ["Chapathi", "Chicken (Pepper / Kadai)", "Paneer Butter Masala", "Dal Dhadka", "Mint Pulao/Steamed Rice", "Rasam", "Poriyal", "Butter Milk", "Fryums", "Pickle"],
    ["Kara Sev / Pakoda", "Tea/Coffee"],
    ["Aloo Paratha", "Aloo gobi curry", "Steamed Rice", "Moong Dal Tadka", "Karakozhambu", "Kootu", "Rasam", "Fryums", "Veg salad", "Milk", "Seasonal Fruit", "Ice cream / Cone Ice cream", "Non-Veg Gravy"]],
    // Monday
    [["Butter", "Bread", "Jam", "Pongal", "Vada", "Chutney", "Sambhar", "Chapati", "White Peas Masala", "Tea/Coffee/Milk"], 
    ["Methi Chapati", "Veg Topiyaza Curry", "Tomato Pulao/Steamed Rice", "Sambar", "Panchratna Dal", "Aviyal", "Cabbage Baigan Aloo Sabji", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Pav Bhaji/Sweet Bun", "Tea/Coffee"],
    ["Atta Paratha", "Channa Masala", "Vegetable Idly", "Special Chutney", "Steamed Rice", "Moong Dal Fry", "Aloo Jeera Dry", "Sambar", "Rasam", "Fryums", "Veg Salad", "Milk", "Banana", "Fish Curry"]],
    // Tuesday
    [["Bread", "Butter", "Jam", "Chapati", "Rajma Masala", "Podi Dhosai", "Sambar", "Chutney", "Tea/Coffee/Milk"],
    ["Sweet", "Poori", "Aloo Curry", "Bahara Pulao", "Idiyappam(Tomato/ Lemon)", "Steamed Rice", "Dal Fry", "Rasam", "Butter Milk", "Curd Rice", "Pickle", "Fryums"], 
    ["Bonda / Keerai Vada", "Tea / Coffee"],
    ["Ceylon Paratha", "Green Peas Masala", "Steamed Rice", "Dal Makani", "Sambar", "Rasam", "Poriyal", "Pickle", "Fryums", "Veg salad", "Milk", "Special Fruits", "Mutton Gravy"]],
    // Wednesday
    [["Bread", "Butter", "Jam", "Idly", "Sambar", "Chutney", "Poha", "Mint Chutney", "Tea/Coffee Milk", "Masala Omelete"],
    ["Chappathi", "Meal Maker Curry", "Subji", "Veg Pulao/Steamed Rice", "Kadhamba Sambar", "Tomato Dal", "Garlic Rasam", "Poriyal", "Butter milk", "Pickle", "Fryums"],
    ["Veg Puff / Sweet Puff", "Tea / Coffee"],
    ["Chapathi", "Steamed Rice", "Dal Tadka", "Butter Chicken Masala", "Paneer Mutter Masala / Malai Paneer", "Rasam", "Pickle", "Fryums", "Veg Salad", "Milk", "Banana", "Non Veg Gravy"]],
    // Thursday
    [["Bread", "Butter", "Jam", "Veg Semiya Kitchadi", "Chappathi", "Aloo Rajma", "Chutney", "Tea/Coffee/ Milk"],
    ["Mint Chapathi", "Soya beans curry", "Onion Pulao / Steamed Rice", "Dal Makhani", "Kadi pakoda", "Rasam", "Aloo gobi masala", "Yam Varuval", "Buttermilk", "Pickle", "Fryums"],
    ["Bajji", "Tea / Coffee"],
    ["Madras Paratha", "Mattar Paneer Masala", "Steamed Rice", "Dal tadka", "Sambar", "Dosa Chutney", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk" , "Banana", "Non-Veg Gravy"]],
    // Friday
    [["Bread", "Butter",  "Jam", "Poori", "Potato Masala", "Wheat Upma", "Chutney", "Tea/Coffee/Milk"],
    ["Sweet", "Chapathi", "Aloo Mattar Masala", "Maisoore Dal", "Veg Biryani", "Mix Raihta", "Variety Rice", "Rasam", "Curd Rice", "Butter Milk", "Pickle",  "Fryums"],
    ["Cake / Fruit Cake", "Tea/Coffee"],
    ["Chapati", "Veg Manchurian", "Veg fried Rice (or) Veg Noodles", "Steamed Rice", "Dal Maharani", "Sambar", "Rasam", "Fryums", "Veg salad", "Milk", "Special Fruit", "Non-Veg Gravy"]],
    // Saturday
    [["Bread", "Butter", "Jam", "Chappathi", "Veg Khorma", "Idiyappam (Tomato & Lemon)", "Chutney", "Tea/Coffee/Milk", "Boiled Egg"],
    ["Poori", "White peas Curry", "Aloo Bindli sabji", "Bahara Pulao / Steamed Rice", "Tomato Dal", "Paruppu Urundai Kozhambu", "Kootu", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Samosa / Aloo Bonda", "Tea/Coffee"],
    ["Panjabi Paratha", "Aloo Capsicum Sabji", "Steamed Rice", "Rajma curry", "Masala Dal", "Idly", "Chutney", "Sambar", "Poriyal", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk", "Seasonal Fruits", "Fish Gravy"]],    
]

const mealInfo = {
    0: { time: 9, meal: "Breakfast", text: "Working day 7:00 - 9:00, Holiday 7:30 - 9:00" },
    1: { time: 13.5, meal: "Lunch", text: "Working day 11:30 - 1:30, Holiday 12:00 - 1:30" },
    2: { time: 17.5, meal: "Snacks", text: "4:30 - 5:30" },
    3: { time: 21, meal: "Dinner", text: "7:30 - 9:00" },
}

let now = new Date();
let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();

// 0: breakfast, 1: lunch, 2: snacks, 3: dinner
let meal = 0;

const returnWeekDay = (day) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}

const getCurrentMeal = () => {
    let meal = 0;
    hour = hour + minute / 60;
    for (let i = 0; i < 4; i++) {
        if (hour < mealInfo[i].time) {
            meal = i;
            break;
        }
    }
    hour > 21 ? day = (day + 1) % 7 : day;
    return meal;
}

const getMeal = (day, meal) => {
    let header = document.createElement("H3")
    document.getElementById("header").innerHTML = `${mealInfo[meal].meal} (${mealInfo[meal].text})`
    document.getElementById("day").innerHTML = returnWeekDay(day);
    document.getElementById("foodlist").innerHTML = ""

    messDict[day][meal]?.forEach(item => {
        let node = document.createElement("LI");
        let textnode = document.createTextNode("🔷 "+ item)
        node.appendChild(textnode);
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    });
}

document.getElementById("previous").addEventListener("click", () => {
    if (meal == 0) {
        meal = 3;
        day--;
    } else meal--;
    getMeal(day = day == -1 ? 6 : day, meal);
})

document.getElementById("next").addEventListener("click", () => {
    if (meal == 3) {
        meal = 0;
        day++;
    } else meal++;

    getMeal(day = day == 7 ? 0 : day, meal);
})

document.getElementById("current").addEventListener("click", () => {
    day = new Date().getDay();
    meal = getCurrentMeal(new Date().getHours(), new Date().getMinutes());
    getMeal(day, meal);
})

document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowRight" || event.key == "ArrowDown") {
        document.getElementById("next").click();
    }
    else if (event.key == "ArrowLeft" || event.key == "ArrowUp") {
        document.getElementById("previous").click();
    }
    else if (event.key == "Enter" || event.key == "Backspace") {
        document.getElementById("current").click();
    }
});

window.onload = (e) => {
    e.preventDefault();
    meal = getCurrentMeal();
    getMeal(day, meal);
}