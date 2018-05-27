export class Product{
    constructor( 
        public image: {filename: string, originalname: string},
        public description: string,
        public price: string, 
        public newPrice: string,
        public quantity: string){}
}