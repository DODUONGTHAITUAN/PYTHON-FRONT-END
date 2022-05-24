import { useState } from 'react';
import { withRouter } from 'react-router';
import { MDBInput } from 'mdb-react-ui-kit';

import CommonUtils from '../../../utils/CommonUtils';
import { account } from '../../../utils/constant';
import Icons from './Icons';
import userService from '../../../services/userService';
import Loading from '../../Customs/Loading';
import Overlay from '../../Customs/Overlay';

const inputs = [
    {
        id: 1,
        key: 'fullName',
        label: 'Name',
    },
    {
        id: 4,
        key: 'phonenumber',
        label: 'Phonenumber',
    },
    {
        id: 2,
        key: 'email',
        label: 'Email',
        type: 'email',
    },
    {
        id: 3,
        key: 'password',
        label: 'Password',
        type: 'password',
    },
    {
        id: 5,
        key: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
    },
];

const errMessage = {
    2: 'Email không hợp lệ hoặc đã tồn tại',
    3: 'Xác nhận mật khẩu không khớp',
};

const Register = (props) => {
    const { setTab, active } = props;
    const [error, setError] = useState(false);
    const [isVerify, setVerify] = useState(false);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(() => {
        return {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phonenumber: '',
            address: 'Hanoi',
            genderID: 'GEN1',
            roleID: 'RO2',
            verify: '',
        };
    });

    const handleSetInfo = (value, key) => {
        setInfo({
            ...info,
            [key]: value,
        });
        setError(0);
    };

    //     // After click submit rest hit
    const handleVerifyAccount = async () => {
        try {
            const res = await userService.createNewUser(info);
            console.log(res);
            if (res.data?.code === 0) {
                setTab(account.LOGIN);
            }
        } catch (e) {
            console.log(e);
        }
    };

    // After click submit first hit
    const handleSubmitInfo = async () => {
        const isValid = CommonUtils.handleValidateInfoUser(info);
        if (isValid.code === 0) {
            setLoading(true);
            const res = await userService.handleVerifyEmail(info.email);
            setLoading(false);
            if (res.data?.code === 0) {
                setVerify(true);
            } else {
                // Email exist
                setError(2);
            }
        } else {
            // Confirm password not match
            setError(3);
        }
    };

    return (
        <div
            className={`tab-pane ${
                active === account.REGISTER ? 'active' : ''
            }`}
        >
            <div>
                <Icons active={active} />
                <p className='text-center'>or:</p>
                {!isVerify ? (
                    inputs.map((item) => (
                        <div className='form-outline mb-4' key={item.id}>
                            <MDBInput
                                type={item.type || 'text'}
                                label={item.label}
                                className='py-2'
                                value={info[item.key]}
                                onChange={(e) =>
                                    handleSetInfo(e.target.value, item.key)
                                }
                            />
                        </div>
                    ))
                ) : (
                    <>
                        <span
                            className='d-inline-block fw-lighter'
                            style={{
                                fontSize: 12,
                                transform: 'translateY(-10px)',
                            }}
                        >
                            * Vui lòng kiểm tra email để xác nhận tài khoản
                        </span>
                        <div className='form-outline mb-4'>
                            <MDBInput
                                label='Mã xác nhận'
                                className='py-2'
                                value={info.verify}
                                onChange={(e) =>
                                    handleSetInfo(e.target.value, 'verify')
                                }
                            />
                        </div>
                    </>
                )}
                <span
                    className='d-inline-block fw-lighter'
                    style={{
                        color: 'red',
                        fontSize: 12,
                        transform: 'translateY(-10px)',
                    }}
                >
                    * {errMessage[error]}
                </span>
                {/* 2 column grid layout */}
                <div className='form-check d-flex justify-content-start mb-4'>
                    <input
                        className='form-check-input me-2'
                        type='checkbox'
                        id='registerCheck'
                        defaultChecked
                    />
                    <label className='form-check-label' htmlFor='registerCheck'>
                        I have read and agree to the terms
                    </label>
                </div>
                {/* Submit button */}
                <button
                    onClick={() =>
                        !isVerify ? handleSubmitInfo() : handleVerifyAccount()
                    }
                    className='btn btn-primary btn-block mb-4 '
                    style={{ height: 35 }}
                >
                    {isVerify ? 'Verify' : 'Register'}
                </button>
                {/* Register buttons */}
                <div className='text-center'>
                    <p>
                        Do you have an account?
                        <span
                            onClick={() => setTab(account.LOGIN)}
                            style={{
                                cursor: 'pointer',
                                color: '#0d6efd',
                            }}
                        >
                            {' '}
                            Login
                        </span>
                    </p>
                </div>
            </div>
            <Overlay width={'10%'} height={'10%'} isOpenModal={loading} />
        </div>
    );
};

export default withRouter(Register);
