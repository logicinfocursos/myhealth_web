


export const deleteItemConfirm = ({ item, set_user_selected }) => {

  document.getElementById('deleteMessage').style.display = 'block';

  set_user_selected(item);
};
