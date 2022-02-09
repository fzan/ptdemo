import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const FascedelmonteoreEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="causale" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
        </SimpleForm>
    </Edit>
);