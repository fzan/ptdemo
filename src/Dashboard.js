import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { useSetLocale, useLocale } from 'react-admin'

const convert = (item) => {
  if (item === "GB") return "en"
  else if (item === "IT") return "it"
  else if (item === "en") return "GB"
  else if (item === "it") return "IT"
}

const LocaleSwitcher = () => {
  const setLocale = useSetLocale();
  const locale = useLocale();
  const localeConverted = convert(locale)
  return (
    <>
      <Card>
        <h1>Demo</h1>
        <div>
          <div>Language</div>
          <ReactFlagsSelect
            countries={["IT", "GB"]}
            selected={localeConverted}
            showSelectedLabel={true}
            onSelect={code => { setLocale(convert(code)) }}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CardContent>Proietti Planet 2.0</CardContent>
      </Card>
    </>
  );
};

export default LocaleSwitcher