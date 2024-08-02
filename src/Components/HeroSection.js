import './HeroSection.css'

function HeroSection() {

    setInterval(() => {
        let HeroImageTarget = document.getElementById('HeroImage')
        switch (HeroImageTarget.getAttribute('src')) {
            case ('./HeroImages/Hero1.jpeg'): HeroImageTarget.src = './HeroImages/Hero2.jpg'
                break;
            case ('./HeroImages/Hero2.jpg'): HeroImageTarget.src = './HeroImages/Hero3.jpg'
                break;
            case ('./HeroImages/Hero3.jpg'): HeroImageTarget.src = './HeroImages/Hero4.jpg'
                break;
            case ('./HeroImages/Hero4.jpg'): HeroImageTarget.src = './HeroImages/Hero5.jpg'
                break;
            case ('./HeroImages/Hero5.jpg'): HeroImageTarget.src = './HeroImages/Hero6.jpg'
                break;
            case ('./HeroImages/Hero6.jpg'): HeroImageTarget.src = './HeroImages/Hero7.jpg'
                break;
            case ('./HeroImages/Hero7.jpg'): HeroImageTarget.src = './HeroImages/Hero1.jpeg'
                break;
            default: console.log('error')
        }
    }, 3000);

    return (
        <div style={{ position: 'relative' }}>
            <div className='HeroSectionTextDiv'>
                <div>
                    <h1>Are You Ready...</h1>
                    <p>To explore new things?</p>
                </div>
            </div>
            <div className='HeroSectionBlackDiv'></div>
            <div className='HeroSectionImageDiv'>
                <img id='HeroImage' className='HeroSectionImageDiv' src='./HeroImages/Hero1.jpeg' alt='Jaipur Famous Places Images' />
            </div>
        </div>
    )
}

export default HeroSection