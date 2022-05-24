import { withRouter } from 'react-router';
import productService from '../../../services/productService';

const ul = [
    {
        id: 1,
        title: 'Update General Product',
    },
    {
        id: 2,
        title: 'Update Detail Product',
    },
    {
        id: 3,
        title: 'Update Options',
    },
    {
        id: 4,
        title: 'View',
    },
    {
        id: 5,
        title: 'Delete',
    },
];

const DropdownOption = (props) => {
    const { history, match, id, handleDeleteProduct } = props;
    const handleUpdateProduct = () => {
        const url = match?.url ? `${match.url}/detail-product/${id}` : '';
        history?.push && history.push(url);
    };

    const handlUpdateOptions = () => {
        const url = match?.url ? `${match.url}/update-options/${id}` : '';
        history?.push && history.push(url);
    };

    const handleGetActions = (actionId) => {
        switch (actionId) {
            case 2:
                handleUpdateProduct();
                break;
            case 3:
                handlUpdateOptions();
                break;

            case 5:
                handleDeleteProduct(id);
                break;
            default:
                break;
        }
    };
    return (
        <div className='dropdown-container' tabIndex={-1}>
            <div className='fas fa-ellipsis-v three-dots'></div>
            <div className='dropdown'>
                {ul.map((item) => (
                    <span
                        key={item.id}
                        onClick={() => handleGetActions(item.id)}
                    >
                        <div>{item.title}</div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default withRouter(DropdownOption);
