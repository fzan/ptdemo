import React from "react";
import { Admin, Resource, resolveBrowserLocale } from "react-admin";
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
import { ProfiliList } from "./Profili/ProfiliList"

import UserIcon from "@material-ui/icons/Group";
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'
import RestoreIcon from '@material-ui/icons/Restore'
import LabelIcon from '@material-ui/icons/Label'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./data";

import MyLayout from "./Layout/AppLayout";

const raLanguageItalian = require('ra-language-italian');

const messages = {
  "it": merge(raLanguageItalian, italianCustom),
  "en": merge(englishMessages, englishCustom)
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale] ? messages[locale] : messages.it, resolveBrowserLocale());


const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} i18nProvider={i18nProvider} layout={MyLayout} >
    <Resource name="schedules" list={OrariList} edit={OrariEdit} create={OrariCreate} icon={AccessTimeIcon} />
    <Resource name="profilos" list={ProfiliList} icon={UserIcon} />
    <Resource name="voices" list={VociList} />
    <Resource name="workingDayBands" list={FasceList} edit={FasceEdit} create={FasceCreate} icon={CollectionsBookmarkIcon} />
    <Resource name="workingHourBands" list={FascedelmonteoreList} edit={FascedelmonteoreEdit} create={FascedelmonteoreCreate} icon={RestoreIcon} />
    <Resource name="punchTypes" list={TimbraturetipoList} edit={TimbraturetipoEdit} create={TimbraturetipoCreate} icon={LabelIcon} />
    <Resource name="punchRoundings" list={ArrotondamentotimbratureList} edit={ArrotondamentotimbratureEdit} create={ArrotondamentotimbratureCreate} icon={RotateRightIcon} />
    <Resource name="overtimeRoundings" list={ArrotondamentostraordinarioList} edit={ArrotondamentostraordinarioEdit} create={ArrotondamentostraordinarioCreate} icon={RotateLeftIcon} />
    <Resource name="pauses" list={PauseList} edit={PauseEdit} create={PauseCreate} icon={PauseCircleOutlineIcon} />
  </Admin>
);

export default App;
