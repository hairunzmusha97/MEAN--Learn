import { LatLng } from "leaflet";
import { CartItem } from "./CartItems";

export class Order{
    id!:Number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    addressLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!:string;
}