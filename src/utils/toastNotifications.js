  import { toast } from 'react-toastify';

export const errorNotification = (errorMessage) => {
    return toast.error(`${errorMessage}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
        autoClose: false
    })
}