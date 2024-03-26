const myItems = [
    { text: "Hello I am just a simple text..." },
    { text: "I like CSS a lot" },
    { text: "Anyad..." },
]

const itemsContainer = document.querySelector("#items-container")

function createNewItem(itemData, index) {
    return `<div class="single-item ${index % 2 == 0 ? "bg-light" : "bg-dark"}"><span class="single-item-text">${itemData.text}</span><button class="btn">Click me</button></div>`
}

function generateItems() {
    let newHTMLString = ""

    for (let I = 0; I < myItems.length; I++) {
        newHTMLString += createNewItem(myItems[I], I)
    }

    itemsContainer.innerHTML = newHTMLString
}
generateItems()

document.querySelector("#item-registration-form").addEventListener("submit", (e) => {
    e.preventDefault()

    myItems.push({ text: e.target.text.value })
    generateItems()
})
