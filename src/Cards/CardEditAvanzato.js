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
                        {translate('resources.cardGenerale.fields.orario')}  {formData.descrizione}
                    </Typography>
                )}
            </FormDataConsumer>
            <br />
            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle1')}
            </Typography>
            <TableRow>
                <ReferenceInput source="orariSostitutiviSabato" label={translate('resources.cardAvanzato.fields.orariSostitutiviSabato')} allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
                <ReferenceInput source="orariSostitutiviDomenicaEFestivo" style={{ width: 200 }} label={translate('resources.cardAvanzato.fields.orariSostitutiviDomenicaEFestivo')} allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
                <ReferenceInput source="orariSostitutiviPreFestivo" label={translate('resources.cardAvanzato.fields.orariSostitutiviPreFestivo')} allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle2')}
            </Typography>
            <TableRow>
                <BooleanInput source="segnalareTimbratureFuoriFasce"  label={translate('resources.cardAvanzato.fields.segnalareTimbratureFuoriFasce')} />
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle3')}
            </Typography>

            <BooleanInput source="lavoroStraordinarioAutorizzato"  label={translate('resources.cardAvanzato.fields.lavoroStraordinarioAutorizzato')} />
            <SelectInput source="lavoroStraordinarioArrotondamento"  label={translate('resources.cardAvanzato.fields.lavoroStraordinarioArrotondamento')} allowEmpty="True" choices={[
                { id: 'ogniSingolaVoce', name: translate('resources.cardAvanzato.fields.ogniSingolaVoce') },
                { id: 'titolare', name:translate('resources.cardAvanzato.fields.titolare') },
                { id: 'primaSingolaVoce', name: translate('resources.cardAvanzato.fields.primaSingolaVoce') },
                { id: 'primaIlTotale', name: translate('resources.cardAvanzato.fields.primaIlTotale') },
            ]} />
            <BooleanInput source="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" label={translate('resources.cardAvanzato.fields.lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare')} />

            <Typography gutterBottom variant="h7" component="div">
                {translate('resources.cardAvanzato.fields.subTitle4')}
            </Typography>
            <ReferenceInput source="profilosId" reference="profilos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </TableBody>
    );
}

export default CardEditAvanzato;