import { getDateTime, getCode } from '../../../functions'
import { fieldsVerify, updateData, addData } from './'



export const submitForm = async (event, measurement, set_measurement) => {

    event.preventDefault()

    if (fieldsVerify(measurement)) {

        const _measurement = {
            code: measurement.code ? measurement.code : getCode(5),
            weight: measurement.weight ? parseFloat(measurement.weight).toFixed(2) : 0,
            maximum: measurement.maximum ? parseInt(measurement.maximum) : 0,
            minimum: measurement.minimum ? parseInt(measurement.minimum) : 0,
            heartbeat: measurement.heartbeat ? parseInt(measurement.heartbeat) : 0,
            comments: measurement.comments ?? "",
            userCode: 1,
            status: 1,

            //  measurement_at: measurement.id && measurement.measurement_at ? measurement.measurement_at : getDateTime(),
            created_at: getDateTime(),
            updated_at: getDateTime(),
        }

        if (measurement.id) {
            _measurement.id = measurement.id
            updateData({ table: 'measurements', objetctToUpdate: _measurement })
            set_measurement(_measurement)

        } else addData({ table: 'measurements', objToAdd: _measurement, set_measurement: set_measurement, measurement: measurement })
    }
}
