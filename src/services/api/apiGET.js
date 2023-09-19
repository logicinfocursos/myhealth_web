import { api } from './api'



export const apiGET = async ({ table, searchID = '', searchField = '' }) => {


   if (table !== '') {

      try {

         let uri = `${table}` + (searchID && `/${searchID}`) + (searchField && `/${searchField}`)

         const response = await api.get(uri)

         return response.data.data

      } catch (error) {

         console.log(`erro ao tentar ler a api: ${table}`, error)

      }
   }

   return null
}