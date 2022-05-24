import UserItem from './UserItem';
import { types } from '../../../utils/constant';

const getStyle = (width) => {
    return {
        width: `${width}%`,
        textAlign: 'center',
    };
};

const ths = [
    {
        id: 1,
        label: 'ID',
        width: 5,
    },
    {
        id: 2,
        label: 'Full Namwe',
        width: 25,
    },
    {
        id: 3,
        label: 'Email',
        width: 30,
    },
    {
        id: 4,
        label: 'Role',
        width: 15,
    },
    {
        id: 5,
        label: 'Handles',
        width: 20,
    },
];

const UserList = (props) => {
    const { users, handleActionsDetailUser, handleDeleteUser } = props;
    return (
        <table className='table table-bordered table-striped table-hover'>
            <thead>
                <tr>
                    {ths.map((item) => (
                        <th
                            scope='col'
                            style={getStyle(item.width)}
                            key={item.id}
                        >
                            {item.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {users?.length > 0 &&
                    users.map((item) => {
                        return (
                            <UserItem
                                item={item}
                                key={item.id}
                                handleDeleteUser={handleDeleteUser}
                                handleActionsDetailUser={
                                    handleActionsDetailUser
                                }
                            />
                        );
                    })}
                <tr>
                    <th scope='row'>?</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='um__table__actions'>
                        <i
                            className='fas fa-user-plus'
                            onClick={() =>
                                handleActionsDetailUser(-1, types.NEW)
                            }
                        ></i>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default UserList;
