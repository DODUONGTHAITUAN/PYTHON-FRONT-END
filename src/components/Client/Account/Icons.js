import { account } from '../../../utils/constant';

const Icons = (props) => {
    const { active } = props;
    return (
        <div className='text-center mb-3'>
            <p>
                {active === account.LOGIN || !active ? 'Sign in' : 'Sign up'}{' '}
                with:
            </p>
            <button type='button' className='btn btn-link btn-floating mx-1'>
                <i className='fab fa-facebook-f' />
            </button>
            <button type='button' className='btn btn-link btn-floating mx-1'>
                <i className='fab fa-google' />
            </button>
            <button type='button' className='btn btn-link btn-floating mx-1'>
                <i className='fab fa-twitter' />
            </button>
            <button type='button' className='btn btn-link btn-floating mx-1'>
                <i className='fab fa-github' />
            </button>
        </div>
    );
};

export default Icons;
