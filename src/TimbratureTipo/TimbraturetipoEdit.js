import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const TimbraturetipoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="descrizione" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
            <TextInput source="gg" />
            <TextInput source="timbratura" />
            <TextInput source="tipo" />
        </SimpleForm>
    </Edit>
);