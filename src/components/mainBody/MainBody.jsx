import { Route, Routes, useParams } from 'react-router-dom'
import './MainBody.scss'

import Home from '../home/Home';
import Map from '../map/Map';
import Preview from '../preview/Preview';
import Save from '../save/Save';
import Header from './header/Header';
import Footer from './footer/Footer'



const MainBody = () => {

    console.log(useParams())

    return (
        <div className='mainBody'>
            <div className="container">
                <div className="top">
                    <Header />
                </div>
                <div className="mid">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/map' element={<Map />} />
                        <Route path='/preview' element={<Preview />} />
                        <Route path='/save' element={<Save />} />
                    </Routes>
                </div>
                <div className="bottom">
                    <Footer />
                    
                </div>
            </div>
        </div>
    )
}

export default MainBody
