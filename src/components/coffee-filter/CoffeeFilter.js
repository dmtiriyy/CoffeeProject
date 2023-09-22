import Col from 'react-bootstrap/Col';

import './coffeeFilter.scss'


const CoffeeFilter = (props) => {
   const btnData = [
      { name: 'All', label: 'All' },
      { name: 'Brazil', label: 'Brazil' },
      { name: 'Kenya', label: 'Kenya' },
      { name: 'Columbia', label: 'Columbia' }
   ]

   const btns = btnData.map(({ name, label }) => {
      const active = props.filter === name;
      const clazz = active ? "filter__btn-active" : ""
      return (
         <button className={`filter__btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}
         >
            {label}
         </button>
      )
   })


   return (

      <Col md={12} lg={6}>
         <div className="filter__search-wrapper">
            <span className="filter__text-filter">Or filter</span>
            <div className="filter__btn-group">
               {btns}
            </div>

         </div>
      </Col>

   )
}

export default CoffeeFilter;