import React from 'react';
import {Button, Select} from "antd";
import {useConfigContext} from "../context/ConfigContextProvider";
import {BgColorsOutlined} from "@ant-design/icons";


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
    const configContext = useConfigContext();

    return (
        <div style={{height: '140px', width: '100vw', marginTop: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Select
                style={{marginLeft: '12px', width: '10vw'}}
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
            <div>
                <Button
                    style={{marginRight: '12px'}}
                    icon={configContext.config.currentTheme === 'dark' ? <BgColorsOutlined color={"#b86ad5"}/> : <BgColorsOutlined color={"#b86ad5"}/>}
                    onClick={()=>configContext.setConfig({currentTheme: configContext.config.currentTheme === 'dark' ? 'light' : 'dark'})}
                />
                <Button style={{marginRight: '12px', width: '7vw'}}>Войти</Button>
            </div>
        </div>
    );
};

export default Header;