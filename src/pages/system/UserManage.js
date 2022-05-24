import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Row } from 'reactstrap';

import userService from '../../services/userService';
import Loading from '../../components/Customs/Loading';
import UserList from '../../components/System/User/UserList';
import UserPaganation from '../../components/System/User/UserPaganation';

const UserManage = (props) => {
    const [data, setData] = useState({ users: [] });
    const { users, total_pages, current_page } = data;

    const { history, match } = props;

    const handleGetAllUsers = async (page = 1, per_page = 10) => {
        const data = {
            page: page,
            per_page: per_page,
        };
        const res = await userService.getAllUsers(data);
        if (res.data?.code === 0) {
            setData(res.data.data);
        }
    };

    // Handle get all user from db
    useEffect(() => {
        const timer = setTimeout(() => handleGetAllUsers(1, 1), 3000);

        // Clean up function the same with component_will_unmount
        return () => clearTimeout(timer);
    }, []);

    const handleActionsDetailUser = (id, type) => {
        const URL = match?.path
            ? `${match.path}/profile/${type}/${id}`
            : '/system/user-manage';
        history?.push && history.push(URL);
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await userService.deleteUser(id);
            if (response.data?.code === 0) {
                handleGetAllUsers(1, 1);
            }
        } catch (e) {
            console.log(e);
        }
    };

    // View
    return (
        <>
            {users?.length === 0 ? (
                <Loading width={'10%'} height={'10%'} color={'#0071ba'} />
            ) : (
                <div className='um'>
                    <div className='um__container container'>
                        <div className='um__top'>
                            <Row className='mt-4'>
                                <h2 className='text-center fw-bold text-uppercase'>
                                    user manage
                                </h2>
                            </Row>
                            <Row className='mt-4'>
                                <UserList
                                    users={users}
                                    handleActionsDetailUser={
                                        handleActionsDetailUser
                                    }
                                    handleDeleteUser={handleDeleteUser}
                                />
                            </Row>
                        </div>
                        <div className='um__bottom'>
                            <UserPaganation
                                total_pages={total_pages}
                                current_page={current_page}
                                handleGetAllUsers={handleGetAllUsers}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default withRouter(UserManage);
