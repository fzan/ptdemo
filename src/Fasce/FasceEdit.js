import * as React from "react"
import { Edit, TextInput, SelectInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <DateInput source="causale" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
            <DateInput source="priorita" />
        </SimpleForm>
    </Edit>
);