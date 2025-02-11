async function fetchData() {
    let data = await fetch('Food.json');
    let arr = await data.json();  
    console.log(arr)
    let mainhome = document.getElementById("target")
    for(let i in arr){
        let card = document.createElement("div")
        card.style.display="flex"
        card.style.flexDirection="column"
        card.style.justifyContent="center"
        card.style.alignItems="start"
        card.style.alignItems="center"; 
        card.innerHTML = `
        <div id="mainbox">
            <div id="subbox">
                <img src="${arr[i].food_img}" alt="" id="foodimg">
                <div id="subbox1">
                    <p id="name">${arr[i].food_name}</p>
                    <p id="name">${arr[i].food_restorent}</p>
                    <p id="name">${arr[i].food_rating}⭐</p>
                    <a href="item.html?id=${arr[i].food_id}" id="link">
                        <button id="btn">MORE</button>
                    </a>
                </div>
            </div>
        </div>`
        mainhome.appendChild(card)
    }
}
fetchData();


