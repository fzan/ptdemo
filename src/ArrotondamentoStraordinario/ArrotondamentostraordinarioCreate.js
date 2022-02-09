import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="dalle" />
            <TextInput source="tipo" />
            <DateInput source="ora" />
            <DateInput source="minuti" />
            <DateInput source="toll" />
        </SimpleForm>
    </Create>
);