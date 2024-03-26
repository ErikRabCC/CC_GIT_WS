document.querySelector("#btnCounter").addEventListener("click", () => {
    const numberDiv = document.querySelector("#number")

    numberDiv.innerHTML = parseInt(numberDiv.innerHTML) + 1
})