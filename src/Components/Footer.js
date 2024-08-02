import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterTop'>
                <a href='./'><img src='./Logo.png' alt='Website Logo' /></a>
            </div>
            <div className='FooterBottomDiv'>
                <p><i className="fa-solid fa-location-check"></i>Kakriya ki Dhani Toda Meena, Jamwaramgragh, Jaipur, Rajasthan</p>
                <a href='tel:+91 9351585149'><i className="fa-solid fa-phone"></i>+91 9351585149</a>
                <a href='mailto:Pinkcityjaipurtourandtravelsra@gmail.com'><i className="fa-solid fa-envelope"></i>Pinkcityjaipurtourandtravelsra@gmail.com</a>
            </div>
            <div className='FooterCopyright'>
                <p>© 2024 Site Owner, Inc. <a href='./'>All rights reserved.</a></p>
            </div>
            <div className='WhatsAppLogo'>
                <a href='https://wa.link/nma7gi'>
                    <img src='./WhatsAppLogo.webp' alt='Whatsapp' />
                </a>
            </div>
        </div>
    )
}

export default Footer