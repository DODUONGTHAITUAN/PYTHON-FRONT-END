import { types } from '../../../utils/constant';

const UserItem = (props) => {
    const { item, handleActionsDetailUser, handleDeleteUser } = props;

    return (
        <tr>
            <th scope='row'>{item.id}</th>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.role_value}</td>
            <td className='um__table__actions'>
                <i
                    className='far fa-user'
                    onClick={() => handleActionsDetailUser(item.id, types.VIEW)}
                ></i>
                <i
                    className='far fa-edit'
                    onClick={() => handleActionsDetailUser(item.id, types.EDIT)}
                ></i>
                <i
                    className='far fa-trash-alt'
                    onClick={() => handleDeleteUser(item.id)}
                ></i>
            </td>
        </tr>
    );
};

export default UserItem;
