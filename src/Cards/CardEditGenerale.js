import * as React from "react"
import { useState } from 'react'
import { Edit, TextInput, SelectInput, BooleanInput, NumberInput, ReferenceInput, SimpleForm, DateInput, TextField } from "react-admin"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useInput, FormDataConsumer } from 'react-admin'
import TimeKeeper from 'react-timekeeper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { ColorPicker, createColor } from "material-ui-color"

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

function CardEditGenerale(record) {
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <Typography gutterBottom variant="h5" component="div">
                        Orario  {formData.descrizione}
                    </Typography>
                )}
            </FormDataConsumer>
            <br />
            <TableRow>
                <TextInput source="codice" />
                <TextInput source="breve" />
                <TextInput source="descrizione" />
            </TableRow>
            {/* <TextField source="breve" label="PEPPINIELLO" addLabel={true} /> */}
            {/* <Typography gutterBottom variant="h8" component="div">
                Colore
            </Typography>*/}

            {/* <TextField source="breve" label="PEPPINIELLO" addLabel={true} /> */}
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <ColorPickerGianf source="colore" value={formData.colore} {...record} />
                )}
            </FormDataConsumer>

            <br />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Tipologia, ore previste e competenza dei risultati
            </Typography>

            <TableRow>
                <SelectInput source="tipologiaTipo" label="Tipo" allowEmpty="True"  choices={[
                    { id: 'Rigido', name: 'Rigido' },
                    { id: 'Elastico', name: 'Elastico' },
                    { id: 'Flessibile', name: 'Flessibile' },
                ]} />
                <TextInput source="tipologiaOreBase" label="Ore Base" keyboardType='numeric' />
                <TextInput source="tipologiaOreMinime" label="Ore Minime" />
            </TableRow>
            <SelectInput source="tipologiaGiornoDiSalvataggio" allowEmpty="True"  choices={[
                { id: 'Entrata', name: 'ENTRATA - Tutto sul GG di Ingresso' },
                { id: 'Uscita', name: 'USCITA - Tutto sul GG di Uscita' },
                { id: 'Cavaliere', name: 'CAVALIERE - Seleettivo' },
            ]} />
            <br />
            <br />

            <Typography gutterBottom variant="h7" component="div">
                Intervallo Timbrature
            </Typography>

            <TableRow>
                <DateInput source="timbratureDalle" label="Dalle" />
                <DateInput source="timbratureAlle" label="Alle" />
                <NumberInput source="timbratureGiorniSuccessiviPerTimbratura" label="giorni dopo" />
            </TableRow>

            <BooleanInput source="timbratureTimbratureSuPiuGiorni" />
            <BooleanInput source="timbratureCausaliFuoriIntervallo" />
        </TableBody>
    );
}

export default CardEditGenerale;