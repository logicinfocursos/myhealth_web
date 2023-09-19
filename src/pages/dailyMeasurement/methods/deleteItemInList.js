import { apiDELETE } from '../../../services/api';




export const deleteItemInList = async ({ measurement_selected, set_measurement_selected, measurements, set_measurements }) => {

  const response = await apiDELETE({ table: 'measurements', id: measurement_selected.id });

  if (response) {
    const _measurements = measurements.filter((m) => m.id != measurement_selected.id);

    set_measurements(_measurements);

    set_measurement_selected([]);
  }

  document.getElementById('deleteMessage').style.display = 'none';
};
