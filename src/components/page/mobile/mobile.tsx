
import './mobile.scss'
import mockup1 from '../../../assets/images/download_section.png'
import google from '../../../assets/images/Google_big.png'
import ios from '../../../assets/images/Apple_big.png'
import qr from '../../../assets/images/QR2.png'
import { isIOS, isBrowser } from 'react-device-detect';

const Mobile = () => {
  return (
    <section className="section home_sec_1">
    <div className="grid-container">
        <div className="grid-100">
            <div className="download_center">
                <div className='section-title-wrapper'>
                    <div className='section-title'>
                        <h1>Try the new <b>Booking App</b></h1>
                    </div>
                    <div className='sub-title'>
                        <h4><b>Book wonderful services & products </b>with our mobile app, or run your business with our award-winning, 100% subscription-free iOS and Android booking platform.</h4>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className="download-section"  >
                        <div className='download-content-section'>
                            <div className='text-download'>
                                <h1 className='download_title'>Download the <b>Vio Mobile App</b></h1>
                                <h4>Instantly book <b>wonderful services and products </b> near you!</h4>
                            </div>
                            <div className='mockup-img' style={{gap: '40px'}}>
                                <div className='device_icon'>
                                    {isBrowser ? <>
                                        <img src={ios}/>
                                        <img src={google}/>
                                    </>
                                    : isIOS ? (
                                        <>
                                            <a href=''>
                                                <img src={ios}/>
                                            </a>
                                        </>
                                    ) :
                                    (
                                        <>
                                        <a href=''>
                                            <img src={google}/>
                                        </a>
                                    </> 
                                    )}
                                    
                                </div>
                                <div>
                                    <img src={qr}/>
                                </div>

                            </div>

                        </div>

                        <div className='download-img'>
                            <img src={mockup1}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Mobile
