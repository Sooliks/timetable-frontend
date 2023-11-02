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
        <div style={{height: '160px', width: '100vw', marginTop: '12px'}}>
            <Select
                style={{marginLeft: '12px'}}
                showSearch
                placeholder="Выберите группу"
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
                notFoundContent={"Не найдено"}
            />
        </div>
    );
};

export default Header;