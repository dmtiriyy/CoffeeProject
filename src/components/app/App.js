
import CoffeeHeader from '../coffee-header/coffee-header';
import MainPage from '../../pages/MainPage'
import DescrPage from '../../pages/DescrPage'
import CoffeePage from '../../pages/CoffeePage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {


   return (
      <Router>
         <CoffeeHeader />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/coffee' element={<CoffeePage />} />
            <Route path='/description' element={<DescrPage />} />
            <Route path='/CoffeeProject' element={<MainPage />} />
         </Routes>
      </Router>
   );
}

export default App;
