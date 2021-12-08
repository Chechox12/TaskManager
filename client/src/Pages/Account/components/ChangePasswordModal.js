import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useForm } from "react-hook-form"
import Alert from "react-bootstrap/Alert"
import ChangePasswordResolver from "../../../validations/ChangePasswordResolver"
import { useEffect } from "react"

const ChangePasswordModal = ({ isOpen, close }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: ChangePasswordResolver });

  const onSubmit = (formData) => {
    alert("Hola Malparidos")
    //Petición al backend, enviando la data de la nueva contraseña
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  return (
    <Modal show = {isOpen} onHide = {close}>
      <Modal.Header closeButton>
        <Modal.Title>Change password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit = { handleSubmit(onSubmit) }>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control placeholder = "Write your new Password" {...register("password")} type = "password"/>
            {errors?.password && (
              <Form.Text>
              <Alert variant = "danger">
                {errors.password.message}
              </Alert>
            </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {close}>Cancel</Button>
        <Button variant = "primary" onClick = {handleSubmit(onSubmit)}>Update Password</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangePasswordModal
