import * as React from "react"
import { SelectInput, BooleanInput, FormDataConsumer, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import TableBody from '@material-ui/core/TableBody'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEditOrariSpeciali(record) {
    const translate = useTranslate()
    const classes = useStyles();
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <Typography gutterBottom variant="h5" component="div">
                        {translate('resources.cardGenerale.fields.orario')}   {formData.description}
                    </Typography>
                )}
            </FormDataConsumer>
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle1')}
            </Typography>
            <BooleanInput source="applyAutomaticCompensation" label={translate('resources.cardOrarioSpeciali.fields.applyAutomaticCompensation')} />
            <BooleanInput source="generateAutomaticEntries" label={translate('resources.cardOrarioSpeciali.fields.generateAutomaticEntries')} />
            <BooleanInput source="realTypesWithoutStamping" label={translate('resources.cardOrarioSpeciali.fields.realTypesWithoutStamping')} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle2')}
            </Typography>
            <SelectInput source="oreTeoricheHHTeoriche" label={translate('resources.cardOrarioSpeciali.fields.oreTeoricheHHTeoriche')} allowEmpty="True" className={classes.textInput} choices={[
                { id: 'minime', name: translate('resources.cardOrarioSpeciali.fields.minime') },
                { id: 'base', name: translate('resources.cardOrarioSpeciali.fields.base') },
            ]} />
            <SelectInput source="oreTeoricheTipoGG" label={translate('resources.cardOrarioSpeciali.fields.oreTeoricheTipoGG')} allowEmpty="True" className={classes.textInput} choices={[
                { id: 'lavorativo', name: translate('resources.cardOrarioSpeciali.fields.lavorativo') },
                { id: 'nonLavorativo', name: translate('resources.cardOrarioSpeciali.fields.nonLavorativo') },
                { id: 'festivo', name: translate('resources.cardOrarioSpeciali.fields.festivo') },
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle3')}
            </Typography>
            <BooleanInput source="strategieIgnorareTimbratureOrfane" label={translate('resources.cardOrarioSpeciali.fields.strategieIgnorareTimbratureOrfane')} />
            <BooleanInput source="strategieTimbratureDiscriminazioneAutomatica" label={translate('resources.cardOrarioSpeciali.fields.strategieTimbratureDiscriminazioneAutomatica')} />
            <BooleanInput source="strategieGiustificativiRigidi" label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiRigidi')} />
            <BooleanInput source="strategieGiustificativiFlex" label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiFlex')} />
            <BooleanInput source="strategieGiustificativiAssenzaTimbrature" label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiAssenzaTimbrature')} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle4')}
            </Typography>
            <BooleanInput source="OmissioneDescrizioneOrdiniServizio" label={translate('resources.cardOrarioSpeciali.fields.OmissioneDescrizioneOrdiniServizio')} />
        </TableBody>
    );
}

export default CardEditOrariSpeciali;