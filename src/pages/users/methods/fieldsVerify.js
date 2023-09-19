import { checkFields } from '../user'



export const fieldsVerify = (user) => {

    let verifyReturn = true

/*     document.getElementById('error_message_weight').style.display = "none"
    document.getElementById('error_message_maximum').style.display = "none"
    document.getElementById('error_message_minimum').style.display = "none"
    document.getElementById('error_message_heartbeat').style.display = "none" */

    if (checkFields) {

     /*    if (!user.maximum) {

            document.getElementById('error_message_maximum').style.display = "block"
            verifyReturn = false
        }

        if (!user.minimum) {

            document.getElementById('error_message_minimum').style.display = "block"
            verifyReturn = false
        }

        if (!user.heartbeat) {

            document.getElementById('error_message_heartbeat').style.display = "block"
            verifyReturn = false
        } */

        document.getElementById('submit_button').disabled = !verifyReturn
        document.getElementById('delete_button').disabled = !verifyReturn
    }

    return verifyReturn
}
