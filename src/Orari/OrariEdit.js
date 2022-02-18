import * as React from "react"
import { Edit, TabbedForm, FormTab, useInput } from "react-admin"
import CardEditGenerale from "../Cards/CardEditGenerale"
import CardEditAvanzato from "../Cards/CardEditAvanzato"
import CardEditOrariSpeciali from "../Cards/CardEditOrariSpeciali"
import CardEditEsperto from "../Cards/CardEditEsperto"
import Grid from '@material-ui/core/Grid'
import { useTranslate } from 'react-admin'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Calenda from './Calendario'

export const OrariEdit = props => {
    const redirectPayCodes = props.id ? `/Schedules/${props.id}/1` : null
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

const pickerupdate = (start_time, end_time) => {
    // start and end time in 24hour time
    console.log(`start time: ${start_time}, end time: ${end_time}`)
}

const CreateScheduleRoundButton = ({ record }) => {
    const translate = useTranslate()
    return (
        <Button
            component={Link}
            to={{
                pathname: '/fasceDellaGiornatas/Create',
                state: {
                    record: {
                        orarioId: record.id
                    }
                },
            }}
        >
            {translate("resources.Schedules.addScheduleRound")}
        </Button>
    )
}