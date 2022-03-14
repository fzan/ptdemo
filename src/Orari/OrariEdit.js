import * as React from "react"
import { Edit, TabbedForm, FormTab, useTranslate } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import Calenda from './Calendario'
import InOutCalendar from "./InOutCalendar"

export const OrariEdit = props => {
    const translate = useTranslate()
    return (
        <Edit {...props}>
            <TabbedForm>
                <FormTab label={translate('resources.orariDetails.fields.generale')} >
                    <CardEditGenerale {...props.record} />
                </FormTab>
                <FormTab label={translate('resources.orariDetails.fields.avanzato')} >
                    <CardEditAvanzato {...props.record} />
                </FormTab>
                <FormTab label={translate('resources.orariDetails.fields.esperto')}>
                    <CardEditEsperto {...props.record} />
                </FormTab>
                <FormTab label={translate('resources.orariDetails.fields.orarioSpeciale')}>
                    <CardEditOrariSpeciali {...props.record} />
                </FormTab>
                <FormTab label={translate('resources.orariDetails.fields.timbrature')}>
                    <Calenda />
                    {/* <InOutCalendar/> */}
                </FormTab>
                <FormTab label='inOut'>
                    {/* <Calenda /> */}
                    <InOutCalendar {...props.record} />
                </FormTab>
            </TabbedForm>
        </Edit >)
}