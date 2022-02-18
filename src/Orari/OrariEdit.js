import * as React from "react"
import { Edit, TabbedForm, FormTab } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import Grid from '@material-ui/core/Grid'
import Calenda from './Calendario'

export const OrariEdit = props => {
    return (
        <Edit {...props}>
            <Grid container spacing={1} style={{ width: "100%" }}>
                <Grid item xs={1} />
                <Grid item xs={10}>
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
                        <FormTab label="Fasce di Giornata">
                            <Calenda />
                        </FormTab>
                    </TabbedForm>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Edit >)
}