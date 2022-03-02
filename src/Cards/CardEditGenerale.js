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
            <span style={{ verticalAlign: 'bottom' }}>{translate('resources.cardGenerale.fields.color')}</span>
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
                        {translate('resources.cardGenerale.fields.scheduledIdLabel')}  {formData.description}
                    </Typography>
                )}
            </FormDataConsumer>

            <TextInput source="code" label={translate('resources.cardGenerale.fields.code')} className={classes.textInput} />
            <TextInput source="brief" label={translate('resources.cardGenerale.fields.brief')} className={classes.textInput} />
            <TextInput source="description" label={translate('resources.cardGenerale.fields.description')} className={classes.textInput} />

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <ColorPickerCustom source="color" value={formData.color} {...record} />
                    )}
                </FormDataConsumer>
            </TableRow>
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardGenerale.fields.subTitle1')}
            </Typography>

            <TableRow>
                <SelectInput source="type" label={translate('resources.cardGenerale.fields.type')} allowEmpty="True" className={classes.textInput} choices={[
                    { id: 1, name: translate('resources.cardGenerale.fields.stiff') }, // Rigido
                    { id: 2, name: translate('resources.cardGenerale.fields.elastic') }, // Elastico
                    { id: 3, name: translate('resources.cardGenerale.fields.flexible') }, // Flessibile
                ]} />
                <TextInput source="base" label={translate('resources.cardGenerale.fields.base')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                <TextInput source="minimum" label={translate('resources.cardGenerale.fields.minimum')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
            </TableRow>
            <SelectInput source="savingDay" label={translate('resources.cardGenerale.fields.savingDay')} allowEmpty="True" choices={[
                { id: 1, name: translate('resources.cardGenerale.fields.entrance') }, //Entrata
                { id: 2, name: translate('resources.cardGenerale.fields.exit') }, //Uscita
                { id: 3, name: translate('resources.cardGenerale.fields.knight') }, //Cavaliere
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardGenerale.fields.subTitle2')}
            </Typography>

            <TableRow>
                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="from" value={formData.from} label={translate('resources.cardGenerale.fields.from')} {...record} />
                    )}
                </FormDataConsumer>

                <FormDataConsumer>
                    {({ formData, ...rest }) => (
                        <SettingTime source="to" value={formData.to} label={translate('resources.cardGenerale.fields.to')} {...record} />
                    )}
                </FormDataConsumer>
                <NumberInput source="nextDays" label={translate('resources.cardGenerale.fields.nextDaysLabel')} />
            </TableRow>

            <BooleanInput source="onMoreDays" label={translate('resources.cardGenerale.fields.onMoreDays')} />
            <BooleanInput source="causalCodesOutOfRange" label={translate('resources.cardGenerale.fields.causalCodesOutOfRange')} />
        </TableBody>
    );
}

export default CardEditGenerale;