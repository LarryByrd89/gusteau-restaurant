import React from 'react';

function Footer() {
  return (
<footer>
<div className='container'>
<h4>Sign Up For Our Quarterly Newsletter For Updates </h4>
    <div className="newsletter">
        <div className='form-div'>
        <form>
            <input id='email' type='email' placeholder='Enter Email' required/>
            <br/>
            <input id="submit" type='submit' value="Sign Up"/>
        </form>
            </div>
</div>
</div>
</footer>
  );
}

export default Footer;
