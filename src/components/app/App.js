
import CoffeeHeader from '../coffee-header/CoffeeHeader.js'
import MainPage from '../pages/MainPage.js'
import CoffeePage from '../pages/CoffeePage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {


   return (
      <Router>
         <CoffeeHeader />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/coffee' element={<CoffeePage />} />
            <Route path='/description' element={<DescrPage />} />
         </Routes>
      </Router>
   );
}

export default App;