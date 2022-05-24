import GuideItem from './GuideItem';

const GuideList = () => {
    return (
        <div className='guides pb-4'>
            <div className='guides__content wrapper'>
                <div className='guides__content__heading'>
                    <span>Câu hỏi thường gặp</span>
                </div>
                <div className='guides__content__ques'>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <GuideItem key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuideList;
