import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentotimbratureCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="descrizione" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="dalle" />
            <TextInput source="tipo" />
            <TextInput source="ora" />
            <TextInput source="minuti" />
            <TextInput source="plus_toll" />
            <TextInput source="cumula" />
        </SimpleForm>
    </Create>
);