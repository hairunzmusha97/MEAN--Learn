import { CartItem } from "./CartItems";

export class Order{
    id!:Number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    paymentId!:string;
    createdAt!:string;
    status!:string;
}