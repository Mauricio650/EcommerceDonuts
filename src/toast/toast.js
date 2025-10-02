import { toast } from "sonner"

export const successToast = ({text}) => {
    return (
        toast.success(text, {
              style: {
                background: '#FD70A7',
                color: 'white'
              }
            })
    )
}

export const errorToast = ({path, message}) => {
    return (
        toast.error(`Error: ${errors.path}`, {
        style: {
          background: '#F14445',
          color: 'white'
        },
        description: errors.message
      })
    )
}