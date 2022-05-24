import { useState, useEffect } from 'react';

import SideBarItem from './SideBarItem';
import allcodeService from '../../../services/allcodesService';
import { keyMaps } from '../../../utils/constant';

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    const handleGetCategories = async () => {
        try {
            const data = await allcodeService.getAllcodeByType(keyMaps.BRAND);
            if (data.data?.code === 0) {
                setCategories(data.data.allcodes);
            }
        } catch (e) {
            console.log(e);
            return;
        }
    };

    useEffect(() => {
        // Call API
        handleGetCategories();
    }, []);

    return (
        <div className='sidebar'>
            <div className='si__title'>
                <span>Hãng Sản Xuất</span>
            </div>
            {categories.map((item, index) => (
                <SideBarItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default SideBar;
