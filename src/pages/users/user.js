import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'

import { apiGET } from '../../services/api'
import { AuthContext } from '../../contexts/auth'
import { Navbar, Breadcrumb } from '../../components'
import { addData, deleteItem, DeleteMessageAlert, fieldsVerify, submitForm, updateData } from './methods'




export const checkFields = true
let docRef, _user



export default function DailyMeasurement() {



    // const { user, setUser } = useContext(AuthContext)
    const [user, set_user] = useState([])
    const { id } = useParams()
    const operation = id == 'add' ? 'add' : 'edit'
    // _user = user



    const fetchdata = async () => {

        const response = await apiGET({ table: 'users', searchID: id, searchField: 'code' })

        set_user(response[0])
    }



    useEffect(() => {

        if (operation !== 'add') fetchdata()

    }, [])



    return (

        <div className="container" style={{ marginTop: 200 }}>

            <Navbar />

            <Breadcrumb
                title={`usuário (${operation == "add" ? "novo" : "editar"})`}
                previewPage="usuários"
                previewPageLink="users"
            />

            {
                operation !== "add" &&
                    <a href={`/user/add`} className="btn btn-secondary" id="add_button"><i className="fas fa-plus"></i>  criar um registro</a>                    
            }

            <DeleteMessageAlert
                user={user}
                deleteItem={deleteItem}
            />

            <div className="card mt-5 mb-5">

                <div className="card-header">
                    cadastro  {user.id ? '(# ' + user.code + ")" : ''}
                </div>

                <form className="row p-3" id="Form" onChange={() => fieldsVerify(user)}>

                    <div className="mb-3 col-md-12">
                        <label htmlFor="name" className="form-label">nome</label>
                        <input type="text" className="form-control" id="name" placeholder="nome do usuário" defaultValue={user.name} onChange={(event) => set_user({ ...user, name: event.target.value })} />
                        <small id="error_message_name" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher o [nome]! ***</small>
                    </div>

                    <div className="mb-3 col-md-6">
                        <label htmlFor="birthdate" className="form-label">aniversário</label>
                        <input type="text" className="form-control" id="birthdate" placeholder="aniversário" defaultValue={user.birthdate} onChange={(event) => set_user({ ...user, birthdate: event.target.value })} />
                        <small id="error_message_birthdate" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher o [aniversário]! ***</small>
                    </div>

                    <div className="mb-3 col-md-6">
                        <label htmlFor="height" className="form-label">altura</label>
                        <input type="text" className="form-control" id="height" placeholder="altura" defaultValue={user.height} onChange={(event) => set_user({ ...user, height: event.target.value })} />
                        <small id="error_message_height" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher a [altura]! ***</small>
                    </div>

                    <div className="mb-3 col-md-6">
                        <label htmlFor="email" className="form-label">e-mail</label>
                        <input type="text" className="form-control" id="email" placeholder="e-mail" defaultValue={user.email} onChange={(event) => set_user({ ...user, email: event.target.value })} />
                        <small id="error_message_email" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher o [e-mail]! ***</small>
                    </div>

                    <div className="mb-3 col-md-12 mt-5">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={(event) => submitForm(event, user, set_user)} id="submit_button">salvar</button>
                            <button type="button" className="btn btn-danger" id="delete_button" onClick={() => deleteItem("displayMessage")}>deletar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}