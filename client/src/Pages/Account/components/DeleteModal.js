import Modal from "react-bootstrap/Modal"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import useAuth from "../../../auth/useAuth"
// import Form from "react-bootstrap/Form"
// import { useForm } from "react-hook-form"

const DeleteModal = ({ isOpen, close }) => {

  // const { register } = useForm()

  const { logout } = useAuth()

  const handleDelete = () => {
    // Petición http y comprobación de errores
    // close()
    logout();
  }

  return (
    <Modal show = {isOpen} onHide = {close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant = "danger">
          ¿Are you sure you want to delete your account <b>permanently</b>?
        </Alert>
        {/* <Form.Group>
            <Form.Label>type <b><i>delete</i></b> to disabled account protection </Form.Label>
            <Form.Control type = "text"/>
          </Form.Group> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {close}>Cancel</Button>
        <Button variant = "danger" onClick = {handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
