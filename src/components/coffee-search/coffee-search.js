import Col from 'react-bootstrap/Col';

import './coffee-search.scss'
import { useState } from 'react';


const CoffeeSearch = (props) => {
   // constructor(props) {
   //    super(props);
   //    state = {
   //       term: ''
   //    }
   // }

   const [term, setTerm] = useState('');

   const onFilterSearch = (e) => {
      const term = e.target.value;
      setTerm(term)
      props.onFilterSearch(term)
   }


   return (
      <Col md={12} lg={6}>
         <div className="search__wrapper">
            <span className="search__text">Looking for</span>
            <input type="text" value={term} onChange={onFilterSearch} placeholder="start typing here..." className="search__input" />
         </div>
      </Col>
   )
}

export default CoffeeSearch;