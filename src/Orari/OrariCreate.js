import * as React from "react"
import { Create, TextInput, SelectInput, BooleanInput, NumberInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const OrariCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="scheduleId" reference="schedules">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="code" />
            <DateInput source="brief" />
            <TextInput source="description" />
            <DateInput source="color" />
            <TextInput source="type" />
            <TextInput source="base" />
            <TextInput source="minimum" />
            <TextInput source="savingDay" />
            <TextInput source="from" />
            <TextInput source="to" />
            <NumberInput source="nextDays" />
            <BooleanInput source="onMoreDays" />
            <BooleanInput source="causalCodesOutOfRange" />
            <DateInput source="saturday" />
            <DateInput source="sundayHolyday" />
            <DateInput source="preHolyday" />
            <BooleanInput source="reportPunchOutOfBands" />
            <BooleanInput source="overtimeMustBeAuthorized" />
            <TextInput source="rounding" />
            <BooleanInput source="applyRoundingInBandsToBeAuthorized" />
            <ReferenceInput source="profilosId" reference="profilos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="selectiveCompensation" />
            <DateInput source="cumulativeAbsence" />
            <DateInput source="cumulativeOvertime" />
            <TextInput source="maximal" />
            <BooleanInput source="positiveBalanceForCompensateHours" />
            <BooleanInput source="bandsInCaseOfAbsence" />
            <BooleanInput source="extendOverMissedPauses" />
            <BooleanInput source="adaptiveDeductionOfStandardPunch" />
            <DateInput source="eUSequences" />
            <DateInput source="punchOutsideElasticBand" />
            <DateInput source="movePunchType" />
            <BooleanInput source="deactivateBandsAfterIdentifiedType" />
            <BooleanInput source="scheduleBecomeStiff" />
            <BooleanInput source="applyAutomaticCompensation" />
            <BooleanInput source="generateAutomaticEntries" />
            <BooleanInput source="realTypesWithoutStamping" />
            <TextInput source="theoreticalHours" />
            <TextInput source="typeOfDay" />
            <BooleanInput source="ignoreOrphanedPunch" />
            <BooleanInput source="includePunchInAutomaticTimeDiscriminationPhase" />
            <BooleanInput source="partialReceiptsIntoAssignedStiff" />
            <BooleanInput source="partialReceiptsIntoAssignedFlex" />
            <BooleanInput source="receiptsAssignedInAbsenceOfPunch" />
            <BooleanInput source="omitDescriptionInServiceOrders" />
        </SimpleForm>
    </Create>
);