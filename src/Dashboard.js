import React from 'react'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { useTranslate } from 'react-admin'

const LocaleSwitcher = () => {
  const translate = useTranslate()
  return (
    <>
      <Card>
        <h1>Demo</h1>
        <br />
        <br />
        <h4>{translate('resources.homeLabel.fields.homeLabel')}</h4>
        <br />
        <CardContent>Proietti Planet 2.0</CardContent>
      </Card>
    </>
  );
};

export default LocaleSwitcher