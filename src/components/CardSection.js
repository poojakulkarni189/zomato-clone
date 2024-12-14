import { Card } from "./Card";
import { orderTypes } from "../data/orderType";
import "./CardSection.css";

export const CardSection = () =>{
    return (
        <div className="outline">
            {orderTypes.map((type) => (
                <Card orderTypes={type}/> 
            ))}
        </div>
    )
}