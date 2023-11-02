import React, {createContext, useContext, useState} from 'react';

export type ConfigType = {
    currentTheme: 'dark' | 'light'
}
type ConfigContextProviderProps = {
    children: React.ReactNode
}
type ConfigContextType = {
    config: ConfigType;
    setConfig: React.Dispatch<React.SetStateAction<ConfigType>>
}
const ConfigContext = createContext({} as ConfigContextType)
export const useConfigContext = () =>  useContext(ConfigContext);
export const defaultConfig: ConfigType = {
    currentTheme: "dark"
}
const ConfigContextProvider = ({children}: ConfigContextProviderProps) => {
    const [config,setConfig] = useState<ConfigType>(defaultConfig);

    return (
        <ConfigContext.Provider value={{config,setConfig}}>{children}</ConfigContext.Provider>
    );
};
export default ConfigContextProvider;