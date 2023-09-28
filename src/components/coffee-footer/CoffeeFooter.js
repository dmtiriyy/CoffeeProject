import { Container } from 'react-bootstrap/lib/tab';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap';

import { ReactComponent as ReactLogo } from "../../icons/footer-beans.svg";
import beans from '../../icons/beans.png'


import './coffeeFooter.scss'

const CoffeeFooter = () => {
   return (
      <footer className='footer'>
         <Container>
            <Row>
               <Col xs={12}>
                  <div className="footer__navbar">
                     <ReactLogo />
                     <div className="footer__navbar-inner">
                        <span>Coffee house</span>
                        <span>Our coffee</span>
                        <span>For your pleasure</span>
                     </div>
                  </div>
               </Col>
               <Col xs={12}>
                  <div className="footer__beans">
                     <div className="footer__line"></div>
                     <img src={beans} alt="beans" />
                     <div className="footer__line"></div>
                  </div>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default CoffeeFooter;