import * as React from "react"
import { Create, TextInput, SelectInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const FasceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <DateInput source="causalCodeId" />
            <TextInput source="from" />
            <TextInput source="to" />
            <DateInput source="priority" />
        </SimpleForm>
    </Create>
);