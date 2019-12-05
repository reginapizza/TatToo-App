import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const About = (props) => (
  <Fragment>
    <h1 className="page-headers">About Tat, Too</h1>
    <div>
      <Button href="#tattoos" className="submit-button">Back</Button>
    </div>
    <div className="description">
      <h3>How to use this app:</h3>
      <br />
      <h5>Adding a Tattoo</h5>
      <ol>
        <li>Navigate to the + icon in the navigation bar</li>
        <li>Add a title for your tattoo, this should be very short.</li>
        <li>Add a link to an image that is upload on the internet. Hint: the best way to add an image is by right clicking your image and selecting &quot;Copy Link Address&quot; and then pasting in the form. The more square the picture is, the better.  </li>
        <li>Add a description to your image, such as what it is, why you got it or the meaning behind it.</li>
        <li>Add the date you got your tattoo. If it was done on multiple appointments, just add one date such as the most recent one. Format should be in YYYY-MM-DD.</li>
        <li>Add the full name of your artist. If you do not add an artist&apos;s name but do list their instagram handle, their name will show up as their instagram link with a hyperlink to their profile.</li>
        <li>Add your artist&apos;s instagram handle. If their instagram account hyperlink was &quot;https://www.instagram.com/thekatvond/&quot;, you would enter &quot;thekatvond&quot; in order to properly hyperlink it.</li>
        <li>Add the location you got your tattoo, such as the name of the shop and/or the physical address.</li>
        <li>Add the ink brand used (if you know it). This can be helpful later if you notice problems with the ink and want to avoid that brand for future tattoos.</li>
      </ol>

      <h5>Editing a Tattoo</h5>
      <br />
      <p>To edit a tattoo, navigate to either your tattoos or the home page, click on the tattoo you would like to edit. If you are the owner of that tattoo, you should see an update button on the page. Click it, and then fill out the information you would like to change. Things you don&apos;t change will stay the same as they were before.</p>
      <br />
      <h5>Deleting a Tattoo</h5>
      <br />
      <p>To edit a tattoo, navigate to either your tattoos or the home page, click on the tattoo you would like to edit. If you are the owner of that tattoo, you should see a delete button on the page. Clicking delete will delete the tattoo permanently and you will not be able to get it back, so be sure!</p>
      <br />
      <h5>Changing Password</h5>
      <br />
      <p>To change your password, navigate to your profile which is indicated by the person icon in the navigation bar. There will be two buttons right under My Tattoos, one of which should be &quot;Change Password&quot;. Click on that, enter your old password and your new password, and then click submit. If you don&apos;t get an error and are redirected back to your own tattoos page, you have successfully changed your password. </p>
      <br />
      <h3>Help! I...</h3>
      <br />
      <h5>Don&apos;t see my image!</h5>
      <ul>
        <li>Make sure you are linking to the <strong>image address</strong> and not the link to the page it&aposs on. The url should have the file type at the end of it, such as .jpeg, .png, etc... Please see step #3 under &quot;Adding a Tattoo&quot; if you run into issues.  </li>
      </ul>
    </div>
  </Fragment>
)

export default About
