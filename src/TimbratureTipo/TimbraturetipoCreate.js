import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const TimbraturetipoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
            <DateInput source="gg" />
            <TextInput source="timbratura" />
            <TextInput source="tipo" />
        </SimpleForm>
    </Create>
);