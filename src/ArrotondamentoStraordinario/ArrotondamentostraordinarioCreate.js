import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="from" />
            <TextInput source="tipo" />
            <TextInput source="hour" />
            <TextInput source="minutes" />
            <TextInput source="toll" />
        </SimpleForm>
    </Create>
);