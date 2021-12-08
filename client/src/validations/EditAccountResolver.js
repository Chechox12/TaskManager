import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles'

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required"),
  email: yup
    .string()
    .required("you must enter an email address")
    .email("Invalid email"),
  role: yup
    .string()
    // .required("Select a Role")
    .oneOf(Object.keys(roles), "Select a valid role")
})

export default yupResolver(schema)