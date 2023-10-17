import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cup from '../../icons/Coffee-cup.png'
import beans from '../../icons/beans.png'

import './coffee-descr.scss'

const CoffeeDescr = () => {
   return (
      <div className="descr">
         <Container>
            <Row className='mt-70'>
               <Col>
                  <img className='descr__cup' src={cup} alt="cup" />
               </Col>
               <Col>
                  <div className="descr__wrapper">
                     <h2>About coffee</h2>
                     <div className="descr__beans">
                        <div className="descr__line"></div>
                        <img src={beans} alt="beans" />
                        <div className="descr__line"></div>
                     </div>
                     <div className="descr__text">
                        Coffee is the second most heavily traded product in the world after oil. <br /> A coffee bean goes from a series of producers, exporters, importers, roasters and sellers.<br /> This long chain of production has major social and political effects. For example, some coffee producers and drinkers are concerned about the Fair Trade movement. <br />The aim of this movement is to make sure that coffee farmers around the world get a fair price for their harvest.<br /> Poor farmers are organized into groups called cooperatives. They are guaranteed money under this system.<br /> Even if the market price for coffee drops, these farmers can earn enough money to live on.
                     </div>
                  </div>
               </Col>

            </Row>
            <div className="descr__line descr__underline"></div>
         </Container>
      </div>
   )
}

export default CoffeeDescr;