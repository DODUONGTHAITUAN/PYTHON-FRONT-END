import { useState } from 'react';

const totalPages = 10;
const Pagination = () => {
    const [page, setPage] = useState(1);
    return (
        <div className='pagination__container'>
            <ul className='page'>
                <li className='page__btn'>
                    <i className='fas fa-angle-left'></i>
                </li>
                {totalPages < 6 ? (
                    [...Array(totalPages).keys()].map((item) => (
                        <li className='page__numbers' key={item}>
                            {item}
                        </li>
                    ))
                ) : (
                    <>
                        {[...Array(4).keys()].map((item) => (
                            <li className='page__numbers' key={item}>
                                {item}
                            </li>
                        ))}
                        <li className='page__dots'>...</li>
                        {[...Array(2).keys()].map((item) => (
                            <li className='page__numbers' key={item}>
                                {totalPages - item}
                            </li>
                        ))}
                    </>
                )}
                {/* <li className='page__numbers'> 1</li>
                <li className='page__numbers active'>2</li>
                <li className='page__numbers'>3</li>
                <li className='page__numbers'>4</li>
                <li className='page__numbers'>5</li>
                <li className='page__dots'>...</li>
                <li className='page__numbers'>9</li>
                <li className='page__numbers'> 10</li> */}
                <li className='page__btn'>
                    <i className='fas fa-angle-right'></i>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
