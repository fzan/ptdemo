import * as React from "react"
import { TextInput, SelectInput, BooleanInput, ReferenceInput, regex, required, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import { FormDataConsumer } from 'react-admin'
import TableBody from '@material-ui/core/TableBody'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

const validateHoursFormat = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Inserire un orario Valido (HH:mm)')

function CardEditEsperto(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            {translate('resources.cardGenerale.fields.orario')}  {formData.description}
                        </Typography>
                        <br />
                        <BooleanInput source="compensazioneCompensazioneSelettiva" label={translate('resources.cardEsperto.fields.compensazioneCompensazioneSelettiva')} />
                        {formData.compensazioneCompensazioneSelettiva ?
                            <>
                                <ReferenceInput source="compensazioneCumuloAssenze" style={{ width: 250 }} reference="vocis" label={translate('resources.cardEsperto.fields.compensazioneCumuloAssenze')} className={classes.textInput}>
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <ReferenceInput style={{ width: 250 }} source="compensazioneCumuloStraordinario" reference="vocis" label={translate('resources.cardEsperto.fields.compensazioneCumuloStraordinario')} className={classes.textInput}>
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <TextInput source="compensazioneMassimale" label={translate('resources.cardEsperto.fields.compensazioneMassimale')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                                <BooleanInput source="compensazioneSaldoPositivo" label={translate('resources.cardEsperto.fields.compensazioneSaldoPositivo')} />
                                <BooleanInput source="compensazioneFasceSeAssenza" label={translate('resources.cardEsperto.fields.compensazioneFasceSeAssenza')} />
                                <BooleanInput source="compensazionePauseNonRispettate" label={translate('resources.cardEsperto.fields.compensazionePauseNonRispettate')} />
                                <BooleanInput source="compensazioneDeduzioneAdattivaTimbratureTipo" label={translate('resources.cardEsperto.fields.compensazioneDeduzioneAdattivaTimbratureTipo')} />
                                {formData.compensazioneDeduzioneAdattivaTimbratureTipo ?
                                    <>
                                        <SelectInput source="compensazioneSequenzeEu" label={translate('resources.cardEsperto.fields.compensazioneSequenzeEu')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'prima', name: translate('resources.cardEsperto.fields.prima') },
                                            { id: 'tutteDallaPrima', name: translate('resources.cardEsperto.fields.tutteDallaPrima') },
                                            { id: 'tutteIndipendenti', name: translate('resources.cardEsperto.fields.tutteIndipendenti') },
                                        ]} />
                                        <SelectInput style={{ width: 280 }} source="compensazioneTimbratureFuoriFasciaElastica" label={translate('resources.cardEsperto.fields.compensazioneTimbratureFuoriFasciaElastica')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'escludere', name: 'Escludere' },
                                            { id: 'considerare', name: 'Considerare' },
                                        ]} />
                                        <SelectInput style={{ width: 230 }} source="compensazioneSpostaTimbraturaTipo" label={translate('resources.cardEsperto.fields.compensazioneSpostaTimbraturaTipo')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'sinoAlLimite', name: 'Sino al limite della fascia' },
                                            { id: 'ignoraLimiti', name: 'Ignora limiti' },
                                        ]} />
                                        <BooleanInput source="compensazioneDisattivaFasceDopoIndividuaTipo" label={translate('resources.cardEsperto.fields.compensazioneDisattivaFasceDopoIndividuaTipo')} />
                                        {formData.compensazioneDisattivaFasceDopoIndividuaTipo ?
                                            <>
                                                <BooleanInput source="compensazioneOrarioRigido" label={translate('resources.cardEsperto.fields.compensazioneOrarioRigido')} />
                                            </> :
                                            <> </>
                                        }
                                    </> :
                                    <> </>
                                }
                            </> :
                            <> </>
                        }

                    </>
                )}

            </FormDataConsumer>
        </TableBody>
    );
}

export default CardEditEsperto;