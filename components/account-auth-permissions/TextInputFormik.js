import { useField } from 'formik'

// From formik tutorial, theres a lot of magic going on behind the scenes
// that you should know before trying to understand this without verencular context
// https://jaredpalmer.com/formik/docs/tutorial#leveraging-react-context
const TextInputFormik = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default TextInputFormik
