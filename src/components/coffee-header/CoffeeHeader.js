import './coffeeHeader.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


import { ReactComponent as ReactLogo } from "../../icons/logo-beans.svg";

const CoffeeHeader = () => {
   return (
      <header className="header">
         <Container>
            <Row>
               <Col>
                  <div className="header__navbar">
                     <ReactLogo />
                     <div className="header__navbar-inner">
                        <Link to={'/'}><span>Coffee house</span></Link>
                        <Link to={'/coffee'}><span>Our coffee</span></Link>
                        <Link to={'/description'}><span>For your pleasure</span></Link>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row className='mt-50'>
               <Col><h1 className='header__title'>Our Coffee</h1></Col>
            </Row>
         </Container>
      </header>
   );
}

export default CoffeeHeader;