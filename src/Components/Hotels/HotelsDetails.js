import { useEffect, useRef } from 'react';
import './HotelsDetails.css'

function HotelsDetails() {
    const HotelsDetails = [
        {
            HotelsName: 'Hotel Lake Palace',
            HotelsLocation: 'Jal Mahal, Amer, Jaipur, Rajasthan 302002',
            LocationLink: 'https://maps.app.goo.gl/YMnoUdbynY4KWuHx8',
            HotelsPhotos: './HotelsImages/Hotel Lake Palace Jaipur.jpg',
            RatingsNumber: '4.1',
            Reviews: '552',
            alt: 'Book Hotel Lake Palace, the best hotel in Jaipur with ₹0 Payment and Free Cancellation.'
        },
        {
            HotelsName: '7 Apples Hotel',
            HotelsLocation: 'Plot No 01, Chetak Marg, Sector 8, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033',
            LocationLink: 'https://maps.app.goo.gl/7Q6oDR4W9UqSH7WL9',
            HotelsPhotos: './HotelsImages/7 Apples Hotel.jpg',
            RatingsNumber: '4.4',
            Reviews: '254',
            alt: '7 Apple, Jaipur is the best hotel in Jaipur near Jal Mahal. Book rooms directly from our Official Website to get Free Wi-Fi, Complimentary Breakfast, Pay@Resort, Exclusive Offers, and the Best Rate Guaranteed. Book Online Now!'
        },
        {
            HotelsName: 'Hotel Green Valley',
            HotelsLocation: 'Oppst.Jaipur Golden Petrol Pump, Kunda, Amer, Jaipur, Rajasthan 302028',
            LocationLink: 'https://maps.app.goo.gl/KYrYjKEp5arzngLg6',
            HotelsPhotos: './HotelsImages/Hotel Green Valley.jpg',
            RatingsNumber: '4.4',
            Reviews: '439',
            alt: 'Book Hotel Green Valley from, the best hotel in Jaipur with ₹0 Payment and Free Cancellation.'
        },
        {
            HotelsName: 'Maharana Greens Resart and hotel',
            HotelsLocation: 'Opp. Le Meridien Hotel, Jaipur delhi highway, Kukas, Jaipur, Rajasthan 302028',
            LocationLink: 'https://maps.app.goo.gl/KYrYjKEp5arzngLg6',
            HotelsPhotos: './HotelsImages/Maharana Greens Resart and hotel.jpg',
            RatingsNumber: '3.9',
            Reviews: '625',
            alt: 'Maharana Greens Resort, Kookas: See  5 traveller reviews,  45 user photos and best deals for Maharana Greens Resort, ranked #13 of 17 Kookas hotels, rated 4 of 5 at Tripadvisor.'
        },
    ]

    let HotelsComponents = useRef(null)

    useEffect(() => {
        function ApplyHotelsAnimation() {
            const HotelsSlider = document.querySelector('.HotelsSlider');
            const HotelsAnimationDuration = `${HotelsComponents.current.children.length * 2}s`;
            const HotelsAnimationTimingFunction = 'linear';
            const HotelsAnimationIterationCount = 'infinite';
            const HotelsAnimationDirection = 'alternate';
            HotelsSlider.style.animation = `HotelsScroll ${HotelsAnimationDuration} ${HotelsAnimationTimingFunction} ${HotelsAnimationIterationCount} ${HotelsAnimationDirection}`;
        }

        const HotelsKeyframes = `@keyframes HotelsScroll {
            0% {
                transform: translateX(0);
            }
        
            100% {
                transform: translateX(calc(-${document.querySelector('.contentDiv').scrollWidth}px + 100vw));
            }
        }`;

        const StyleSheet = document.createElement('style');
        StyleSheet.appendChild(document.createTextNode(HotelsKeyframes));
        document.head.appendChild(StyleSheet);

        ApplyHotelsAnimation();
    }, [])

    function StopHotelsAnim() {
        let HotelsSlider = document.querySelector('#HotelsSliderId');
        if (HotelsSlider.classList.contains('HotelsSlider')) {
            HotelsSlider.classList.remove('HotelsSlider');
            HotelsSlider.removeAttribute('style');
        }
    }

    return (
        <div id='HotelsSliderId' className='HotelsSlider' onClick={StopHotelsAnim} ref={HotelsComponents}>
            {
                HotelsDetails.map(
                    (item, i) => (
                        <div key={i} className="HotelsDetailsDiv">
                            <div className='HotelsImage'>
                                <img src={item.HotelsPhotos} alt='Hotel' />
                            </div>
                            <div className='HotelsInfo'>
                                <div className='HotelsName'>
                                    <div>{item.HotelsName}</div>
                                    <div><a className='HotelsLocationLink' href={item.LocationLink}>{item.HotelsLocation}</a></div>
                                </div>
                                <div className='HotelsRatings'>
                                    <p>{item.RatingsNumber}/5</p>
                                    <p>Average</p>
                                    <p>({item.Reviews} Reviews)</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default HotelsDetails