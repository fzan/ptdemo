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
                        {translate('resources.cardGenerale.fields.scheduledIdLabel')}   {formData.description}
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
            <SelectInput source="theoreticalHours" label={translate('resources.cardOrarioSpeciali.fields.theoreticalHours')} allowEmpty="True" className={classes.textInput} choices={[
                { id: 'minime', name: translate('resources.cardOrarioSpeciali.fields.minime') },
                { id: 'base', name: translate('resources.cardOrarioSpeciali.fields.base') },
            ]} />
            <SelectInput source="typeOfDay" label={translate('resources.cardOrarioSpeciali.fields.typeOfDay')} allowEmpty="True" className={classes.textInput} choices={[
                { id: 'lavorativo', name: translate('resources.cardOrarioSpeciali.fields.lavorativo') },
                { id: 'nonLavorativo', name: translate('resources.cardOrarioSpeciali.fields.nonLavorativo') },
                { id: 'festivo', name: translate('resources.cardOrarioSpeciali.fields.festivo') },
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle3')}
            </Typography>
            <BooleanInput source="ignoreOrphanedPunch" label={translate('resources.cardOrarioSpeciali.fields.ignoreOrphanedPunch')} />
            <BooleanInput source="includePunchInAutomaticTimeDiscriminationPhase" label={translate('resources.cardOrarioSpeciali.fields.includePunchInAutomaticTimeDiscriminationPhase')} />
            <BooleanInput source="partialReceiptsIntoAssignedStiff" label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedStiff')} />
            <BooleanInput source="partialReceiptsIntoAssignedFlex" label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedFlex')} />
            <BooleanInput source="receiptsAssignedInAbsenceOfPunch" label={translate('resources.cardOrarioSpeciali.fields.receiptsAssignedInAbsenceOfPunch')} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardOrarioSpeciali.fields.subTitle4')}
            </Typography>
            <BooleanInput source="omitDescriptionInServiceOrders" label={translate('resources.cardOrarioSpeciali.fields.omitDescriptionInServiceOrders')} />
        </TableBody>
    );
}

export default CardEditOrariSpeciali;