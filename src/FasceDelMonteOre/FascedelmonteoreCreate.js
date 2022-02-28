import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const FascedelmonteoreCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="descrizione" /></ReferenceInput>
            <TextInput source="causale" />
            <TextInput source="dalle" />
            <TextInput source="alle" />
        </SimpleForm>
    </Create>
);