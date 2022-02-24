import * as React from "react"
import { Edit, TabbedForm, FormTab, useTranslate } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import Grid from '@material-ui/core/Grid'
import Calenda from './Calendario'

export const OrariEdit = props => {
    const translate = useTranslate()
    return (
        <Edit {...props}>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} >
                <Grid item xs={1} />
                <Grid item xs={10} >
                    <TabbedForm >
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
                        </FormTab>
                    </TabbedForm>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Edit >)
}