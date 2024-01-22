import React from 'react'
import { Link } from 'react-router-dom'



function Admin() {
  return (
    <div style={{backgroundImage:"url('https://www.bhmpics.com/downloads/contact-us-image/6.concept-contact-us-blank-wooden-cubes-square-dice-with-symbol-email-telephone-address-placed-wood-background_44868-1254.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'auto'}}>
      <marquee>
          <h1><b>Smart Contact Syncing ,Updates ,Management ,Enrichment</b></h1>
      </marquee>
      <div className='text-center mt-4 p-5' style={{width:'600px',marginLeft:'350px'}}>
        <h2>Sync Across Accounts</h2>
        <h4>We connect multiple accounts or sources to create a unified address book for you. Get up-to-date contact information that syncs across multiple accounts and devices automatically.</h4>
        <img style={{border:'10px solid white',borderRadius:'40px',margin:'15px'}} src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=" height={'350px'} width={'400px'}  alt="" />
      </div>
      <div className='text-center mt-4 p-5' style={{width:'600px',marginLeft:'350px'}}>
        <h2>Stay Up-To Date</h2>
        <h4>We let you know what contact information may be out-of-date. Automated scans ensure you always have the most accurate information.</h4>
        <img style={{border:'10px solid white',borderRadius:'40px',margin:'15px'}} src="https://cdn.dribbble.com/users/4695205/screenshots/15709788/media/36a8815b0087fcfcbd4460086afaa5f6.png?resize=400x0" height={'350px'} width={'400px'}  alt="" />
      </div>
      <div className='text-center mt-4 p-5' style={{width:'600px',marginLeft:'350px'}}>
        <h2>Complete the Contact</h2>
        <h4>We take a single piece of information－email address, social handle, phone number－and give you a more complete profile. Enriched, contextual data ensures you always contact the right person.</h4>
        <img style={{border:'10px solid white',borderRadius:'40px',margin:'15px'}} src="https://miro.medium.com/v2/resize:fit:1400/0*_Yw7Y7Q7pPb9G-lg.jpg" height={'350px'} width={'400px'}  alt="" />
      </div>
      <div className='text-center mt-4 p-5' style={{width:'600px',marginLeft:'350px'}}>
        <h2>Access Contacts Anywhere</h2>
        <h4>We let you know what contact information may be out-of-date. Automated scans ensure you always have the most accurate information.</h4>
        <img style={{border:'10px solid white',borderRadius:'40px',margin:'15px'}} src="https://i.pinimg.com/736x/8d/0b/d0/8d0bd0028037f753eb9e0871544e4fcc.jpg" height={'350px'} width={'400px'}  alt="" />
      </div>

      <div className='text-center'>
        <Link to={'/home'}>
        <button className='btn btn-primary m-4'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Admin