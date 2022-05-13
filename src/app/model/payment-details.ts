export class PaymentDetails {
    id?:string;
    cardNumber?:string;
    cvvNumber?:string;
    cardHolder?:string;
    moneySum?:number;

    constructor(id?:string, cardNumber?:string, cvvNumber?:string, cardHolder?:string, moneySum?:number) {
        this.id = id;
        this.cardHolder = cardHolder;
        this.cardNumber = cardNumber;
        this.moneySum = moneySum;
    }

    setMoneySum(price: number) {
        this.moneySum = price;
    }
}
