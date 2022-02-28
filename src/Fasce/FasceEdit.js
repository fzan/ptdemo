import * as React from "react"
import { Edit, TextInput, SelectInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="causalCode" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
            <TextInput source="priorita" />
        </SimpleForm>
    </Edit>
);