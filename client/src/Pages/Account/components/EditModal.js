import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useForm } from "react-hook-form"
import Alert from "react-bootstrap/Alert"
import { useEffect } from "react"
import EditAccountResolver from "../../../validations/EditAccountResolver"
import roles from "../../../helpers/roles"
import useAuth from "../../../auth/useAuth"

const EditModal = ({ isOpen, close, user }) => {

  const { register, handleSubmit, formState: { errors, dirtyFields }, reset } = useForm({ resolver: EditAccountResolver });
  const { updateUser, hasRole } = useAuth()

  const isDirty = !!Object.keys(dirtyFields).length

  const onSubmit = (formData) => {
    if (!isDirty) return;

    let newUserData;
    if(formData.role) {
      newUserData = formData;
    } else {
      const { role, ...resFormData } = formData;
      newUserData = resFormData;
    }

    updateUser(newUserData)
    close()
    //Petición al backend, enviando la data de la nueva contraseña
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  },
  [isOpen, reset])

  useEffect(() => {
    if(user) reset({
      name: user.name,
      email: user.email
    });
  },
  [user, reset])

  return (
    <Modal show = {isOpen} onHide = {close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit my account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit = { handleSubmit(onSubmit) }>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type = "text" placeholder = "Write a new name" {...register("name")}/>
            {errors?.name && (
              <Form.Text>
              <Alert variant = "danger">
                {errors.name.message}
              </Alert>
            </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type = "email" placeholder = "Write a new email" {...register("email")}/>
            {errors?.email && (
              <Form.Text>
              <Alert variant = "danger">
                {errors.email.message}
              </Alert>
            </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control as = "select" disabled = {!hasRole('admin')} {...register("role")}>
              <option>Select one</option>

              {Object.keys(roles).map(role => {
                return <option key = {role}>{role}</option>
              })}
              </Form.Control>
            {errors?.role && (
              <Form.Text>
              <Alert variant = "danger">
                {errors.role.message}
              </Alert>
            </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {close}>Cancel</Button>
        <Button variant = "primary" onClick = {handleSubmit(onSubmit)} disabled = {!isDirty}>Update my account</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal
