import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const ArrotondamentotimbratureEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="dalle" />
            <TextInput source="tipo" />
            <DateInput source="ora" />
            <DateInput source="minuti" />
            <DateInput source="plus_toll" />
            <DateInput source="cumula" />
        </SimpleForm>
    </Edit>
);