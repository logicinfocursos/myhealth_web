import { getDateTime, getCode } from '../../../functions'
import { fieldsVerify, updateData, addData } from './'



export const submitForm = async (event, user, set_user) => {

    event.preventDefault()

    if (fieldsVerify(user)) {

        const _user = {
            code: user.code ? user.code : getCode(5),
            name: user.name ?? "",
            birthdate: user.birthdate ?? "",
            height: user.height ?? "",
            email: user.email ?? "",
            status: 1,

            created_at: getDateTime(),
            updated_at: getDateTime(),
        }

        if (user.id) {
            _user.id = user.id
            updateData({ table: 'users', objetctToUpdate: _user })
            set_user(_user)

        } else addData({ table: 'users', objToAdd: _user, set_user: set_user, user: user })
    }
}
