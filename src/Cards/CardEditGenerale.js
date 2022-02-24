import * as React from 'react'
import { useState } from 'react'
import { TextInput, SelectInput, BooleanInput, NumberInput, useInput, FormDataConsumer, regex, required, useTranslate } from 'react-admin'
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
    const translate = useTranslate();
    const {
        input: { name, onChange, value, ...rest },
        meta: { touched, error }
    } = useInput(props)
    return (
        <>
            <span style={{ verticalAlign: 'bottom' }}>{translate('resources.cardGenerale.fields.colore')}</span>
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
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <Typography gutterBottom variant="h5" component="div">
                        {translate('resources.cardGenerale.fields.orario')}  {formData.descrizione}
                    </Typography>
                )}
            </FormDataConsumer>

            <TextInput source="codice" label={translate('resources.cardGenerale.fields.codice')} className={classes.textInput} />
            <TextInput source="breve" label={translate('resources.cardGenerale.fields.breve')} className={classes.textInput} />
            <TextInput source="descrizione" label={translate('resources.cardGenerale.fields.descrizione')} className={classes.textInput} />

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <ColorPickerCustom source="colore" value={formData.colore} {...record} />
                    )}
                </FormDataConsumer>
            </TableRow>
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardGenerale.fields.subTitle1')}
            </Typography>

            <TableRow>
                <SelectInput source="tipologiaTipo" label={translate('resources.cardGenerale.fields.tipologiaTipo')} allowEmpty="True" className={classes.textInput} choices={[
                    { id: 'Rigido', name: translate('resources.cardGenerale.fields.rigido') },
                    { id: 'Elastico', name: translate('resources.cardGenerale.fields.elastico') },
                    { id: 'Flessibile', name: translate('resources.cardGenerale.fields.flessibile') },
                ]} />
                <TextInput source="tipologiaOreBase" label={translate('resources.cardGenerale.fields.tipologiaOreBase')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                <TextInput source="tipologiaOreMinime" label={translate('resources.cardGenerale.fields.tipologiaOreMinime')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
            </TableRow>
            <SelectInput source="tipologiaGiornoDiSalvataggio" label={translate('resources.cardGenerale.fields.tipologiaGiornoDiSalvataggio')} allowEmpty="True" choices={[
                { id: 'Entrata', name: translate('resources.cardGenerale.fields.entrata') },
                { id: 'Uscita', name: translate('resources.cardGenerale.fields.uscita') },
                { id: 'Cavaliere', name: translate('resources.cardGenerale.fields.cavaliere') },
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardGenerale.fields.subTitle2')}
            </Typography>

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="timbratureDalle" value={formData.timbratureDalle} label={translate('resources.cardGenerale.fields.timbratureDalle')} {...record} />
                    )}
                </FormDataConsumer>

                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="timbratureAlle" value={formData.timbratureDalle} label={translate('resources.cardGenerale.fields.timbratureAlle')} {...record} />
                    )}
                </FormDataConsumer>
                <NumberInput source="timbratureGiorniSuccessiviPerTimbratura" label={translate('resources.cardGenerale.fields.giorniSuccessivi')} />
            </TableRow>

            <BooleanInput source="timbratureTimbratureSuPiuGiorni" label={translate('resources.cardGenerale.fields.timbratureTimbratureSuPiuGiorni')} />
            <BooleanInput source="timbratureCausaliFuoriIntervallo" label={translate('resources.cardGenerale.fields.timbratureCausaliFuoriIntervallo')} />
        </TableBody>
    );
}

export default CardEditGenerale;