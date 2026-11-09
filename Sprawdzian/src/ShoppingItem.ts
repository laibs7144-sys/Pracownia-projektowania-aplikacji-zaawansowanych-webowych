class ShoppingItem {
    id: number;
    name: string;
    quantity?:number;
    isBought?: boolean;

    constructor(id:number, name:string, quantity?:number, isBought?:boolean){

        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
    toogle: void(){
        
    }
    render: HTMLElement(){
        
        const item = document.createElement
        return item
    }
}