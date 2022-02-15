import * as React from 'react'
import { useState } from 'react'
import { TextInput, SelectInput, BooleanInput, NumberInput, useInput, FormDataConsumer, regex, required } from 'react-admin'
import Typography from '@material-ui/core/Typography'
import TimeKeeper from 'react-timekeeper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { ColorPicker } from 'material-ui-color'
import { makeStyles } from '@material-ui/core/styles'

const validateHoursFormat = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Inserire un orario Valido (HH:mm)')

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

const ColorPickerCustom = (props) => {
    const {
        input: { name, onChange, value, ...rest },
        meta: { touched, error }
    } = useInput(props)
    return (
        <>
            <span style={{ verticalAlign: 'bottom' }}>Colore</span>
            <ColorPicker value={value} onChange={onChange} />
        </>
    )
}

const SettingTime = (props) => {
    const [showTime, setShowTime] = useState(false);
    const inputValue = useInput(props)
    const onChange = inputValue.input.onChange
    return (
        <>
            <TableRow>
                <span>
                    <TextInput source={props.source} onClick={() => setShowTime(true)} label={props.label} InputProps={{ readOnly: true }} />
                </span>
            </TableRow>
            <TableRow>
                {showTime && (
                    <TimeKeeper
                        time={props.value}
                        onChange={(data) => onChange(data.formatted24)}
                        onDoneClick={() => setShowTime(false)}
                        switchToMinuteOnHourSelect
                    />
                )}
            </TableRow>
        </>
    )
}

function CardEditGenerale(record) {
    const classes = useStyles();
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <Typography gutterBottom variant="h5" component="div">
                        Orario  {formData.descrizione}
                    </Typography>
                )}
            </FormDataConsumer>

            <TextInput source="codice" className={classes.textInput} />
            <TextInput source="breve" className={classes.textInput} />
            <TextInput source="descrizione" className={classes.textInput} />

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <ColorPickerCustom source="colore" value={formData.colore} {...record} />
                    )}
                </FormDataConsumer>
            </TableRow>
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Tipologia, ore previste e competenza dei risultati
            </Typography>

            <TableRow>
                <SelectInput source="tipologiaTipo" label="Tipo" allowEmpty="True" className={classes.textInput} choices={[
                    { id: 'Rigido', name: 'Rigido' },
                    { id: 'Elastico', name: 'Elastico' },
                    { id: 'Flessibile', name: 'Flessibile' },
                ]} />
                <TextInput source="tipologiaOreBase" label="Ore Base" className={classes.textInput} validate={[required(), validateHoursFormat]} />
                <TextInput source="tipologiaOreMinime" label="Ore Minime" className={classes.textInput} validate={[required(), validateHoursFormat]} />
            </TableRow>
            <SelectInput source="tipologiaGiornoDiSalvataggio" allowEmpty="True" choices={[
                { id: 'Entrata', name: 'ENTRATA - Tutto sul GG di Ingresso' },
                { id: 'Uscita', name: 'USCITA - Tutto sul GG di Uscita' },
                { id: 'Cavaliere', name: 'CAVALIERE - Seleettivo' },
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Intervallo Timbrature
            </Typography>

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="timbratureDalle" value={formData.timbratureDalle} label="Dalle" {...record} />
                    )}
                </FormDataConsumer>

                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="timbratureAlle" value={formData.timbratureDalle} label="Alle" {...record} />
                    )}
                </FormDataConsumer>

                <NumberInput source="timbratureGiorniSuccessiviPerTimbratura" label="giorni dopo" />
            </TableRow>

            <BooleanInput source="timbratureTimbratureSuPiuGiorni" />
            <BooleanInput source="timbratureCausaliFuoriIntervallo" />
        </TableBody>
    );
}

export default CardEditGenerale;