import { ListUsersItem } from './ListUsersItem'




export const ListUsers= ({ users, set_users, set_user_selected }) => {



  if (!users || users.length < 1) return <></>;



  return (

    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>code</th>
            <th>name</th>
           
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((item, key) => {
            return (

              <ListUsersItem key={key} item={item} users={users} set_users={set_users} set_user_selected={set_user_selected} />

            )
          })}
        </tbody>
      </table>
    </>
  )
}
