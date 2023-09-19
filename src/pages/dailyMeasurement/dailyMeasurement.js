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
    const [measurement, set_measurement] = useState([])
    const { id } = useParams()
    const operation = id == 'add' ? 'add' : 'edit'
    // _user = user



    const fetchdata = async () => {

        const response = await apiGET({ table: 'measurements', searchID: id, searchField: 'code' })

        set_measurement(response[0])
    }



    useEffect(() => {

        if (operation !== 'add') fetchdata()

    }, [])



    return (

        <div className="container" style={{ marginTop: 200 }}>

            <Navbar />

            <Breadcrumb
                title={`medição (${operation == "add" ? "novo" : "editar"})`}
                previewPage="medições"
                previewPageLink="dailyMeasurements"
            />

            {
                operation !== "add" &&
                    <a href={`/dailyMeasurement/add`} className="btn btn-secondary" id="add_button"><i className="fas fa-plus"></i>  criar um registro</a>                    
            }

            <DeleteMessageAlert
                measurement={measurement}
                deleteItem={deleteItem}
            />

            <div className="card mt-5 mb-5">

                <div className="card-header">
                    pressão / peso  {measurement.id ? '(# ' + measurement.code + ")" : ''}
                </div>

                <form className="row p-3" id="Form" onChange={() => fieldsVerify(measurement)}>

                    <div className="mb-3 col-md-6">
                        <label htmlFor="maximum" className="form-label">pressão arterial sistólica</label>
                        <input type="text" className="form-control" id="maximum" placeholder="máxima" defaultValue={measurement.maximum} onChange={(event) => set_measurement({ ...measurement, maximum: event.target.value })} />
                        <small id="error_message_maximum" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher a [máxima]! ***</small>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="minimum" className="form-label">pressão arterial diastólica</label>
                        <input type="text" className="form-control" id="minimum" placeholder="minima" defaultValue={measurement.minimum} onChange={(event) => set_measurement({ ...measurement, minimum: event.target.value })} />
                        <small id="error_message_minimum" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher a [minima]! ***</small>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="heartbeat" className="form-label">nº de batimentos</label>
                        <input type="text" className="form-control" id="heartbeat" placeholder="batimentos" defaultValue={measurement.heartbeat} onChange={(event) => set_measurement({ ...measurement, heartbeat: event.target.value })} />
                        <small id="error_message_heartbeat" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher o número de [batimentos]! ***</small>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="measurement_at" className="form-label">data / hora medição (formato: aaaa/mm/dd 99:99:99)</label>
                        <input type="text" className="form-control" id="measurement_at" placeholder="data e hora" defaultValue={measurement.measurement_at} onChange={(event) => set_measurement({ ...measurement, measurement_at: event.target.value })} />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="weight" className="form-label">peso</label>
                        <input type="text" className="form-control" id="weight" placeholder="peso" defaultValue={measurement.weight} onChange={(event) => set_measurement({ ...measurement, weight: event.target.value })} />
                        <small id="error_message_weight" className='text-danger' style={{ display: 'none' }}>*** é necessário preencher o [peso]! ***</small>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="comments" className="form-label">comentários</label>
                        <textarea type="text" className="form-control" id="comments" placeholder="comentários" defaultValue={measurement.comments} onChange={(event) => set_measurement({ ...measurement, comments: event.target.value })} rows={3} />
                    </div>

                    <div className="mb-3 col-md-12 mt-5">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={(event) => submitForm(event, measurement, set_measurement)} id="submit_button">salvar</button>
                            <button type="button" className="btn btn-danger" id="delete_button" onClick={() => deleteItem("displayMessage")}>deletar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}