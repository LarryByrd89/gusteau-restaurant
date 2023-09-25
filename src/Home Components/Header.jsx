

function Header(){
return(
    <>
        <header>
        <div className="logo-nav">
            <div className="information">
            <div className="store-info">
                <ul>
                    <li>1800 S Main St, Roswell NY </li>
                    <li>575-627-0144</li>
                    <li>Opening Hours From 1:00pm - 10:00pm</li>
                </ul>
            </div>
            </div>
            <div className="logo">
                <img src="images/Logo.png" alt="Le Bon Manges"/>
            </div>
            <div className="nav">
                <nav>
                <label>
                    <input type="checkbox"/>
                    <span className="menu"> <span className="hamburger"></span> </span>

                    </label>
                </nav>
            </div>
        </div>
        </header>
    </>
)
}

export default Header;