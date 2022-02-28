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
                        <BooleanInput source="selectiveCompensation" label={translate('resources.cardEsperto.fields.selectiveCompensation')} />
                        {formData.selectiveCompensation ?
                            <>
                                <ReferenceInput source="cumulativeAbsence" style={{ width: 250 }} reference="vocis" label={translate('resources.cardEsperto.fields.cumulativeAbsence')} className={classes.textInput}>
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <ReferenceInput style={{ width: 250 }} source="cumulativeOvertime" reference="vocis" label={translate('resources.cardEsperto.fields.cumulativeOvertime')} className={classes.textInput}>
                                    <SelectInput optionText="title" />
                                </ReferenceInput>
                                <TextInput source="maximal" label={translate('resources.cardEsperto.fields.maximal')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                                <BooleanInput source="positiveBalanceForCompensateHours" label={translate('resources.cardEsperto.fields.positiveBalanceForCompensateHours')} />
                                <BooleanInput source="bandsInCaseOfAbsence" label={translate('resources.cardEsperto.fields.bandsInCaseOfAbsence')} />
                                <BooleanInput source="extendOverMissedPauses" label={translate('resources.cardEsperto.fields.extendOverMissedPauses')} />
                                <BooleanInput source="adaptiveDeductionOfStandardPunch" label={translate('resources.cardEsperto.fields.adaptiveDeductionOfStandardPunch')} />
                                {formData.adaptiveDeductionOfStandardPunch ?
                                    <>
                                        <SelectInput source="eUSequences" label={translate('resources.cardEsperto.fields.eUSequences')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'prima', name: translate('resources.cardEsperto.fields.prima') },
                                            { id: 'tutteDallaPrima', name: translate('resources.cardEsperto.fields.tutteDallaPrima') },
                                            { id: 'tutteIndipendenti', name: translate('resources.cardEsperto.fields.tutteIndipendenti') },
                                        ]} />
                                        <SelectInput style={{ width: 280 }} source="PunchOutsideElasticBand" label={translate('resources.cardEsperto.fields.PunchOutsideElasticBand')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'escludere', name: 'Escludere' },
                                            { id: 'considerare', name: 'Considerare' },
                                        ]} />
                                        <SelectInput style={{ width: 230 }} source="movePunchType" label={translate('resources.cardEsperto.fields.movePunchType')} allowEmpty="True" className={classes.textInput} choices={[
                                            { id: 'sinoAlLimite', name: 'Sino al limite della fascia' },
                                            { id: 'ignoraLimiti', name: 'Ignora limiti' },
                                        ]} />
                                        <BooleanInput source="deactivateBandsAfterIdentifiedType" label={translate('resources.cardEsperto.fields.deactivateBandsAfterIdentifiedType')} />
                                        {formData.deactivateBandsAfterIdentifiedType ?
                                            <>
                                                <BooleanInput source="scheduleBecomeStiff" label={translate('resources.cardEsperto.fields.scheduleBecomeStiff')} />
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