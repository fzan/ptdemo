import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="descrizione" /></ReferenceInput>
            <TextInput source="dalle" />
            <TextInput source="tipo" />
            <TextInput source="ora" />
            <TextInput source="minuti" />
            <TextInput source="toll" />
        </SimpleForm>
    </Edit>
);