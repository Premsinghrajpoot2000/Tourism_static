import './Cars.css'
import CarsDetails from './CarsDetails'

function Cars() {

    return (
        <div id='Cars' className='CarsHeaderMainDiv'>
            <div className='CarsHeaderDiv'>
                <h1>Trending Used Cars</h1>
            </div>
            <div className='contentDivParant'>
                <div className='contentDiv' >
                    <CarsDetails />
                </div>
            </div>
        </div>
    )
}

export default Cars