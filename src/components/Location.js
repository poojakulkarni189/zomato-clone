import "./Location.css";

const Location = ({city}) =>{
    return(
        <div className="city-main"> 
            <div className="city">
                <p>{city.city}</p>
                <p>{city.numOfPlaces}</p>
            </div>
            <div className="city-icon">
                <i class="fa fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Location;