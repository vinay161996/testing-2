import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppContext from './utils/context'
import MainBody from './components/mainBody/MainBody'
import SideNavbar from './components/sideNavbar/SideNavbar'



function App() {

  return (
    <BrowserRouter>
      <AppContext>
        <SideNavbar />
        <MainBody />
      </AppContext>
    </BrowserRouter>
  )
}

export default App
