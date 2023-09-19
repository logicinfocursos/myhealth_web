import { toast } from 'react-toastify'

import { apiDELETE } from '../../../services/api'



export const deleteItem = async (option, idToDelete) => {

    if (option === "displayMessage") document.getElementById("deleteMessage").style.display = "block"

    else document.getElementById('deleteMessage').style.display = "none"

    if (option === 'delete') {

        if (await apiDELETE({ table: 'users', id: idToDelete })) {

            toast.success("registro excluído com sucesso")

        } else toast.error("ocorreu u erro ao tentar excluir esse registro")

        setTimeout(
            () => window.location.href = `/users`,
            1000
        )
    }
}
