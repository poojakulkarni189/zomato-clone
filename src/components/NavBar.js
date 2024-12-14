import NavBarLeft from "./NavBarLeft"
import NavBarRight from "./NavBarRight"
import "./NavBar.css"

function NavBar(){
    return (
        <div className="zomato">
            <div className="NavBar">
            <NavBarLeft />
            <NavBarRight />
        </div>
        <img className="name-zomato" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato name"></img>
        <h1 className="zomato-line">Discover the best food & drinks in
        <span className="place"> Hyderabad</span> </h1>
        <div className="SearchContainer">
            <div className="SearchLocation">
                <div className="Location">
                    <div className="location-total">
                    <i class='icon-location fas fa-map-marker-alt'></i>
                    <input placeholder="Hyderabad, India" type="text" size="11" className="input-field"></input>
                    <i class='icon-dropdown fas fa-caret-down' onClick="my function()"></i>
                    </div>
                </div>
                <div className="Search-dish">
                    <div className="Search-icon">
                        <i class="icon-search fas fa-search" aria-hidden="true"></i>
                    </div>
                    <input placeholder="Search for restaurant, cuisine or a dish" size="37" className="input-search-food"></input>
                </div>
            </div>
        </div>
        <div className="collections-and-places">
            <div className="outline">
                <div className="too-anchor">
                         <a href="https://www.zomato.com/hyderabad/order-food-online?delivery_subzone=9212">
                         <div className="too-image">
                         <img alt="order online" src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"></img>
                         </div>
                         <div className="too-heading">
                         <h1>Order Online</h1>
                         <p>Stay home and order to your doorstep</p>
                         </div>
                         </a>
                </div>
                <div className="dining-anchor">
                    <a href="https://www.zomato.com/hyderabad/dine-out">
                    <div className="dining-image">
                    <img alt="dinning" src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"></img>
                    </div>
                    <div className="dining-heading">
                    <h1>Dining</h1>
                    <p>View the city's favourite dining venues</p>
                    </div>
                    </a>
                </div>
                <div className="Liveevents-anchor">
                    <a href="https://www.zomato.com/live/city/hyderabad/events">
                    <div className="Liveevents-image">
                    <img alt="Live-events"src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"></img>
                    </div>
                    <div className="Liveevents-heading">
                    <h1>Live Events</h1>
                    <p>Discover India’s best events & concerts</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="collection-main-outline">
            <div className="collections">
                <p>Collections</p>
                <p1>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p1>
                <a href="https://www.zomato.com/hyderabad/collections">
                <p2>All Collections In Hyderabad</p2>
                <i class='fas fa-caret-right'></i>
                </a>
            </div>
            <div className="collection-img-outline">
                <div className="tts">
                    <a href="https://www.zomato.com/hyderabad/trending-this-week">
                    <div className="tts-img">
                        <img alt="Top Trending spots" src="https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1721907131.png?output-format=webp"></img>
                    </div> 
                    <div className="tts-header">
                        <p>Top Trending Spots</p>
                        <p>32 Places <i class='fas fa-caret-right'></i>
                        </p>
                    </div>
                    </a>    
                </div>
                <div className="nop" >
                    <a href="https://www.zomato.com/hyderabad/newly-opened">
                    <div className="nop-image">
                        <img alt="Newly Opened place"src="https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171286.png?output-format=webp"></img>
                    </div>
                    <div className="nop-header">
                    <p>Newly Opened Places</p>
                        <p>13 Places <i class='fas fa-caret-right'></i>
                        </p>
                    </div>
                    </a>
                </div>
                <div className="RF">
                    <a href="https://www.zomato.com/hyderabad/taste-of-andhra">
                    <div className="RF-image">
                        <img alt="Reginoal Flavors"src="https://b.zmtcdn.com/data/collections/c0659397d7fe2cb45d024d9375c2c5ea_1725362174.png?output-format=webp"></img>
                    </div>
                    <div className="RF-header">
                    <p>Reginoal Flavors</p>
                        <p>32 Places <i class='fas fa-caret-right'></i>
                        </p>
                    </div>
                    </a>
                </div>
                <div className="BBIT">
                    <a href="https://www.zomato.com/hyderabad/best-buffet">
                    <div className="BBIT-image">
                        <img alt="Best Buffets In Town" src="https://b.zmtcdn.com/data/collections/4e41758598775d808a8e70d6654df929_1725604011.png?output-format=webp"></img>
                    </div>
                    <div className="BBIT-header">
                    <p>Best Buffets In Town</p>
                        <p>11 Places <i class='fas fa-caret-right'></i>
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar