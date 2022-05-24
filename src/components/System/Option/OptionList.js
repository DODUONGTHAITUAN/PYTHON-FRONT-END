import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import OptionItem from './OptionItem';

const _width = (w) => `${w}%`;

const OptionList = (props) => {
    const { options, setToggleModal, setOption, handleDeleteOption } = props;
    return (
        <MDBTable striped>
            <MDBTableHead>
                <tr style={{ fontSize: 20 }}>
                    <th scope='col' style={{ width: _width(25) }}>
                        Option Id
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Ram
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Rom
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Price
                    </th>
                    <th scope='col' style={{ width: _width(15) }}>
                        Handle
                    </th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {options?.map((item) => {
                    return (
                        <OptionItem
                            handleDeleteOption={handleDeleteOption}
                            key={item.id}
                            item={item}
                            setToggleModal={setToggleModal}
                            setOption={setOption}
                        />
                    );
                })}
            </MDBTableBody>
        </MDBTable>
    );
};

export default OptionList;
