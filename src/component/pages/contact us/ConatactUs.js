import React from 'react'
import './Conatactus.css'
function ConatactUs() {
  return (
    <div className="container">
        <div className='container-1'>
            <div className="container-head">
            <h2>Send us a message</h2>
            </div>
                        <div class="cont-form">
                            <form data-type="CONTACT US">
                                <p>We're always happy to help, Get in touch with us today!</p>
                                <div className='cont-form-name' >
                                    <label>Your Name</label>
                                    <input required="" maxlength="100" type="text" name="input_name" id="input_name" class="required"/>
                                </div>
                                <div className='cont-form-email'>
                                    <label>Email Address</label>
                                    <input required="" maxlength="250" type="email" name="input_email" id="input_email" class="required"/>
                                </div>
                                <div className='cont-form-number'>
                                    <label>Contact Number</label>
                                    <input required="" maxlength="10" type="number" name="input_mobile" id="input_mobile" class="required"/>
                                </div>
                                <div className='cont-form-message'>
                                    <label>Your Message</label>
                                    <textarea required="" maxlength="500" rows="4" name="input_remark" id="input_remark" class="required"></textarea>
                                </div>
                                <div className='cont-form-submit-button'>
                                    <div>Submit Your Queries!</div>
                                    </div>
                            </form>
                        </div>
                    </div>

    </div>
  )
}

export default ConatactUs