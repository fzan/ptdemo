import * as React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

export const ArrotondamentotimbratureEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <ReferenceInput source="scheduleId" reference="schedules"><SelectInput optionText="description" /></ReferenceInput>
            <TextInput source="v" />
            <TextInput source="from" />
            <TextInput source="type" />
            <TextInput source="hour" />
            <TextInput source="minutes" />
            <TextInput source="plus_toll" />
            <TextInput source="cumulate" />
        </SimpleForm>
    </Edit>
);