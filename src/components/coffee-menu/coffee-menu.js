
import coffee from '../../icons/menu.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

import './coffee-menu.scss'


const CoffeeMenu = ({ data }) => {
   const elements = data.map(item => {
      const { id, name, price } = item
      return (

         <CSSTransition key={id} timeout={500} classNames="my-node"  >
            <Col xs={6} md={4}>
               <li className="menu__item">
                  <div className="menu__img"><img src={coffee} alt="coffee" /></div>
                  <div className="menu__header">AROMISTICO Coffee 1 kg</div>
                  <div className="menu__item-wrapper">
                     <span className="menu__type">{name}</span>
                     <span className="menu__price">{`${price} $`}</span>
                  </div>
               </li>
            </Col>
         </CSSTransition>

      )
   })

   return (

      <ul className="menu">

         <Container>
            <Row>

               <TransitionGroup component={null} >

                  {elements}

               </TransitionGroup>

            </Row>
         </Container>

      </ul>
   )
}

export default CoffeeMenu;