import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="dalle" />
            <TextInput source="tipo" />
            <DateInput source="ora" />
            <DateInput source="minuti" />
            <DateInput source="toll" />
        </SimpleForm>
    </Edit>
);