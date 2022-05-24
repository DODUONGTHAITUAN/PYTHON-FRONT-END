import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import allcodeService from '../../../services/allcodesService';
import CommonUtils from '../../../utils/CommonUtils';
import { keyMaps } from '../../../utils/constant';

const inputs = [
    {
        id: 1,
        name: 'ram',
        placeholder: 'Enter ram parameter...',
    },
    {
        id: 2,
        name: 'rom',
        placeholder: 'Enter rom parameter...',
    },
    {
        id: 3,
        name: 'price',
        placeholder: 'Enter price product...',
    },
    {
        id: 4,
        name: 'image',
        placeholder: 'Enter image link...',
    },
];

const OptionForm = (props) => {
    const { option, setOption } = props;
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState({});

    const handleChangeOption = (label, value) => {
        setOption((prev) => ({
            ...prev,
            [label]: value,
        }));
    };

    const handleGetColors = async () => {
        const res = await allcodeService.getAllcodeByType(keyMaps.COLOR);
        if (res.data?.code === 0) {
            const options = CommonUtils.formatAllcodesToSelectOption(
                res.data.allcodes
            );
            setColors(options);
            setColor(options.find((i) => i.value === option.colorID));
        }
    };

    const handleSetColor = (color) => {
        setColor(color);
        setOption((prev) => ({
            ...prev,
            colorID: color.value,
        }));
    };

    useEffect(() => {
        handleGetColors();
    }, [option]);
    return (
        <Form>
            {inputs.map((item) => (
                <FormGroup className='mb-2' key={item.id}>
                    <Label for={item.name}>
                        {item.name[0].toUpperCase() + item.name.slice(1)}
                    </Label>
                    <Input
                        id={item.name}
                        placeholder={item.placeholder}
                        value={option[item.name]}
                        onChange={(e) =>
                            handleChangeOption(item.name, e.target.value)
                        }
                    />
                </FormGroup>
            ))}
            <FormGroup className='mb-2'>
                <Label for='rom'>Color</Label>
                <Select
                    options={colors}
                    value={color}
                    onChange={(selected) => handleSetColor(selected)}
                />
            </FormGroup>
        </Form>
    );
};

export default OptionForm;
