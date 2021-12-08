import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import useAuth from "../../../auth/useAuth"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { toast } from "react-toastify"

const ProfilePicModal = ({ isOpen, close }) => {

  const { updateUser } = useAuth();
  const [fileName, setFileName] = useState("Upload file")
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const [file] = e.target.files;

    const size_50mb = (50 * 1024 * 1024)

    const isValidSize = file.size < size_50mb

    // const isValidSize = (file.size < 200 * 1024)

    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name)

    if (!isValidSize) return toast.error("Ops! Image too heavy, max 50mb.")
    if (!isValidType) return toast.error("You can only upload image")

    setFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
      
    }
    reader.readAsDataURL(file)

  }

  const handleUpdateProfilePic = () => {
    //Petición al backend para cambio de imagen
    if (!selectedFile) return toast.error("PleasePlease select an image");
    updateUser({ profilePic: selectedFile })
    close()
  }

  return (
    <Modal show = {isOpen} onHide = {close}>
      <Modal.Header closeButton>
        <Modal.Title>Change my profile picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control 
              type="file"
              // className = "custom-file-input"
              accept=".jpg, .jpeg, .gif, .png"
              onChange={handleFileChange}
              // data-browse = "Browse"
              // placeholder = "Select a file"
              label={fileName}
            />
          </Form>
          <img
          className = "img-fluid mt-2"
          src={selectedFile}
          alt="Profile-preview" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {close}>Cancel</Button>
        <Button variant = "primary" onClick = {handleUpdateProfilePic}>Update Image</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProfilePicModal
