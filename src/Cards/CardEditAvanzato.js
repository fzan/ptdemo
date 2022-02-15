import * as React from "react"
import { SelectInput, BooleanInput, ReferenceInput, FormDataConsumer } from "react-admin"
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
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Orari Sostitutivi
            </Typography>
            <TableRow>
                <ReferenceInput source="orariSostitutiviSabato" label="Sabato" allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
                <ReferenceInput source="orariSostitutiviDomenicaEFestivo" style={{ width: 200 }} label="Domenica e Festivo" allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
                <ReferenceInput source="orariSostitutiviPreFestivo" label="PreFestivo" allowEmpty="True" reference="orarios" className={classes.textInput}>
                    <SelectInput optionText="descrizione" />
                </ReferenceInput>
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                Timbrature conformi (effettuate nelle fasce tipo)
            </Typography>
            <TableRow>
                <BooleanInput source="segnalareTimbratureFuoriFasce" />
            </TableRow>

            <Typography gutterBottom variant="h7" component="div">
                Computo del lavoro straordinario
            </Typography>

            <BooleanInput source="lavoroStraordinarioAutorizzato" />
            <SelectInput source="lavoroStraordinarioArrotondamento" label="Arrotondamento" allowEmpty="True" choices={[
                { id: 'ogniSingolaVoce', name: 'Ogni singola voce' },
                { id: 'titolare', name: 'Solo il titolare' },
                { id: 'primaSingolaVoce', name: 'Prima ogni singola voce' },
                { id: 'primaIlTotale', name: 'Prima il totale' },
            ]} />
            <BooleanInput source="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" />

            <Typography gutterBottom variant="h7" component="div">
                Profilo di rielaborazione
            </Typography>
            <ReferenceInput source="profilosId" reference="profilos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </TableBody>
    );
}

export default CardEditAvanzato;