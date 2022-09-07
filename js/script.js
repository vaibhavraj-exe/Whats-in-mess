
let messDict =[0,
    [["Butter", "Bread", "Jam", "Pongal", "Vada", "Chutney", "Sambhar", "Chapati", "White Peas Masala", "Tea/Coffee/Milk"], 
    ["Sweet", "Methi Chapati", "Veg Topiyaza Curry", "Tomato Pulao/Steamed Rice", "Radish Sambar", "Panchratna Dal", "Aviyal", "Cabbage Baigan Aloo Sabji", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Fruit Cake", "Tea/Coffee"],
    ["Atta Paratha", "Channa Masala", "Vegetable Idly", "Special Chutney", "Steamed Rice", "Moong Dal Fry", "Aloo Jeera Dry", "Sambar", "Rasam", "Poriyal", "Fryums", "Veg Salad", "Milk", "Banana"]],

    [["Bread", "Butter", "Jam", "Chapati", "Aloo Rajma Masala", "Podi", "Dhosai", "Sambar", "Chutney", "Tea/Coffee/Milk"],
    ["Ceylon Paratha", "Meal Maker Curry", "Jeera Pulao / Steamed Rice", "Karakozhabu", "Mix Vegetable Sabji", "Dal Fry", "Cabbage Kootu", "Fryums"], 
    ["Bonda / Keerai Vada", "Tea / Coffee"], 
    ["Chapati", "Green Peas Masala", "Steamed Rice", "Dal Makani", "Sambar", "Rasam", "Poriyal", "Pickle", "Fryums", "Veg Salad", "Milk", "Special Fruits"]],

    [["Bread", "Butter", "Jam", "Idli", "Sambar", "Kara Chutney", "Tea/Coffee/Milk", "Masala Omelete"], 
    ["Sweet", "Poori", "Chole Dal Aloo Curry", "Bhindi Masal", "Veg Pulao / Steamed Ric", "Kadhamba Samar", "Tomato Dal", "Garlic Rasam", "Poriyal", "Butter Milk", "Pickle", "Fryums"],
    ["Veg Puff / Sweet Puff", "Tea / Coffee"],
    ["Chapathi", "Steamed Rice", "Dal Tadka", "Butter Chicken Masala", "Malai Paneer", "Rasam", "Pickle", "Fryums", "Veg Salad", "Milk (100 ml)", "Banana-1 No."]],

    [["Bread Butter Jam", "Veg Kitchadi", "Poha", "Mint Chutney", "Sambar", "Chutney", "Tea/Coffee/Milk"],
    ["Mint Chapathi", "Soya beans curry", "Onion Pulao / Steamed Rice", "Dal Makhani", "Kadi pakoda", "Rasam", "Aloo gobi masala", "Yam Varuval", "Buttermilk", "Pickle", "Fryums"],
    ["Boiled Peanuts/Chenna",  "Tea/Coffee"],
    ["Madras Paratha", "Mattar Paneer Masala", "Steamed Rice", "Dal tadka", "Sambar", "Dosa Chutney", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk" , "Banana"]],

    [["Bread", "Butter",  "Jam", "Poori", "Potato Masala",  "Tea/Coffee/Milk"],
    ["Sweet", "Chapathi", "Aloo Mattar", "Maisoore Dal", "Veg Biyani", "Mix Raiht____aitha", "Variety Rice", "Thovaiyal", "Curd Rice", "Pickle",  "Fryums"],
    ["Bhajji / Aloo Bonds", "Tea/Coffee"],
    ["Chapati", "Veg Manchurian", "Veg fried Rice", "Steamed Rice", "Dal Maharani", "Sambar", "Rasam", "Fryums", "Veg salad", "Milk", "Banana"]],

    [["Bread", "Butter", "Jam", "Chappathi", "Aloo chenna dal masala", "Diyappam (Tomato & Lemon)", "Chutney", "Tea/Coffee/Milk", "Boiled Egg"],
    ["Mint", "Poori", "White peas Curry", "Aloo Tindli sabji", "Bahara Pulao / Steamed Rice", "Dal Lasooni", "Paruppu urundai kozhambu", "Kootu", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Pav Bhaji/Sweet Bun", "Tea/Coffee"],
    ["Panjabi Paratha", "Aloo Capsicum Sabji", "Steamed Rice", "Rajma curry", "Masala Dal", "Idly", "Chutney", "Sambar", "Poriyal", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk","Special Fruits"]],

    [["Bread", "Butter", "Jam", "Chole Bhature", "Tea/Coffee/Milk"],
    ["Chapathi", "Chicken (Pepper / Kadai)", "Paneer Butter Masala", "Dal Dhadka", "Mint Pulao/Steamed Rice", "Rasam", "Poriyal", "Butter", "Milk", "Fryums", "Pickle"],
    ["Kara Sev / Pakoda", "Tea/Coffee"],
    ["Chapathi", "Aloo gobi curry", "Steamed Rice", "Hara Moong Dal Tadka", "Karakozhambu", "Kootu", "Rasam", "Fryums", "Veg salad", "Milk", "Seasonal Fruit", "Ice cream"]]
]
    
let now = new Date();
let day = now.getDay()
let hrs = now.getHours()
let min = now.getMinutes()



console.log(hrs)

if (hrs < 9) {
    messDict[day][0].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}else if (hrs < 13){
    messDict[day][1].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}else if (hrs == 13 && min < 30){
    messDict[day][1].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}else if (hrs < 17){
    messDict[day][2].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}else if (hrs == 17 && min < 30){
    messDict[day][2].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}else if (hrs < 21){
    messDict[day][3].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}

