import { useFormStatus } from "react-dom"


const UpdateButton = () => {
    const {pending} =useFormStatus()
  return (
    <button className='bg-blue-500 rounded-md 
    text-white disabled:bg-opacity-50 disabled:cursor-not-allowed'
    disabled={pending}>
        {pending ? "Updating..." :"Update"}
    </button>
  )

}

export default UpdateButton