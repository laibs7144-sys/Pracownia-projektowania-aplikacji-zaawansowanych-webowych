"use strict";
const addProductButton = document.querySelector("#addButton");
const productNameInput = document.querySelector("#name");
const productCategoryInput = document.querySelector("#category");
const productEanInput = document.querySelector("#ean");
const productLocationSelect = document.querySelector("#location");
const productList = document.querySelector("#addedProducts");
const products = [];

if (addProductButton &&
    productNameInput &&
    productCategoryInput &&
    productEanInput &&
    productLocationSelect &&
    productList) {
    addProductButton.addEventListener("click", () => {
        const product = {
            name: productNameInput.value,
            category: productCategoryInput.value,
            ean: productEanInput.value,
            location: productLocationSelect.value,
        };
        products.push(product);
        productNameInput.value = "";
        productCategoryInput.value = "";
        productEanInput.value = "";
        productLocationSelect.value = "";
        renderProductList();
    });
}

function renderProductList() {
    if (!productList) {
        return;
    }
    productList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("container");
        const nameHeading = document.createElement("h3");
        const eanText = document.createElement("p");
        const categoryText = document.createElement("p");
        const locationText = document.createElement("p");
        nameHeading.textContent = "Nazwa produktu: " + product.name;
        eanText.textContent = "Kod EAN: " + product.ean;
        categoryText.textContent = "Kategoria: " + product.category;
        locationText.textContent = "Lokalizacja: " + product.location;
        productCard.appendChild(nameHeading);
        productCard.appendChild(eanText);
        productCard.appendChild(categoryText);
        productCard.appendChild(locationText);
        productList.appendChild(productCard);
    });
}
