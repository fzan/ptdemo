import * as React from "react"
import { useState } from 'react'
import { Edit, TabbedForm, FormTab } from "react-admin"
import { useInput, FormDataConsumer } from 'react-admin'
import TimeKeeper from 'react-timekeeper'
import { ColorPicker, createColor } from "material-ui-color"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import Typography from '@material-ui/core/Typography'

const ColorPickerGianf = (props) => {
    const {
        input: { name, onChange, value, ...rest },
        meta: { touched, error }
    } = useInput(props)
    console.log(props.value)
    return (
        <>
            <span style={{ verticalAlign: 'bottom' }}>Colore </span>
            <ColorPicker
                value={value}
                onChange={onChange}
            ></ColorPicker>
            <div></div>
        </>
    )
}

const SettingTime = (props) => {
    const [showTime, setShowTime] = useState(false);
    debugger
    const mawio = useInput(props)
    const onChange = mawio.input.onChange
    const valore = mawio.input.value

    return (
        <div>
            {showTime && (
                <TimeKeeper
                    time={props.value}
                    onChange={(data) => onChange(data.formatted24)}
                    onDoneClick={() => setShowTime(false)}
                    switchToMinuteOnHourSelect
                />
            )}
            <span>
                Time is {props.value}{" "}
                <input type="text" value={props.value} onClick={() => setShowTime(true)} />{" "}
            </span>
            {!showTime && <button onClick={() => setShowTime(true)}>Show</button>}
        </div>
    )
}

export const OrariEdit = props => (
    < Edit {...props}>
        <TabbedForm>
            <FormTab label="Generale">
                <CardEditGenerale {...props.record} />
            </FormTab>
            <FormTab label="Avanzato">
                <CardEditAvanzato {...props.record} />
            </FormTab>
            <FormTab label="Esperto">
                <CardEditEsperto {...props.record} />
            </FormTab>
            <FormTab label="Orari Speciali">
                <CardEditOrariSpeciali {...props.record} />
            </FormTab>
        </TabbedForm>
    </Edit >
);