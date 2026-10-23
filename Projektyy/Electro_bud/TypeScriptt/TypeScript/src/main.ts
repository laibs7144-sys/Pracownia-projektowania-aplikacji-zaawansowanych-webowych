const addProductButton = document.querySelector<HTMLButtonElement>("#addButton");
const productNameInput = document.querySelector<HTMLInputElement>("#name");
const productCategoryInput = document.querySelector<HTMLInputElement>("#category");
const productEanInput = document.querySelector<HTMLInputElement>("#ean");
const productLocationSelect = document.querySelector<HTMLSelectElement>("#location");
const productList = document.querySelector<HTMLDivElement>("#addedProducts");

type Product = {
    name: string,
    category: string,
    ean: string,
    location: string,
}

const products: Product[] = [];

if (
    addProductButton &&
    productNameInput &&
    productCategoryInput &&
    productEanInput &&
    productLocationSelect &&
    productList
) {
    addProductButton.addEventListener("click", () => {
        const product: Product = {
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
