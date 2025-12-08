
let search=document.getElementById("searchInput");
let item=document.querySelectorAll(".location");
let propertyCard=document.querySelectorAll(".property-card");

search.addEventListener("input", function () {
    let value = search.value.toLowerCase();

    for (let i = 0; i < item.length; i++) {
        if (!item[i].innerText.toLowerCase().includes(value)) {
            propertyCard[i].style.display = "none";
        } else {
            propertyCard[i].style.display = "";
        }
    }
});