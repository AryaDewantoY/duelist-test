import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
     
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">FASHION STORE</div>
            <div className="title">LOW PRICE & BIG DISCOUNT</div>
            <div className="introButton mt-4 text-center">
            <Button variant="dark">LIST PRODUCT</Button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Intro
