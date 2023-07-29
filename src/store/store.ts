// To access information from the store in a read only way (e.g., rendering or for CommandBar)
// useSnapshot(store).x

import { proxy } from 'valtio';
import companies from './data/companies';
import stages from './data/stages';
import integrations from './data/integrations';
import { Company, Integration, Notification, Stage, User } from './types';

export interface Store {
  activeCompany: Company | undefined;
  companies: Company[];
  stages: Stage[];
  integrations: Integration[];
  currentUser: User;
  otherUser: User;
  notifications: Notification[];
}

const store: Store = proxy({
  activeCompany: undefined,
  companies,
  stages,
  integrations,
  currentUser: {
    name: 'Scooby Dooby Doo',
    imgURL: 'https://en.wikipedia.org/wiki/File:Scooby-Doo.png',
  },
  otherUser: {
    name: 'Scrappy Doo',
    imgURL: 'https://static.wikia.nocookie.net/p__/images/8/8f/Scrappy-Doo_promo.png/revision/latest?cb=20190917160755&path-prefix=protagonist',
  },
  notifications: [],
});

export default store;
