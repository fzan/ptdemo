import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentostraordinarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="from" />
            <TextInput source="type" />
            <TextInput source="hour" />
            <TextInput source="minutes" />
            <TextInput source="toll" />
        </SimpleForm>
    </Edit>
);