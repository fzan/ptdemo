import * as React from 'react'
import { useState } from 'react'
import { TextInput, SelectInput, BooleanInput, NumberInput, useInput, FormDataConsumer, regex, required, useTranslate } from 'react-admin'
import Typography from '@material-ui/core/Typography'
import TimeKeeper from 'react-timekeeper'
import { ColorPicker } from 'material-ui-color'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const validateHoursFormat = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Inserire un orario Valido (HH:mm)')

const useStyles = makeStyles({
    textInput: {
        // margin: 4
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
            <Grid container>
                <Grid item xs={6}>
                    <TextInput source={props.source} onClick={() => setShowTime(true)} label={props.label} InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container>
                <Grid item xs={6}>
                    {showTime && (
                        <Grid container>
                            <Grid item xs={6}>
                                <TimeKeeper
                                    time={props.value}
                                    onChange={(data) => onChange(data.formatted24)}
                                    onDoneClick={() => setShowTime(false)}
                                    switchToMinuteOnHourSelect
                                />
                            </Grid>
                            <Grid item xs />
                        </Grid >
                    )}
                </Grid>
                <Grid item xs />
            </Grid >
        </>
    )
}

function CardEditGenerale(record) {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container>
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <FormDataConsumer>
                        {({ formData }) => (
                            <Typography gutterBottom variant="h5" component="div">
                                {translate('resources.cardGenerale.fields.scheduledIdLabel')}  {formData.description}
                            </Typography>
                        )}
                    </FormDataConsumer>
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={4} >
                    <TextInput source="code" label={translate('resources.cardGenerale.fields.code')} className={classes.textInput} />
                </Grid>
                <Grid item xs={4} >
                    <TextInput source="brief" label={translate('resources.cardGenerale.fields.brief')} className={classes.textInput} />
                </Grid>
                <Grid item xs={4} >
                    <TextInput source="description" label={translate('resources.cardGenerale.fields.description')} className={classes.textInput} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <FormDataConsumer>
                        {({ formData }) => (
                            <ColorPickerCustom source="color" value={formData.color} {...record} />
                        )}
                    </FormDataConsumer>
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardGenerale.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={4} >
                    <SelectInput source="type" label={translate('resources.cardGenerale.fields.type')} allowEmpty className={classes.textInput} choices={[
                        { id: 1, name: translate('resources.cardGenerale.fields.stiff') }, // Rigido
                        { id: 2, name: translate('resources.cardGenerale.fields.elastic') }, // Elastico
                        { id: 3, name: translate('resources.cardGenerale.fields.flexible') }, // Flessibile
                    ]} />
                </Grid>
                <Grid item xs={4} >
                    <TextInput source="base" label={translate('resources.cardGenerale.fields.base')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                </Grid>
                <Grid item xs={4} >
                    <TextInput source="minimum" label={translate('resources.cardGenerale.fields.minimum')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <SelectInput source="savingDay" label={translate('resources.cardGenerale.fields.savingDay')} allowEmpty choices={[
                        { id: 1, name: translate('resources.cardGenerale.fields.entrance') }, //Entrata
                        { id: 2, name: translate('resources.cardGenerale.fields.exit') }, //Uscita
                        { id: 3, name: translate('resources.cardGenerale.fields.knight') }, //Cavaliere
                    ]} />
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardGenerale.fields.subTitle2')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={4} >
                    <FormDataConsumer>
                        {({ formData }) => (
                            <SettingTime source="from" value={formData.from} label={translate('resources.cardGenerale.fields.from')} {...record} />
                        )}
                    </FormDataConsumer>
                </Grid>
                <Grid item xs={4} >
                    <FormDataConsumer>
                        {({ formData }) => (
                            <SettingTime source="to" value={formData.to} label={translate('resources.cardGenerale.fields.to')} {...record} />
                        )}
                    </FormDataConsumer>
                </Grid>
                <Grid item xs={4} >
                    <NumberInput source="nextDays" label={translate('resources.cardGenerale.fields.nextDaysLabel')} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={2} >
                    <BooleanInput source="onMoreDays" label={translate('resources.cardGenerale.fields.onMoreDays')} />
                </Grid>
                <Grid item xs={2} >
                    <BooleanInput source="causalCodesOutOfRange" label={translate('resources.cardGenerale.fields.causalCodesOutOfRange')} />
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>
    );
}

export default CardEditGenerale;