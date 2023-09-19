import { api } from './api'



export const apiPUT = async ({ table, objetctToUpdate }) => {

    const uri = `api/${table}/${objetctToUpdate.id}`

    if (table !== '') {

        try {

            const response = await api.put(uri, objetctToUpdate, "withCredentials: true")

            return response

        } catch (error) {

            console.log(`error when trying to read the apitPOST - table: ${table}`, error)

            return null
        }
    }
}