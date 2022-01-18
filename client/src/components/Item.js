class Item{

    // variável de class
    static ID = Math.random();


    constructor(text){

        this.id = Item.ID + Math.random();
        this.text = text;
        this.done = false;

    }

}

export default Item