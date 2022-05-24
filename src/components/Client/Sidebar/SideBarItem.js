const SideBarItem = ({ item }) => {
    return (
        <div className='si__list__item'>
            <input type='checkbox' id={item.keyMap} />
            <label htmlFor={item.keyMap}>{item.value}</label>
        </div>
    );
};

export default SideBarItem;
