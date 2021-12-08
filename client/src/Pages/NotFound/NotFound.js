import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../../helpers/routes"

const NotFound = () => {
  return (
    <Container>
      <Row className = "mt-5">
        <Col md = {{ span: 6, offset: 3 }} className = "text-center">
          <img 
          style = {{ width: '100%' }}
          src="/img/404-not-found.svg" 
          alt="Error-404" 
          />

          <h3>
            We can't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </h3>

          <p>
            You can browse our <Link to = {routes.home}>home page</Link>
          </p>

        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
