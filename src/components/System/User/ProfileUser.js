import { useEffect, useState } from 'react';
import Select from 'react-select';

import { types } from '../../../utils/constant';
import userService from '../../../services/userService';
import Overlay from '../../Customs/Overlay';
import { withRouter } from 'react-router';

const genders = [
    { value: 'GEN1', label: 'Male' },
    { value: 'GEN2', label: 'Female' },
    { value: 'GEN3', label: 'Other' },
];

const roles = [
    { value: 'RO1', label: 'Admin' },
    { value: 'RO2', label: 'Customer' },
];

const ProfileUser = (props) => {
    const { type, id } = props;

    //  Define state
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [selectedGenderID, setSelectedGengerID] = useState(genders[0]);
    const [selectedRoleID, setSelectedRoleID] = useState(roles[0]);
    // Control overlay
    const [isOpenModal, setOpenModal] = useState(false);

    const handleGetInfoUser = async (id) => {
        const response = await userService.getUserByID(id);
        if (response.data?.code === 0) {
            const { user } = response.data;
            setFullName(user.fullName);
            setAddress(user.address);
            setEmail(user.email);
            setPhonenumber(user.phonenumber);
            const gender = genders.find((item) => item.value === user.genderID);
            const role = roles.find((item) => item.value === user.roleID);
            setSelectedGengerID(gender);
            setSelectedRoleID(role);
        }
    };

    // useEffect with empty array === componentDidMount
    useEffect(() => {
        if (id >= 0) {
            handleGetInfoUser(id);
        }
    }, []);

    // Toggle overlay Loading
    const handleToggleModal = () => {
        setOpenModal(!isOpenModal);
    };

    // Handle save changes profile
    const handleSaveChangesProfile = async () => {
        // Verify data
        if (type === types.NEW) {
            if (!password) {
                return;
            }
        }
        if (!fullName || !address || !email || !phonenumber) {
            return;
        }

        // Waiting save data to database
        // Make data
        let data = {
            fullName,
            address,
            email,
            phonenumber,
            password,
            genderID: selectedGenderID.value,
            roleID: selectedRoleID.value,
        };

        // Open loading ....
        setOpenModal(true);

        let res = {};
        if (type === types.NEW) {
            console.log('Hello');
            // Call API
            res = await userService.createNewUser(data);

            // Check success close loading
        } else {
            data = { ...data, id };
            res = await userService.updateUserById(data);
        }
        if (res.data?.code === 0) {
            setTimeout(() => {
                setOpenModal(false);
                const { history } = props;
                history?.push && history.push('/system/user-manage');
            }, 1000);
        }
    };

    return (
        <div className='row pu align-items-stretch'>
            <div className='col-xl-4'>
                {/* Profile picture card*/}
                <div className='card mb-4 mb-xl-0'>
                    <div className='card-header'>Profile Picture</div>
                    <div className='card-body text-center'>
                        {/* Profile picture image*/}
                        <img
                            className='img-account-profile rounded-circle mb-2'
                            src='http://bootdey.com/img/Content/avatar/avatar1.png'
                            alt='avt'
                        />
                        {/* Profile picture help block*/}
                        <div className='small font-italic text-muted mb-4'>
                            JPG or PNG no larger than 5 MB
                        </div>
                        {/* Profile picture upload button*/}
                        <button
                            disabled={type === types.VIEW}
                            className='btn btn-primary'
                            style={{ padding: '0 10px' }}
                            type='button'
                        >
                            Upload new image
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-xl-8'>
                {/* Account details card*/}
                <div className='card mb-4'>
                    <div className='card-header'>Account Details</div>
                    <div className='card-body'>
                        <form>
                            {/* Form Group (username)*/}
                            <div className='mb-3'>
                                <label
                                    className='small mb-1'
                                    htmlFor='fullName'
                                >
                                    Username (how your name will appear to other
                                    users on the site)
                                </label>
                                <input
                                    className='form-control'
                                    id='fullName'
                                    type='text'
                                    placeholder='Enter your full name...'
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    disabled={type === types.VIEW}
                                />
                            </div>
                            {/* Form Row*/}
                            <div className='row gx-3 mb-3'>
                                {/* Form Group (first name)*/}
                                <div className='col-md-6'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='inputFirstName'
                                    >
                                        Gender
                                    </label>
                                    <Select
                                        options={genders}
                                        value={selectedGenderID}
                                        defaultValue={selectedGenderID}
                                        onChange={setSelectedGengerID}
                                        isDisabled={type === types.VIEW}
                                    />
                                </div>
                                {/* Form Group (last name)*/}
                                <div className='col-md-6'>
                                    <label className='small mb-1' htmlFor='bio'>
                                        Bio
                                    </label>
                                    <input
                                        className='form-control'
                                        id='bio'
                                        type='text'
                                        placeholder='Enter your bio...'
                                        disabled={type === types.VIEW}
                                        defaultValue='Love pink color'
                                    />
                                </div>
                            </div>
                            {/* Form Row        */}
                            <div className='row gx-3 mb-3'>
                                {/* Form Group (organization name)*/}
                                <div className='col-md-6'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='inputOrgName'
                                    >
                                        Organization name
                                    </label>
                                    <input
                                        defaultValue='Fpt Software'
                                        className='form-control'
                                        id='inputOrgName'
                                        type='text'
                                        placeholder='Enter your organization name'
                                        disabled={type === types.VIEW}
                                    />
                                </div>
                                {/* Form Group (location)*/}
                                <div className='col-md-6'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='address'
                                    >
                                        Location
                                    </label>
                                    <input
                                        className='form-control'
                                        id='address'
                                        type='text'
                                        placeholder='Enter your location...'
                                        disabled={type === types.VIEW}
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            {/* Form Group (email address)*/}
                            <div className='mb-3'>
                                <label className='small mb-1' htmlFor='email'>
                                    Email address
                                </label>
                                <input
                                    className='form-control'
                                    id='email'
                                    type='email'
                                    placeholder='Enter your email address'
                                    disabled={type === types.VIEW}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {type === types.NEW && (
                                <div className='mb-3'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='password'
                                    >
                                        Password
                                    </label>
                                    <input
                                        name={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className='form-control'
                                        id='password'
                                        type='password'
                                        placeholder='Enter your password...'
                                        disabled={type === types.VIEW}
                                    />
                                </div>
                            )}
                            {/* Form Row*/}
                            <div className='row gx-3 mb-3'>
                                {/* Form Group (phone number)*/}
                                <div className='col-md-6'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='phonenumber'
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        value={phonenumber}
                                        onChange={(e) =>
                                            setPhonenumber(e.target.value)
                                        }
                                        className='form-control'
                                        id='phonenumber'
                                        type='tel'
                                        placeholder='Enter your phone number...'
                                        disabled={type === types.VIEW}
                                    />
                                </div>
                                {/* Form Group (birthday)*/}
                                <div className='col-md-6'>
                                    <label
                                        className='small mb-1'
                                        htmlFor='roleID'
                                    >
                                        Role
                                    </label>
                                    <Select
                                        value={selectedRoleID}
                                        options={roles}
                                        onChange={setSelectedRoleID}
                                        defaultValue={selectedRoleID}
                                        isDisabled={type === types.VIEW}
                                    />
                                </div>
                            </div>
                            {/* Save changes button*/}
                            <button
                                className='btn btn-primary pu__btn'
                                type='button'
                                disabled={type === types.VIEW}
                                onClick={() => handleSaveChangesProfile()}
                            >
                                Save changes
                            </button>
                        </form>
                        <Overlay
                            isOpenModal={isOpenModal}
                            handleToggleModal={handleToggleModal}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ProfileUser);
