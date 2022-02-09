import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const TimbraturetipoEdit = props => (
    <Edit {...props}>
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
    </Edit>
);