import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { useTranslate, SelectField, Labeled } from 'react-admin'

const theoreticalHoursChoices = [
    { id: 1, name: 'resources.cardOrarioSpeciali.fields.minime' },
    { id: 2, name: 'resources.cardOrarioSpeciali.fields.base' }
];

const typeOfDayChoices = [
    { id: 0, name: 'resources.cardOrarioSpeciali.fields.lavorativo' },
    { id: 1, name: 'resources.cardOrarioSpeciali.fields.nonLavorativo' },
    { id: 2, name: 'resources.cardOrarioSpeciali.fields.festivo' },
]

function CardOrarioSpeciali(record) {
    const translate = useTranslate()
    return (
        <TableContainer>
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardOrarioSpeciali.fields.subTitle1')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="applyAutomaticCompensation" checked={record.applyAutomaticCompensation} />
                            } label={translate('resources.cardOrarioSpeciali.fields.applyAutomaticCompensation')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="generateAutomaticEntries" checked={record.generateAutomaticEntries} />
                            } label={translate('resources.cardOrarioSpeciali.fields.generateAutomaticEntries')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="realTypesWithoutStamping" checked={record.realTypesWithoutStamping} />
                            } label={translate('resources.cardOrarioSpeciali.fields.realTypesWithoutStamping')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardOrarioSpeciali.fields.subTitle2')}
                        </TableCell>
                    </TableRow>

                    <TableRow >
                        <TableCell>
                            <Labeled label={translate('resources.cardOrarioSpeciali.fields.theoreticalHours')}>
                                <SelectField source="theoreticalHours" choices={theoreticalHoursChoices} />
                            </Labeled>
                        </TableCell>
                        <TableCell>
                            <Labeled label={translate('resources.cardOrarioSpeciali.fields.typeOfDay')}>
                                <SelectField source="typeOfDay" choices={typeOfDayChoices} />
                            </Labeled>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardOrarioSpeciali.fields.subTitle3')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="ignoreOrphanedPunch" checked={record.ignoreOrphanedPunch} />
                            } label={translate('resources.cardOrarioSpeciali.fields.ignoreOrphanedPunch')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="includePunchInAutomaticTimeDiscriminationPhase" checked={record.includePunchInAutomaticTimeDiscriminationPhase} />
                            } label={translate('resources.cardOrarioSpeciali.fields.includePunchInAutomaticTimeDiscriminationPhase')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="partialReceiptsIntoAssignedStiff" checked={record.partialReceiptsIntoAssignedStiff} />
                            } label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedStiff')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="partialReceiptsIntoAssignedFlex" checked={record.partialReceiptsIntoAssignedFlex} />
                            } label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedFlex')} />
                        </TableCell>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="receiptsAssignedInAbsenceOfPunch" checked={record.receiptsAssignedInAbsenceOfPunch} />
                            } label={translate('resources.cardOrarioSpeciali.fields.receiptsAssignedInAbsenceOfPunch')} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            {translate('resources.cardOrarioSpeciali.fields.subTitle4')}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <FormControlLabel control={
                                <CheckBox id="omitDescriptionInServiceOrders" checked={record.omitDescriptionInServiceOrders} />
                            } label={translate('resources.cardOrarioSpeciali.fields.omitDescriptionInServiceOrders')} />
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CardOrarioSpeciali;