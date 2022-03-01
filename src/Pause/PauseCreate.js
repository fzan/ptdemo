import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const PauseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="description" />
            <TextInput source="from" />
            <TextInput source="to" />
            <TextInput source="min" />
            <TextInput source="max" />
            <DateInput source="obbl" />
            <TextInput source="typology" />
            <DateInput source="entry" />
            <TextInput source="surpluses" />
            <DateInput source="reporting" />
        </SimpleForm>
    </Create>
);