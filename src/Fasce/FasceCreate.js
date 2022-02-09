import * as React from "react"
import { Create, TextInput, SelectInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <DateInput source="causale" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
            <DateInput source="priorita" />
        </SimpleForm>
    </Create>
);