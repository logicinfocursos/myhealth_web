import { deleteItem } from './deleteItem'



export const DeleteMessageAlert = ({ measurement }) => {

    if (document.getElementById('deleteButtonInAlert')) {
        document.getElementById('deleteButtonInAlert').focus()
    }

    return (
        <div className="alert alert-danger mb-3 mt-3" role="alert" style={{ display: "none" }} id="deleteMessage">
            <h4 className="alert-heading">excluir registro #{measurement.code}</h4>
            <p>esse item será excluído, confirma?</p>
            <hr />
            <button type="button" className="btn btn-dark me-2" onClick={() => deleteItem('quit')} >desistir</button>
            <button type="button" className="btn btn-danger" onClick={() => deleteItem('delete', measurement.id)} id='deleteButtonInAlert'>excluir</button>
        </div>
    )
}
