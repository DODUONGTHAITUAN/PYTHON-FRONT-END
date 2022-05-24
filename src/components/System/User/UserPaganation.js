const UserPaganation = (props) => {
    // Get item in props
    const { total_pages, current_page, handleGetAllUsers } = props;

    return (
        <nav aria-label='Page navigation'>
            <ul className='pagination justify-content-center um__pages'>
                <li className='page-item disabled um__pages__prev'>
                    <span
                        className='page-link'
                        tabIndex={-1}
                        aria-disabled='true'
                    >
                        Previous
                    </span>
                </li>
                {total_pages &&
                    total_pages <= 5 &&
                    [...Array(total_pages).keys()].map((item) => (
                        <li
                            className={`page-item ${
                                current_page && current_page === item + 1
                                    ? 'active'
                                    : ''
                            }`}
                            key={item}
                            onClick={() => handleGetAllUsers(item + 1, 1)}
                        >
                            <span className='page-link'>{item + 1}</span>
                        </li>
                    ))}
                <li className='page-item um__pages__next'>
                    <span className='page-link'>Next</span>
                </li>
            </ul>
        </nav>
    );
};

export default UserPaganation;
