import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useSetLocale, useLocale } from 'react-admin'
import "./FlagsSelector.css";

const convert = (item) => {
    if (item === "GB") return "en"
    else if (item === "IT") return "it"
    else if (item === "en") return "GB"
    else if (item === "it") return "IT"
}

const FlagsSelector = () => {
    const setLocale = useSetLocale();
    const locale = useLocale();
    const localeConverted = convert(locale)
    return (
        <div style={{ position: 'absolute', right: '130px', color: 'black'}}>
            <ReactFlagsSelect
                countries={["IT", "GB"]}
                selected={localeConverted}
                showSelectedLabel={true}
                onSelect={code => { setLocale(convert(code)) }}
                className="menu-flags"
            />
        </div>
    );
};

export default FlagsSelector