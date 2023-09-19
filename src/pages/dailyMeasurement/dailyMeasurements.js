import { useState, useEffect, useContext } from 'react'

import { apiGET } from '../../services/api'
import { AuthContext } from '../../contexts/auth'
import { Navbar, Breadcrumb } from '../../components'
import { ListMeasurements, deleteItemInList, deleteItemCancel } from './methods'
import './index.styles.css'



export default function DailyMeasurements() {

  const { user } = useContext(AuthContext)
  const [measurements, set_measurements] = useState([])
  const [measurement_selected, set_measurement_selected] = useState([])



  const fetchdata = async () => {

    const response = await apiGET({ table: 'measurements' })

    set_measurements(response)
  }



  useEffect(() => {

    fetchdata()

  }, [])



  if (!measurements) return <></>



  return (

    <div className="container" style={{ marginTop: 200 }}>

      <Navbar />

      <Breadcrumb
        title="medições"
      />

      <a href={`/dailyMeasurement/add`} className="btn btn-secondary mb-2"><i className="fas fa-plus mr-3"></i>  criar um registro</a>

      <div className="alert alert-danger" role="alert" id="deleteMessage" style={{ display: 'none' }}>
        <h4 className="alert-heading">excluir registro #{measurement_selected.code}</h4>
        <p>esse item será excluído, confirma?</p>
        <hr />
        <p className="mb-0">
          <button className='btn btn-secondary btn-sm me-2' onClick={() => deleteItemCancel({ set_measurement_selected })}>desistir</button>
          <button className='btn btn-danger btn-sm' onClick={() => deleteItemInList({ measurement_selected: measurement_selected, set_measurement_selected: set_measurement_selected, measurements: measurements, set_measurements: set_measurements })}>excluir</button>
        </p>
      </div> 

      <ListMeasurements measurements={measurements} set_measurements={set_measurements} set_measurement_selected={set_measurement_selected} />

    </div>
  )
}