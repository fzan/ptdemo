import * as React from "react"
import { Edit, TextInput, SelectInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="causalCodeId" />
            <TextInput source="from" />
            <TextInput source="to" />
            <TextInput source="priority" />
        </SimpleForm>
    </Edit>
);