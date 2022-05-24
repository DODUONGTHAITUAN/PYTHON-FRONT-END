const OptionItem = (props) => {
    const { item, setToggleModal, setOption, handleDeleteOption } = props;

    const handleUpdateAction = () => {
        setToggleModal(true);
        setOption(item);
    };

    return (
        <tr key={item?.id} style={{ fontSize: 16 }}>
            <th scope='row'>{item?.id}</th>
            <td>{item?.ram}</td>
            <td>{item?.rom}</td>
            <td>{item?.price}</td>
            <td>
                <div className='op__actions d-flex algin-items-end gap-4'>
                    <i
                        style={{ cursor: 'pointer' }}
                        className='far fa-edit'
                        onClick={handleUpdateAction}
                    ></i>
                    <i
                        style={{ cursor: 'pointer' }}
                        className='far fa-trash-alt'
                        onClick={() => handleDeleteOption(item?.id)}
                    ></i>
                </div>
            </td>
        </tr>
    );
};

export default OptionItem;
