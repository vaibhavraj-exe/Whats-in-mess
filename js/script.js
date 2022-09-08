
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

let current = "breakfast"

const setBreakfastRoutine = () => {
    let header = document.createElement("H3")
    let headerText = document.createTextNode("BREAKFAST (Working day 7:00 - 9:00, Holiday 7:30 - 9:00)")
    header.appendChild(headerText)
    document.getElementById("header").appendChild(header)
    
    messDict[day][0].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode("🔷 "+ e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}

const setLunchRoutine = () => {
    let header = document.createElement("H3")
    let headerText = document.createTextNode("LUNCH (Working day 11:30 - 1:30, Holiday 12:00 - 1:30)")
    header.appendChild(headerText)
    document.getElementById("header").appendChild(header)
    
    messDict[day][1].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode("🔷 "+ e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}

const setSnacksRoutine = () => {
    let header = document.createElement("H3")
    let headerText = document.createTextNode("Snacks (4:30 - 5:30)")
    header.appendChild(headerText)
    document.getElementById("header").appendChild(header)

    messDict[day][2].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode("🔷 "+ e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}

const setDinnerRoutine = () =>{
    let header = document.createElement("H3")
    let headerText = document.createTextNode("DINNER 7:30 - 9:00")
    header.appendChild(headerText)
    document.getElementById("header").appendChild(header)
    
    messDict[day][3].forEach(e => {
        let node = document.createElement("li")
        let textnode = document.createTextNode("🔷 "+ e)
        node.appendChild(textnode)
        node.setAttribute("class", "list-group-item");
        document.getElementById("foodlist").appendChild(node);
    })
}

if (hrs < 9) {
    current = "breakfast"
    setBreakfastRoutine()
    document.getElementById("previous").classList.remove("btn-primary");
    document.getElementById("previous").classList.add("btn-secondary");
}else if (hrs < 13){
    current = "lunch"
    setLunchRoutine()
}else if (hrs == 13 && min < 30){
    current = "lunch"
    setLunchRoutine()
}else if (hrs < 17){
    current = "snacks"
    setSnacksRoutine()
}else if (hrs == 17 && min < 30){
    current = "snacks"
    setSnacksRoutine()
}else if (hrs < 21){
    current = "dinner"
    setDinnerRoutine()
    document.getElementById("next").classList.remove("btn-primary");
    document.getElementById("next").classList.add("btn-secondary");
}else if (hrs < 24){
    let header = document.createElement("H3")
    let headerText = document.createTextNode("404 GOOD NIGHT 🌙")
    header.appendChild(headerText)
    document.getElementById("header").appendChild(header)
}


document.getElementById("previous").onclick = () => {
    
    switch (current) {
        case "breakfast":
            break;
        case "lunch":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            document.getElementById("previous").classList.remove("btn-primary");
            document.getElementById("previous").classList.add("btn-secondary");
            setBreakfastRoutine()
            current = "breakfast"
            break
        case "dinner":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            document.getElementById("next").classList.remove("btn-secondary");
            document.getElementById("next").classList.add("btn-primary");
            setLunchRoutine()
            current = "lunch"
        default:
            break;
    }
}

document.getElementById("next").onclick = () => {
    
    switch (current) {
        case "breakfast":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            document.getElementById("previous").classList.remove("btn-secondary");
            document.getElementById("previous").classList.add("btn-primary");
            setLunchRoutine()
            current = "lunch"
            break;
        case "lunch":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            document.getElementById("next").classList.remove("btn-primary");
            document.getElementById("next").classList.add("btn-secondary");
            setDinnerRoutine()
            current = "dinner"
            break
        case "dinner":
            break
        default:
            break;
    }
}