import './Guides.css'
import GuidesDetails from './GuidesDetails';

function Guides() {
    
    return (
        <div id='Guides' className='GuidesHeaderMainDiv'>
            <div className='GuidesHeaderDiv'>
                <h1>Recommended Guides</h1>
            </div>
            <div className='GuidesContentDivParant'>
                <div className='GuidesContentDiv' >
                    <GuidesDetails />
                </div>
            </div>
        </div>
    )
}

export default Guides