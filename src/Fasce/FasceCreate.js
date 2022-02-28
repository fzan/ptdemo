import * as React from "react"
import { Create, TextInput, SelectInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="orarios"><SelectInput optionText="description" /></ReferenceInput>
            <DateInput source="causalCode" />
            <TextInput source="from" />
            <TextInput source="to" />
            <DateInput source="priority" />
        </SimpleForm>
    </Create>
);