import './Hotels.css'
import HotelsDetails from './HotelsDetails'

function Hotels() {
    
    return (
        <div id='Hotels' className='HotelsHeaderMainDiv'>
            <div className='HotelsHeaderDiv'>
                <h1>Most Popular Hotel <br /> Destinations</h1>
            </div>
            <div className='HotelsContentDivParant'>
                <div className='HotelsContentDiv'>
                    <HotelsDetails />
                </div>
            </div>
        </div>
    )
}

export default Hotels