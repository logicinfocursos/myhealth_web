import { MyLink } from '../../../components';
import alert_danger from '../../../assets/images/elements/dialogBallon_danger.png';
import alert_warning from '../../../assets/images/elements/dialogBallon_warning.png';
import alert_ok from '../../../assets/images/elements/dialogBallon_ok.png';
import { deleteItemConfirm } from './deleteItemConfirm';




export const ListMeasurementsItem = ({ item, set_measurement_selected }) => {

  const _link = `/dailyMeasurement/${item.code}`;
  const { code, measurement_at, maximum, minimum, heartbeat, weight } = item;

  let img_status;

  if (parseInt(maximum) < 135 && parseInt(minimum) < 85) img_status = alert_ok;
  else if (parseInt(maximum) <= 150 || parseInt(minimum) < 101) img_status = alert_warning;
  else if (parseInt(maximum) > 150 || parseInt(minimum) > 100) img_status = alert_danger;



  return (
    <tr>
      <td><MyLink link={_link}>{<img src={img_status} width={30} height={30} />}</MyLink></td>
      <td><MyLink link={_link}>{code}</MyLink></td>
      <td><MyLink link={_link}>{measurement_at && measurement_at.substring(5, 10)}</MyLink></td>
      <td><MyLink link={_link}>{maximum}</MyLink></td>
      <td><MyLink link={_link}>{minimum}</MyLink></td>
      <td><MyLink link={_link}>{heartbeat}</MyLink></td>
      <td><MyLink link={_link}>{new Intl.NumberFormat('pt-BR', { style: "decimal", maximumSignificantDigits: 2 }).format(weight)}</MyLink></td>
      <td>
        <a href={_link} className='btn btn-primary btn-sm me-1'>editar</a>
        <button className='btn btn-danger btn-sm' onClick={() => deleteItemConfirm({ item: item, set_measurement_selected: set_measurement_selected })}>del</button>

      </td>
    </tr>
  );
};
