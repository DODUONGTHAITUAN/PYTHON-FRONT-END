import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import { withRouter } from 'react-router';
import { Button, Col, Row } from 'reactstrap';

import DetailProductInput from '../../components/System/DetailProduct/DetailProductInput';
import DetailProductSelect from '../../components/System/DetailProduct/DetailProductSelect';
import { keyMaps } from '../../utils/constant';
import detailProductService from '../../services/detaiProduct';
import { toast } from 'react-toastify';

const inputs = [
    {
        id: 1,
        className: 'col-6 mb-3',
        key: 'sim_slots',
        placeholder: 'Enter no of sim slot...',
        label: 'Sim Slot',
    },
    {
        id: 2,
        className: 'col-6 mb-3',
        key: 'batteryText',
        placeholder: 'Enter battery parameter...',
        label: 'Battery Text',
    },
    {
        id: 3,
        className: 'col-6 mb-3',
        key: 'screenText',
        placeholder: 'Enter screen parameter...',
        label: 'Screen Text',
    },
];

const createSelects = (params) => {
    return [
        {
            state: 'osID',
            id: 1,
            className: 'col-6 mb-3',
            key: keyMaps.OS,
            label: 'Operating system',
            setState: params.setSelectOs,
        },
        {
            id: 2,
            state: 'batteryID',
            className: 'col-6 mb-3',
            key: keyMaps.BATTERY,
            label: 'Battery Type',
            setState: params.setSelectBattery,
        },
        {
            id: 4,
            state: 'brandID',
            className: 'col-6 mb-3',
            key: keyMaps.BRAND,
            label: 'Brand Type',
            setState: params.setSelectBrand,
        },
        {
            id: 5,
            state: 'featureID',
            className: 'col-6 mb-3',
            key: keyMaps.FEATURE,
            label: 'Feature Type',
            setState: params.setSelectFeature,
        },
        {
            id: 6,
            state: 'screenID',
            className: 'col-6 mb-3',
            key: keyMaps.SCREEN,
            label: 'Screen Type',
            setState: params.setSelectScreen,
        },
    ];
};

const info = {
    contentHTML: '',
    sim_slots: '',
    batteryText: '',
    screenText: '',
    contentMarkdown: '',
};

const DetailProduct = (props) => {
    const { match } = props;
    // Selected
    const [selectedOs, setSelectOs] = useState({});
    const [selectedBattery, setSelectBattery] = useState({});
    const [selectedBrand, setSelectBrand] = useState({});
    const [selectedFeature, setSelectFeature] = useState({});
    const [selectedScreen, setSelectScreen] = useState({});
    const [selects, setSelects] = useState([]);
    const [detail, setDetail] = useState(() => ({
        ...info,
    }));
    const [dataFromDb, setDataFromDB] = useState({});

    useEffect(() => {
        const group = {
            setSelectBrand,
            setSelectBattery,
            setSelectOs,
            setSelectFeature,
            setSelectScreen,
        };
        setSelects(createSelects(group));
    }, []);

    useEffect(() => {
        // Call API get data detail product
        const getData = async () => {
            const id = match?.params?.id || 1;
            handleGetDataFromDB(id);
        };
        getData();
    }, [match]);

    const handleClearData = () => {
        setDetail({
            ...info,
        });
        setSelectBattery({});
        setSelectBrand({});
        setSelectFeature({});
        setSelectScreen({});
    };

    const handleSetDetail = (key, value) => {
        setDetail((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const mapStateToDetailProduct = () => {
        return {
            ...detail,
            osID: selectedOs.value || 'OS1',
            batteryID: selectedBattery.value || 'BAT1',
            featureID: selectedFeature.value || 'FEA1',
            brandID: selectedBrand.value || 'BR1',
            screenID: selectedScreen.value || 'SCR1',
            productID: match?.params?.id || 1,
        };
    };

    const handleSaveInfo = async () => {
        const data = mapStateToDetailProduct();
        const res = await detailProductService.createOrUpdate(data);
        if (res.data?.code === 0) {
            toast.success('Detail Product has changed!!!');
        } else {
            toast.error('Detail Product update failure!!!');
        }
    };
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text);
        setDetail((prev) => ({
            ...prev,
            contentHTML: html,
            contentMarkdown: text,
        }));
    };

    const handleGetDataFromDB = async (id) => {
        const res = await detailProductService.getData(id);
        console.log(res);
        if (res.data?.code === 0) {
            const data = res.data.detail_product;
            setDetail((prev) => ({
                ...prev,
                contentHTML: data.contentHTML,
                contentMarkdown: data.contentMarkdown,
                batteryText: data.batteryText,
                screenText: data.screenText,
                sim_slots: data.simSlots,
            }));
            setDataFromDB(data);
        }
    };

    return (
        <div className='dp'>
            <div
                className='dp__container container'
                style={{ marginBottom: 100 }}
            >
                <Row className='mt-4'>
                    <h2 className='text-center fw-bold text-uppercase'>
                        detail product
                    </h2>
                </Row>
                <Row className='mt-4'>
                    {inputs.map((item) => (
                        <DetailProductInput
                            item={item}
                            key={item.id}
                            handleSetDetail={handleSetDetail}
                            detail={detail}
                        />
                    ))}
                    {selects &&
                        selects.map((item) => (
                            <DetailProductSelect
                                item={item}
                                key={item.id}
                                dataFromDb={dataFromDb}
                            />
                        ))}
                </Row>
                <Row>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                        value={detail.contentMarkdown}
                    />
                </Row>
                <Row className='my-4'>
                    <Col className='col-12'>
                        <Button
                            className='btn btn-primary'
                            onClick={handleSaveInfo}
                        >
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default withRouter(DetailProduct);
