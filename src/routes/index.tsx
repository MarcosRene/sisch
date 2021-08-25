import { Switch } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Ocurrence } from '../pages/Ocurrence';
import { OcurrenceList } from '../pages/OccurrenceList';
import { OcurrenceDetails } from '../pages/OccurenceDetails';
import { Success } from '../pages/Success';

import Route from './Route';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/ocurrences" component={OcurrenceList} isPrivate />
      <Route path="/new-ocurrence" component={Ocurrence} isPrivate />
      <Route path="/ocurrence/:id" component={OcurrenceDetails} isPrivate />
      <Route path="/success" component={Success} isPrivate />
    </Switch>
  );
}
