import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, DateInput, SelectInput } from "react-admin"

export const PauseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="description" />
            <TextInput source="from" />
            <TextInput source="to" />
            <TextInput source="min" />
            <TextInput source="max" />
            <DateInput source="obbl" />
            <TextInput source="tipologia" />
            <DateInput source="entry" />
            <TextInput source="surpluses" />
            <DateInput source="reporting" />
        </SimpleForm>
    </Create>
);