import * as React from "react"
import { TextInput, SelectInput, BooleanInput, ReferenceInput } from "react-admin"
import Typography from '@material-ui/core/Typography'
import { FormDataConsumer } from 'react-admin'
import TableBody from '@material-ui/core/TableBody'

function CardEditEsperto(record) {
    return (
        <TableBody>
            <FormDataConsumer>
                {({ formData, ...rest }) => (
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Orario  {formData.descrizione}
                        </Typography>
                        <br />
                        <BooleanInput source="compensazioneCompensazioneSelettiva" label="Compensazione Selettiva" />
                        {formData.compensazioneCompensazioneSelettiva ?
                            <>
                                <ReferenceInput source="compensazioneCumuloAssenze" reference="vocis" label="Cumulo Assenze">
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <ReferenceInput style={{ width: 200 }} source="compensazioneCumuloStraordinario" reference="vocis" label="Cumulo Straordinario">
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <TextInput source="compensazioneMassimale" label="Massimale" />
                                <BooleanInput source="compensazioneSaldoPositivo" label="Usa saldo positivo per compensare monte ore" />
                                <BooleanInput source="compensazioneFasceSeAssenza" label="Considera fasce anche in caso di assenza" />
                                <BooleanInput source="compensazionePauseNonRispettate" label="Estendi anche su pause non rispettate" />
                                <BooleanInput source="compensazioneDeduzioneAdattivaTimbratureTipo" label="Deduzione adattiva delle timbrature tipo" />
                                {formData.compensazioneDeduzioneAdattivaTimbratureTipo ?
                                    <>
                                        <SelectInput source="compensazioneSequenzeEu" label="Sequenza UE" allowEmpty="True" choices={[
                                            { id: 'prima', name: 'Solo prima' },
                                            { id: 'tutteDallaPrima', name: 'TUTTE - desunte dalla prima' },
                                            { id: 'tutteIndipendenti', name: 'TUTTE - In modo indipendente' },
                                        ]} />
                                        <SelectInput style={{ width: 280 }} source="compensazioneTimbratureFuoriFasciaElastica" label="Timbrature fuori fascia elastica" allowEmpty="True" choices={[
                                            { id: 'escludere', name: 'Escludere' },
                                            { id: 'considerare', name: 'Considerare' },
                                        ]} />
                                        <SelectInput style={{ width: 230 }} source="compensazioneSpostaTimbraturaTipo" label="Sposta timbrature tipo" allowEmpty="True" choices={[
                                            { id: 'sinoAlLimite', name: 'Sino al limite della fascia' },
                                            { id: 'ignoraLimiti', name: 'Ignora limiti' },
                                        ]} />
                                        <BooleanInput source="compensazioneDisattivaFasceDopoIndividuaTipo" label="Disattiva le fasce dopo aver individuato le tipo" />
                                        {formData.compensazioneDisattivaFasceDopoIndividuaTipo ?
                                            <>
                                                <BooleanInput source="compensazioneOrarioRigido" label="Orario diviene [rigido]" />
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