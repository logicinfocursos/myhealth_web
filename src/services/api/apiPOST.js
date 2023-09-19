import { api } from './api'



export const apiPOST = async ({ table, objToAdd }) => {



  if (table !== '') {

    try {

      const uri = `http://localhost:3050/api/${table}`

      const response = await api.post(uri, objToAdd, "withCredentials: true")     

      return response

    } catch (error) {

      console.log(`error when trying to read the apitPOST - table: ${table}`, error)

      return null
    }
  }
}