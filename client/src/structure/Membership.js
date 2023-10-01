function Membership(){
    return (

      <>
        <section className="login-member container">

<div class="wrapper">
  <div class="tabs">
    <div class="tab">
      <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
      <label for="tab-1" class="tab-label">Login in</label>
      <div class="tab-content">
          <form>
            <input type="email" id="email-register" placeholder="Enter Email" required/>
            <br/>
            <input type="password" id="password-register" placeholder="Enter Password" required />
            <br/>
            <input type="name" id="name-register" placeholder="Enter Name" required/>
            <br/>
            <input type="submit" id="register-submit" placeholder="Register"/>
          </form>
         </div>
    </div>
    <div class="tab">
      <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
      <label for="tab-2" class="tab-label">Tab Two</label>
      <div class="tab-content">
      <form>
            <input type="email" id="email-login" placeholder="Enter Email" required/>
            <input type="password" id="password-register" placeholder="Enter Password" required />
            <input type="submit" id="register-submit"/>
          </form>  
      </div>
    </div>
  </div>

</div>
      </section>
        </>
    )
}


export default Membership;