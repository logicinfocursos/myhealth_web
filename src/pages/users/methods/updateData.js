import { toast } from 'react-toastify'

import { apiPUT } from '../../../services/api'



export const updateData = async ({ table, objetctToUpdate }) => {

    await apiPUT({ table: table, objetctToUpdate: objetctToUpdate })

    toast.success("registro atualizado com sucesso!")
}
