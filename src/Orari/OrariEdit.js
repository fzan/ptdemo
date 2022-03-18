import * as React from "react"
import { Edit, TabbedForm, TabbedFormTabs, FormTab, useTranslate } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import InOutCalendar from "./InOutCalendar"
import { SaveButton, Toolbar } from 'react-admin';

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);
/**{ maxWidth: '100vw' } style={{ width: '80%' }} */
export const OrariEdit = props => {
    const translate = useTranslate()
    return (
        <Edit {...props} >
            <TabbedForm style={{ width: '100vw' }} tabs={<TabbedFormTabs variant="scrollable" scrollButtons="auto" />}>
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
                <FormTab label='inOut' toolbar={<UserEditToolbar />}>
                    <InOutCalendar {...props.record} />
                </FormTab>
            </TabbedForm>
        </Edit >)
}