import * as React from "react"
import { Edit, TabbedForm, FormTab } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"

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