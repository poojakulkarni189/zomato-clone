import Location from "./Location";
import { cities } from "../data/cities";
import "./LocationSection.css"

export const LocationSection = () =>{

    return (
        <diV className="city-map">
            {cities.map((city) => (
                <Location /> 
            ))}
        </diV>
    )
}