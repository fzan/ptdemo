import * as React from "react"
import { SelectInput, BooleanInput, ReferenceInput, FormDataConsumer, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEditAvanzato(record) {
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
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle1')}
            </Typography>
            <TableRow>
                <ReferenceInput source="saturday" label={translate('resources.cardAvanzato.fields.saturday')} allowEmpty="True" reference="schedules" className={classes.textInput}>
                    <SelectInput optionText="description" />
                </ReferenceInput>
                <ReferenceInput source="sundayHolyday" style={{ width: 200 }} label={translate('resources.cardAvanzato.fields.sundayHolyday')} allowEmpty="True" reference="schedules" className={classes.textInput}>
                    <SelectInput optionText="description" />
                </ReferenceInput>
                <ReferenceInput source="preHolyday" label={translate('resources.cardAvanzato.fields.preHolyday')} allowEmpty="True" reference="schedules" className={classes.textInput}>
                    <SelectInput optionText="description" />
                </ReferenceInput>
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle2')}
            </Typography>
            <TableRow>
                <BooleanInput source="reportPunchOutOfBands" label={translate('resources.cardAvanzato.fields.reportPunchOutOfBands')} />
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle3')}
            </Typography>

            <BooleanInput source="overtimeMustBeAuthorized" label={translate('resources.cardAvanzato.fields.overtimeMustBeAuthorized')} />

            <SelectInput source="rounding" label={translate('resources.cardAvanzato.fields.rounding')} allowEmpty="True" choices={[
                { id: 1, name: translate('resources.cardAvanzato.fields.ogniSingolaVoce') },
                { id: 2, name: translate('resources.cardAvanzato.fields.titolare') },
                { id: 3, name: translate('resources.cardAvanzato.fields.primaSingolaVoce') },
                { id: 4, name: translate('resources.cardAvanzato.fields.primaIlTotale') },
            ]} />
            <BooleanInput source="applyRoundingInBandsToBeAuthorized" label={translate('resources.cardAvanzato.fields.applyRoundingInBandsToBeAuthorized')} />

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle4')}
            </Typography>

            <ReferenceInput source="profilosId" reference="profilos">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </TableBody>
    );
}

export default CardEditAvanzato;