import React from 'react';
import {Select} from "antd";


type HeaderProps = {
    onChangeGroup: (id: number) => void
}
const Header: React.FC<HeaderProps> = ({onChangeGroup}) => {

    const onChange = (value: string) => {
        onChangeGroup((Number(value)));
    };

    const onSearch = (value: string) => {

    };
    const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    return (
        <div style={{height: '160px', width: '100vw'}}>
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                    {
                        value: 'jack',
                        label: 'Jack',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                    {
                        value: 'tom',
                        label: 'Tom',
                    },
                ]}
            />
        </div>
    );
};

export default Header;