

function Header(){
return(
    <>
        <header>
        <div className="logo-nav">
            <div className="information">

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