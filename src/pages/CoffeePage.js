
import CoffeeFilter from '../components/coffee-filter/coffee-filter';
import CoffeeFooter from '../components/coffee-footer/coffee-footer';
import CoffeeMenu from '../components/coffee-menu/coffee-menu';
import CoffeeSearch from '../components/coffee-search/coffee-search';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { useState } from 'react';

import './mainPage.scss'



const MainPage = () => {

   const [data, setData] = useState(
      [
         { name: 'Columbia', price: 6.99, id: 1 },
         { name: 'Kenya', price: 5.99, id: 2 },
         { name: 'Brazil', price: 7.99, id: 3 },
         { name: 'Brazil', price: 7.99, id: 4 },
         { name: 'Kenya', price: 5.99, id: 5 },
         { name: 'Brazil', price: 7.99, id: 6 }
      ]
   );
   const [filter, setFilter] = useState('All')
   const [term, setTerm] = useState('')

   const filterPost = (items, filter) => {
      switch (filter) {
         case 'Brazil':
            return items.filter(item => item.name === 'Brazil');
         case 'Kenya':
            return items.filter(item => item.name === 'Kenya');
         case 'Columbia':
            return items.filter(item => item.name === 'Columbia');
         default:
            return items
      }
   }

   const onFilterSelect = (filter) => {
      setFilter(filter)

   }

   const searchProd = (items, term) => {
      if (term.length === 0) {
         return items;
      }
      return items.filter(item => {
         return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
   }

   const onFilterSearch = (term) => {
      setTerm(term)
   }

   const visibleData = filterPost(searchProd(data, term), filter);
   const searchFilter = {
      'marginTop': '60px',
      'minHeight': '150px'
   }
   return (
      < >
         <div style={searchFilter}>
            <Container>
               <Row>
                  <CoffeeSearch onFilterSearch={onFilterSearch} />
                  <CoffeeFilter filter={filter} onFilterSelect={onFilterSelect} />
               </Row>
            </Container>
         </div>
         <div className="menu">
            <CoffeeMenu data={visibleData} />
         </div>
         <div className="footer">
            <CoffeeFooter />
         </div>

      </>
   );
}

export default MainPage;
