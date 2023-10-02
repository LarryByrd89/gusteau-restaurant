function Membership(){
    return (

<>

<section className="member-header">
  <div className="container">
  <h1>Participate In Our Patron Perk </h1>
  <h2>See What We Have To Offer </h2>
  <p>Joing Our member Perk Allows You Enhance Dining Experience With Le Bon Mange </p>
  </div>

<div className="memberpage container">
<div className="wrapper">
  <div className="tabs">
    <div className="tab">
      <input type="radio" name="css-tabs" id="tab-1" checked className="tab-switch"/>
      <label for="tab-1" className="tab-label">Register</label>
      <div className="tab-content">
          <form>
            <input type="email" id="email-register" placeholder="Register Email" required/>
            <br/>
            <input type="password" id="password-register" placeholder="Register Password" required />
            <br/>
            <input type="name" id="name-register" placeholder="Enter Name" required/>
            <br/>
            <input type="submit" id="register-submit" placeholder="Register"/>
          </form>
         </div>
    </div>
    <div className="tab">
      <input type="radio" name="css-tabs" id="tab-2" className="tab-switch"/>
      <label for="tab-2" className="tab-label">Log In</label>
      <div className="tab-content">
      <form>
            <input type="email" id="email-login" placeholder="Enter Email" required/>
            <br/>
            <input type="password" id="password-login" placeholder="Enter Password" required />
            <br/>
            <input type="submit" id="login"/>
          </form>  
      </div>
    </div>
  </div>
</div>
<div className="member-type     point-opacity">
  <div id="wine-perk" className="wine-card">
    <p>Wine Perk</p>
    </div>
    <div id="desert-club" className="desert-card">
    <p>Desert Perk</p>
    </div>
</div>
</div>
</section>
</>
  )
}


export default Membership;