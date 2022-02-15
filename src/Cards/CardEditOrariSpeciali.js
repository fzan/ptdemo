import * as React from "react"
import { SelectInput, BooleanInput, FormDataConsumer } from "react-admin"
import Typography from '@material-ui/core/Typography'
import TableBody from '@material-ui/core/TableBody'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEditOrariSpeciali(record) {
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
                Post-Elaborazioni per giornate prive di timbrature
            </Typography>
            <BooleanInput source="postElaborazioniCompensazioneAutomatica" label="Applicare Compensazione automatica" />
            <BooleanInput source="postElaborazioniVociAutomatiche" label="Generare voci Automatiche" />
            <BooleanInput source="postElaborazioniUsaTipoReali" label="Usare tipo reali e/o virtuali anche senza timbrature" />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Ore teoriche e tipologia della giornata
            </Typography>
            <SelectInput source="oreTeoricheHHTeoriche" label="HH teoriche" allowEmpty="True" className={classes.textInput} choices={[
                { id: 'minime', name: 'Minime' },
                { id: 'base', name: 'Base' },
            ]} />
            <SelectInput source="oreTeoricheTipoGG" label="Tipo GG" allowEmpty="True" className={classes.textInput} choices={[
                { id: 'lavorativo', name: 'Lavorativo' },
                { id: 'nonLavorativo', name: 'Non Lavorativo' },
                { id: 'festivo', name: 'Festivo' },
            ]} />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Strategie per il motore di elaborazione
            </Typography>
            <BooleanInput source="strategieIgnorareTimbratureOrfane" />
            <BooleanInput source="strategieTimbratureDiscriminazioneAutomatica" />
            <BooleanInput source="strategieGiustificativiRigidi" />
            <BooleanInput source="strategieGiustificativiFlex" />
            <BooleanInput source="strategieGiustificativiAssenzaTimbrature" />
            <br />
            <Typography gutterBottom variant="h7" component="div">
                Ordini di servizio
            </Typography>
            <BooleanInput source="OmissioneDescrizioneOrdiniServizio" />
        </TableBody>
    );
}

export default CardEditOrariSpeciali;