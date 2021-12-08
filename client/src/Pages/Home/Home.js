import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../../helpers/routes"

const Home = () => {
  return (
    <Container>
      <Row className = "mt-5">
        <Col xs = {{ span: 12 }} className = "text-center">
          <h2>
            Welcome to Task Manager
          </h2>

          <p>
            Here you can manage your projects!
          </p>

          <p>
            You will be able to mark your tasks as completed, add new ones, update them and delete them.
          </p>

          <div>
            <Link to = {routes.login}>Login</Link> or <Button as = {Link} to = {routes.register}>Create an Account</Button>
          </div>
        </Col>

        <Col className = "mt-5">
          <img
          className = "img-fluid"
          src="/img/task-manager.svg" 
          alt="Task Manager"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
