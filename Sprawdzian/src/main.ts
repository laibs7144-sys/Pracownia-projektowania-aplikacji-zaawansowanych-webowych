import ShoppingItem from "./ShoppingItem.js";

const addButton: HTMLButtonElement|null = document.querySelector("#addButton");
const quantityInput: HTMLInputElement|null = document.querySelector("#quantityInput") ;
const nameInput: HTMLInputElement|null = document.querySelector("#nameInput") ;
const listContainer: HTMLDivElement = document.querySelector("#listContainer")!;

let arrayOfItems: ShoppingItem[] = [];

if (addButton && quantityInput && nameInput && listContainer){
    
    addButton?.addEventListener('click',(e) =>{
        
        nameInput.value='';
        quantityInput.value='';
        buildList();
    })
}

function buildList(){
    listContainer.innerHTML = "";
    arrayOfItems.forEach(element => {
        listContainer.innerHTML += element.render();
    });
}