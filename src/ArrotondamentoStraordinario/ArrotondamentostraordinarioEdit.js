import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="from" />
            <TextInput source="tipo" />
            <TextInput source="hour" />
            <TextInput source="minuti" />
            <TextInput source="toll" />
        </SimpleForm>
    </Edit>
);