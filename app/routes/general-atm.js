import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class GeneralAtmRoute extends Route {
  @service store;

  async model() {
    return RSVP.hash({
      block1: await this.store.findRecord('page', 27),
    });
  }
}
