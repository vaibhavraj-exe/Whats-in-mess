
let messDict =[
    [["Bread", "Butter", "Jam", "Chole Bhature", "Veg Upma", "Chutney", "Tea/Coffee/Milk"],
    ["Chapathi", "Chicken (Pepper / Kadai)", "Paneer Butter Masala", "Dal Dhadka", "Mint Pulao/Steamed Rice", "Rasam", "Poriyal", "Butter Milk", "Fryums", "Pickle"],
    ["Kara Sev / Pakoda", "Tea/Coffee"],
    ["Chapathi", "Aloo gobi curry", "Steamed Rice", "Hara Moong Dal Tadka", "Karakozhambu", "Kootu", "Rasam", "Fryums", "Veg salad", "Milk", "Seasonal Fruit", "Ice cream / Cone Ice cream", "Non-Veg Gravy"]],

    [["Butter", "Bread", "Jam", "Pongal", "Vada", "Chutney", "Sambhar", "Chapati", "White Peas Masala", "Tea/Coffee/Milk"], 
    ["Sweet", "Methi Chapati", "Veg Topiyaza Curry", "Tomato Pulao/Steamed Rice", "Radish Sambar", "Panchratna Dal", "Aviyal", "Cabbage Baigan Aloo Sabji", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Pav Bhaji/Sweet Bun", "Tea/Coffee"],
    ["Atta Paratha", "Channa Masala", "Vegetable Idly", "Special Chutney", "Steamed Rice", "Moong Dal Fry", "Aloo Jeera Dry", "Sambar", "Rasam", "Poriyal", "Fryums", "Veg Salad", "Milk", "Banana"]],

    [["Bread", "Butter", "Jam", "Chapati", "Dal Aloo Masala", "Podi", "Dhosai", "Sambar", "Chutney", "Tea/Coffee/Milk"],
    ["Sweet", "Poori", "Aloo Curry", "Bahara Pulao", "Idiyappam(Tomato/ Lemon)", "Curd Rice", "Pickle", "Fryums"], 
    ["Bonda / Keerai Vada", "Tea / Coffee"],
    ["Chilli Paratha", "Steamed Rice", "Dal Makani", "Sambar", "Rasam", "Poriyal", "Pickle", "Fryums", "Veg salad", "Milk", "Special Fruits", "Mutton Gravy"]],

    [["Bread", "Butter", "Jam", "Idly", "Sambar", "Kara Chutney", "Poha", "Mint Chutney", "Tea/Coffee Milk", "Masala Omelete"],
    ["Ceylon Paratha", "Meal Maker Curry", "Subji", "Veg Pulao/Steamed Rice", "Kadhamba Sambar", "Tomato Dal", "Garlic Rasam", "Poriyal", "Butter milk", "Pickle", "Fryums"],
    ["Veg Puff / Sweet Puff", "Tea / Coffee"],
    ["Chapathi", "Steamed Rice", "Dal Tadka", "Butter Chicken Masala", "Paneer Mutter Masala / Malai Paneer", "Rasam", "Pickle", "Fryums", "Veg Salad", "Milk", "Banana", "Non Veg Gravy"]],

    [["Bread", "Butter", "Jam", "Veg Semiya", "Kitchadi", "Chappathi", "Aloo Rajma", "Sambar", "Chutney", "Tea/Coffee/ Milk"],
    ["Mint Chapathi", "Soya beans curry", "Onion Pulao / Steamed Rice", "Dal Makhani", "Kadi pakoda", "Rasam", "Aloo gobi masala", "Yam Varuval", "Buttermilk", "Pickle", "Fryums"],
    ["Bajji", "Tea / Coffee"],
    ["Madras Paratha", "Mattar Paneer Masala", "Steamed Rice", "Dal tadka", "Sambar", "Dosa Chutney", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk" , "Banana", "Non-Veg Gravy"]],

    [["Bread", "Butter",  "Jam", "Poori", "Potato Masala", "Wheat Upma", "Chutney", "Tea/Coffee/Milk"],
    ["Sweet", "Chapathi", "Aloo Mattar Masala", "Maisoore Dal", "Veg Biyani", "Mix Raihta", "Variety Rice", "Thovaiyal", "Curd Rice", "Pickle",  "Fryums"],
    ["Cake / Fruit Cake", "Tea/Coffee"],
    ["Chapati", "Veg Manchurian", "Veg fried Rice (or) Veg Noodles", "Steamed Rice", "Dal Maharani", "Sambar", "Rasam", "Fryums", "Veg salad", "Milk", "Special Fruit", "Non-Veg Gravy"]],

    [["Bread", "Butter", "Jam", "Chappathi", "Veg Khorma", "Idiyappam (Tomato & Lemon)", "Chutney", "Tea/Coffee/Milk", "Boiled Egg"],
    ["Poori", "White peas Curry", "Aloo Bindli sabji", "Bahara Pulao / Steamed Rice", "Dal Lasooni", "Paruppu urundai kozhambu", "Kootu", "Rasam", "Buttermilk", "Pickle", "Fryums"],
    ["Samosa / Aloo Bonda", "Tea/Coffee"],
    ["Panjabi Paratha", "Aloo Capsicum Sabji", "Steamed Rice", "Rajma curry", "Masala Dal", "Idly", "Chutney", "Sambar", "Poriyal", "Rasam", "Pickle", "Fryums", "Veg salad", "Milk", "Seasonal Fruits", "Ice Cream / Cone Ice Cream", "Non-veg Gravy"]],

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

const returnWeekDay = (dayNumber) => {
    switch (dayNumber) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            break;
    }
}

const updateDay = (day) => {
    let weekday = document.getElementById("day")
    weekday.innerHTML=""
    weekday.innerHTML= returnWeekDay(day)
}

if (hrs < 9) {
    current = "breakfast"
    setBreakfastRoutine()
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
}else if (hrs < 24){
    current = "dinner"
    setDinnerRoutine()
}
// }else if (hrs < 24){
//     let header = document.createElement("H3")
//     let headerText = document.createTextNode("404 GOOD NIGHT 🌙")
//     header.appendChild(headerText)
//     document.getElementById("header").appendChild(header)
// }


document.getElementById("previous").onclick = () => {
    
    switch (current) {
        case "breakfast":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""

            day-=1;
            updateDay(day)
            setDinnerRoutine();
            current = "dinner"
            break;
        case "lunch":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setBreakfastRoutine()
            current = "breakfast"
            break
        case "snacks" :
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setLunchRoutine()
            current = "lunch"
            console.log("snacks")
            break
        case "dinner":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setSnacksRoutine()
            current = "snacks"
        default:
            break;
    }
}

document.getElementById("next").onclick = () => {
    
    switch (current) {
        case "breakfast":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setLunchRoutine()
            current = "lunch"
            break;
        case "lunch":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setSnacksRoutine()
            current = "snacks"
            break
        case "snacks" :
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""
            setDinnerRoutine()
            current = "dinner"
            break
        case "dinner":
            document.getElementById("foodlist").innerHTML = ""
            document.getElementById("header").innerHTML = ""

            day+=1;
            updateDay(day)
            setBreakfastRoutine()
            current= "breakfast";
            break
        default:
            break;
    }
}