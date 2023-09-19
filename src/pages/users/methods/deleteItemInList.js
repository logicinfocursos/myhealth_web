import { apiDELETE } from '../../../services/api';




export const deleteItemInList = async ({ user_selected, set_user_selected, users, set_users }) => {

  const response = await apiDELETE({ table: 'users', id: user_selected.id });

  if (response) {
    const _users = users.filter((m) => m.id != user_selected.id);

    set_users(_users);

    set_user_selected([]);
  }

  document.getElementById('deleteMessage').style.display = 'none';
};
