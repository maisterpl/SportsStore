export class Product {

    // this constructor is different than in book,
    // in book the arguments has undefinde (for example: id?: number)
    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description: string,
        public price: number
    ){}
}