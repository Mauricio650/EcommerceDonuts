import { toast } from 'sonner'

export const successToast = ({ text }) => {
  return (
    toast.success(text, {
      style: {
        background: '#FD70A7',
        color: 'white'
      }
    })
  )
}

export const errorToast = ({ path, message }) => {
  return (
    toast.error(`Error: ${path}`, {
      style: {
        background: '#F14445',
        color: 'white'
      },
      description: message
    })
  )
}
