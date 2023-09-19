import { checkFields } from '../dailyMeasurement'



export const fieldsVerify = (measurement) => {

    let verifyReturn = true

    document.getElementById('error_message_weight').style.display = "none"
    document.getElementById('error_message_maximum').style.display = "none"
    document.getElementById('error_message_minimum').style.display = "none"
    document.getElementById('error_message_heartbeat').style.display = "none"

    if (checkFields) {

        if (!measurement.maximum) {

            document.getElementById('error_message_maximum').style.display = "block"
            verifyReturn = false
        }

        if (!measurement.minimum) {

            document.getElementById('error_message_minimum').style.display = "block"
            verifyReturn = false
        }

        if (!measurement.heartbeat) {

            document.getElementById('error_message_heartbeat').style.display = "block"
            verifyReturn = false
        }

        document.getElementById('submit_button').disabled = !verifyReturn
        document.getElementById('delete_button').disabled = !verifyReturn
    }

    return verifyReturn
}
