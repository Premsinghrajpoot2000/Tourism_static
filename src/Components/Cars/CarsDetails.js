import { useEffect } from 'react';
import './CarsDetails.css'
import { useRef } from 'react';

function CarsDetails() {
    const CarsDetails = [
        {
            CarsName: 'Toyota Innova Crysta',
            CarsImages: './CarsImages/innova.webp',
            RatingsNumber: '4.8',
            Reviews: '558',
            Seats: '5',
            Lluggage: '4',
            CarsMobileNumber: '9351585149',
            alt: 'Toyota Innova Crysta For Your Tour In Jaipur, Rajasthan, India'
        },
        {
            CarsName: 'Maruti Ertiga',
            CarsImages: './CarsImages/Maruti Ertiga.jpg',
            RatingsNumber: '4.6',
            Reviews: '450',
            Seats: '4',
            Lluggage: '4',
            CarsMobileNumber: '9351585149',
            alt: 'Maruti Ertiga For Your Tour In Jaipur, Rajasthan, India'
        },
        {
            CarsName: 'Maruti Swift Dzire',
            CarsImages: './CarsImages/Maruti Dzire.jpg',
            RatingsNumber: '4.6',
            Reviews: '602',
            Seats: '4',
            Lluggage: '4',
            CarsMobileNumber: '9351585149',
            alt: 'Maruti Swift Dzire For Your Tour In Jaipur, Rajasthan, India'
        },
        {
            CarsName: 'Maruti Alto 800',
            CarsImages: './CarsImages/Maruti Alto 800.jpg',
            RatingsNumber: '4.5',
            Reviews: '340',
            Seats: '4',
            Lluggage: '3',
            CarsMobileNumber: '9351585149',
            alt: 'Maruti Alto 800 For Your Tour In Jaipur, Rajasthan, India'
        },
        {
            CarsName: 'Hyundai Aura',
            CarsImages: './CarsImages/Hyundai Aura.jpg',
            RatingsNumber: '4.6',
            Reviews: '245',
            Seats: '3',
            Lluggage: '3',
            CarsMobileNumber: '9351585149',
            alt: 'Hyundai Aura For Your Tour In Jaipur, Rajasthan, India'
        },
    ]

    let CarsComponents = useRef(null)

    useEffect(() => {
        function ApplyCarsAnimation() {
            const CarsSlider = document.querySelector('.CarsSlider');
            const CarsAnimationDuration = `${CarsComponents.current.children.length * 2}s`;
            const CarsAnimationTimingFunction = 'linear';
            const CarsAnimationIterationCount = 'infinite';
            const CarsAnimationDirection = 'alternate';
            CarsSlider.style.animation = `CarsScroll ${CarsAnimationDuration} ${CarsAnimationTimingFunction} ${CarsAnimationIterationCount} ${CarsAnimationDirection}`;
        }

        const CarsKeyframes = `@keyframes CarsScroll {
            0% {
                transform: translateX(0);
            }
        
            100% {
                transform: translateX(calc(-${document.querySelector('.contentDiv').scrollWidth}px + 100vw));
            }
        }`;

        const StyleSheet = document.createElement('style');
        StyleSheet.appendChild(document.createTextNode(CarsKeyframes));
        document.head.appendChild(StyleSheet);

        ApplyCarsAnimation();
    }, [])

    function StopCarsAnim() {
        let Carsslider = document.getElementById('CarsSliderId');
        if (Carsslider.classList.contains('CarsSlider')) {
            Carsslider.classList.remove('CarsSlider');
            Carsslider.removeAttribute('style');
        }
    }

    return (
        <div id='CarsSliderId' className='CarsSlider' onClick={StopCarsAnim} ref={CarsComponents}>
            {
                CarsDetails.map(
                    (item, i) => (
                        <div key={i} className="CarsDetailsDiv">
                            <div className='Image'>
                                <img src={item.CarsImages} alt={item.alt} />
                            </div>
                            <div className='CarsInfo'>
                                <div className='CarsName'>
                                    {item.CarsName}
                                </div>
                                <div className='CarsRatings'>
                                    <p>{item.RatingsNumber}/5</p>
                                    <p>Average</p>
                                    <p>({item.Reviews} Reviews)</p>
                                </div>
                                <div className='CarsGroupsAndBox'>
                                    <div className='CarsGroupIco'>
                                        <i className="fa-regular fa-users-rays"></i>
                                        <p>{item.Seats}</p>
                                    </div>
                                    <div className='CarsBoxIco'>
                                        <i className="fa-regular fa-suitcase"></i>
                                        <p>{item.Lluggage}</p>
                                    </div>
                                </div>
                                <div className='CarsMobileNumber'>
                                    <div>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href={'tel:' + item.CarsMobileNumber}> +91 {item.CarsMobileNumber}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default CarsDetails