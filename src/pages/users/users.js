import { useState, useEffect, useContext } from 'react'

import { apiGET } from '../../services/api'
//import { AuthContext } from '../../contexts/auth'
import { Navbar, Breadcrumb } from '../../components'
import { ListUsers, deleteItemInList, deleteItemCancel } from './methods'
import './index.styles.css'



export default function Users() {

  //const { user } = useContext(AuthContext)
  const [users, set_users] = useState([])
  const [user_selected, set_user_selected] = useState([])



  const fetchdata = async () => {

    const response = await apiGET({ table: 'users' })

    set_users(response)
  }



  useEffect(() => {

    fetchdata()

  }, [])



  if (!users) return <></>



  return (

    <div className="container" style={{ marginTop: 200 }}>

      <Navbar />

      <Breadcrumb
        title="usuários"
      />

      <a href={`/user/add`} className="btn btn-secondary mb-2"><i className="fas fa-plus mr-3"></i>  criar um registro</a>

      <div className="alert alert-danger" role="alert" id="deleteMessage" style={{ display: 'none' }}>
        <h4 className="alert-heading">excluir registro #{user_selected.code}</h4>
        <p>esse item será excluído, confirma?</p>
        <hr />
        <p className="mb-0">
          <button className='btn btn-secondary btn-sm me-2' onClick={() => deleteItemCancel({ set_user_selected })}>desistir</button>
          <button className='btn btn-danger btn-sm' onClick={() => deleteItemInList({ user_selected: user_selected, set_user_selected: set_user_selected, users: users, set_users: set_users })}>excluir</button>
        </p>
      </div> 

      <ListUsers users={users} set_users={set_users} set_user_selected={set_user_selected} />

    </div>
  )
}