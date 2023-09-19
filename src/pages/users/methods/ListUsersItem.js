import { MyLink } from '../../../components';
import alert_danger from '../../../assets/images/elements/dialogBallon_danger.png';
import alert_warning from '../../../assets/images/elements/dialogBallon_warning.png';
import alert_ok from '../../../assets/images/elements/dialogBallon_ok.png';
import { deleteItemConfirm } from './deleteItemConfirm';




export const ListUsersItem = ({ item, set_user_selected }) => {

  const _link = `/user/${item.code}`;
  const { code, name } = item;



  return (
    <tr>
      <td><MyLink link={_link}>{code}</MyLink></td>
      <td><MyLink link={_link}>{name}</MyLink></td>
     
      <td>
        <a href={_link} className='btn btn-primary btn-sm me-1'>editar</a>
        <button className='btn btn-danger btn-sm' onClick={() => deleteItemConfirm({ item: item, set_user_selected: set_user_selected })}>del</button>

      </td>
    </tr>
  );
};
