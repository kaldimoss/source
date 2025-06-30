import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    let c = await this.store.findAll('category');

    return RSVP.hash({
      categories: c,
    });
  }
}
