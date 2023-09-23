function Header(){
return(
    <>
        <header>
        <div className="logo-nav">
            <div className="information">

            </div>
            <div className="logo">
                <img src="/public/images/Le Bon Mange.svg " alt="Le Bon Manges"/>
            </div>
            <div className="nav">
                <nav>
                <label>
                    <input type="checkbox"/>
                    <span className="menu"> <span className="hamburger"></span> </span>
                    <ul>
                      <li> <a href="#">Home</a> </li>
                      <li> <a href="#">About</a> </li>
                      <li> <a href="#">Contact</a> </li>
                    </ul>
                    </label>
                </nav>
            </div>
        </div>
        </header>
    </>
)
}

export default Header;