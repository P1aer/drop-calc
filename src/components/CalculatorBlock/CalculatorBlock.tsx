import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CalculatorBlock.scss'
import ComponentSideBar from '../ComponentSideBar'
import CanvasBlock from '../CanvasBlock'

const CalculatorBlock = () => {
  return (
    <Container className='wrapper-calc' fluid>
      <Row>
        <Col className='d-grid'>
          <ComponentSideBar />
        </Col>
        <Col>
          <CanvasBlock />
        </Col>
      </Row>
    </Container>
  )
}

export default CalculatorBlock
