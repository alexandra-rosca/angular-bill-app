export class Bill {
    id?:string;
    price?:number;
    emissionDate?:Date;
    dueDate?:Date;

    constructor(id?:string, price?: number, emissionDate?: Date, dueDate?: Date) {
        this.id=id;
        this.price=price;
        this.emissionDate=emissionDate;
        this.dueDate=dueDate;
    }

}
