import { useState } from 'react';
import { withRouter } from 'react-router';
import ProfileUser from '../../components/System/User/ProfileUser';
import SecurityAccount from '../../components/System/User/SecurityAccount';
import { types } from '../../utils/constant';

const tabs = [
    {
        id: 1,
        title: 'Profile',
    },
    {
        id: 2,
        title: 'Security',
    },
];

const detailUserComponent = 1;

const DetailUser = (props) => {
    const { history, match } = props;
    const [tab, setTab] = useState(detailUserComponent);
    const { type, id } = match?.params && match.params;

    // Handle return UserManage page
    const handleRedirectUserManage = () => {
        history?.push && history.push('/system/user-manage');
    };
    return (
        <div className='du'>
            <div className='du__container container'>
                <div className='container-xl px-4 mt-4'>
                    {/* Account page navigation*/}
                    <nav>
                        <ul className='Tabs'>
                            {tabs.map((item) => {
                                return (
                                    <li
                                        className={`Tabs__tab  Tab ${
                                            tab === item.id ? 'active' : ''
                                        }`}
                                        hidden={
                                            type === types.NEW && item.id === 2
                                        }
                                        key={item.id}
                                        onClick={() => setTab(item.id)}
                                    >
                                        <span>{item.title}</span>
                                    </li>
                                );
                            })}
                            <li
                                className='Tabs__presentation-slider'
                                role='presentation'
                            />
                        </ul>
                    </nav>
                    <hr className='mt-0 mb-4' />
                    {tab === detailUserComponent ? (
                        <ProfileUser type={type} id={id} />
                    ) : (
                        <SecurityAccount />
                    )}
                    <div className='du__return'>
                        <button
                            className='btn btn-primary'
                            onClick={() => handleRedirectUserManage()}
                        >
                            <i className='far fa-arrow-alt-circle-left'></i>
                            <span>Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(DetailUser);
