


export const deleteItemCancel = ({ set_measurement_selected }) => {

  set_measurement_selected([]);

  document.getElementById('deleteMessage').style.display = 'none';
};
