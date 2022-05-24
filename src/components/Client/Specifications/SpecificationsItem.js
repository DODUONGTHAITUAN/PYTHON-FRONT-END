const SpecificationsItem = (props) => {
    const { item } = props;
    return (
        <tr>
            <td>{item.label}</td>
            <td>{item.value}</td>
        </tr>
    );
};

export default SpecificationsItem;
