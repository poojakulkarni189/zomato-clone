import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import "./NavBar.css";

function NavBar(){
    return (
        <div className="nav-bg">
            <div className="navbar">
                <NavBarLeft />
                <NavBarRight />
            </div>
            <img className="zomato-text" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"/>
            <h1 className="zomato-lower-text">Discover the best food & drinks in 
            <span class="next-line"> Delhi NCR</span>
            </h1>
        </div>
    )
}

export default NavBar;