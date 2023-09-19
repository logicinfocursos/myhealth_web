


export const deleteItemConfirm = ({ item, set_measurement_selected }) => {

  document.getElementById('deleteMessage').style.display = 'block';

  set_measurement_selected(item);
};
