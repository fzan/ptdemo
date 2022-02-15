import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import merge from 'deepmerge'
import italianCustom from './Translations/italianCustom'
import englishCustom from "./Translations/englishCustom"
import englishMessages from 'ra-language-english'
import polyglotI18nProvider from 'ra-i18n-polyglot'

import { FasceList } from "./Fasce/FasceList";
import { FasceEdit } from "./Fasce/FasceEdit";
import { FasceCreate } from "./Fasce/FasceCreate";

import { OrariList } from "./Orari/OrariList"
import { OrariEdit } from "./Orari/OrariEdit";
import { OrariCreate } from "./Orari/OrariCreate";

import { FascedelmonteoreList } from "./FasceDelMonteOre/FascedelmonteoreList";
import { FascedelmonteoreEdit } from "./FasceDelMonteOre/FascedelmonteoreEdit";
import { FascedelmonteoreCreate } from "./FasceDelMonteOre/FascedelmonteoreCreate";

import { TimbraturetipoList } from "./TimbratureTipo/TimbraturetipoList";
import { TimbraturetipoEdit } from "./TimbratureTipo/TimbraturetipoEdit";
import { TimbraturetipoCreate } from "./TimbratureTipo/TimbraturetipoCreate";

import { ArrotondamentotimbratureList } from "./ArrotondamentoTimbrature/ArrotondamentotimbratureList";
import { ArrotondamentotimbratureEdit } from "./ArrotondamentoTimbrature/ArrotondamentoTimbratureEdit";
import { ArrotondamentotimbratureCreate } from "./ArrotondamentoTimbrature/ArrotondamentoTimbratureCreate";

import { ArrotondamentostraordinarioList } from "./ArrotondamentoStraordinario/ArrotondamentostraordinarioList";
import { ArrotondamentostraordinarioEdit } from "./ArrotondamentoStraordinario/ArrotondamentostraordinarioEdit";
import { ArrotondamentostraordinarioCreate } from "./ArrotondamentoStraordinario/ArrotondamentostraordinarioCreate";

import { PauseList } from "./Pause/PauseList";
import { PauseEdit } from "./Pause/PauseEdit";
import { PauseCreate } from "./Pause/PauseCreate";

import { VociList } from "./Voci/VociList";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import AdbIcon from '@material-ui/icons/Adb';

import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./data";

const raLanguageItalian = require('ra-language-italian');

const messages = {
  'en': merge(englishMessages, englishCustom),
  'it': merge(raLanguageItalian, italianCustom)
};

const i18nProvider = polyglotI18nProvider(locale => messages['it']); //locale


const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider} >
    <Resource name="orarios" list={OrariList} edit={OrariEdit} create={OrariCreate} icon={PostIcon} />
    <Resource name="profilos" />
    <Resource name="vocis" list={VociList} />
    <Resource name="fasceDellaGiornatas" list={FasceList} edit={FasceEdit} create={FasceCreate} icon={UserIcon} />
    <Resource name="fasceDelMonteOres" list={FascedelmonteoreList} edit={FascedelmonteoreEdit} create={FascedelmonteoreCreate} icon={AdbIcon} />
    <Resource name="timbratureTipos" list={TimbraturetipoList} edit={TimbraturetipoEdit} create={TimbraturetipoCreate} icon={UserIcon} />
    <Resource name="arrotondamentoTimbratures" list={ArrotondamentotimbratureList} edit={ArrotondamentotimbratureEdit} create={ArrotondamentotimbratureCreate} icon={UserIcon} />
    <Resource name="arrotondamentoStraordinarios" list={ArrotondamentostraordinarioList} edit={ArrotondamentostraordinarioEdit} create={ArrotondamentostraordinarioCreate} icon={UserIcon} />
    <Resource name="pauses" list={PauseList} edit={PauseEdit} create={PauseCreate} icon={UserIcon} />
  </Admin>
);

export default App;
