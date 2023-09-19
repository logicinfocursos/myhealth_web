import { toast } from 'react-toastify'

import { apiPOST } from '../../../services/api'



export const addData = async ({ table, objToAdd }) => {

    const _result = await apiPOST({ table: table, objToAdd: objToAdd });

    if (_result) {

        toast.success("registro incluído com sucesso");

    } else toast.error(`erro ao tentar adicionar esse registro`);

    setTimeout(
        () => window.location.href = `/users/${objToAdd.code}`,
        1000
    )
}
