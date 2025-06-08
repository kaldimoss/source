import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { loc } from '@ember/string';
import RSVP from 'rsvp';

export default class Page2Route extends Route {
@service store;

  async model(params) {
    return await this.store.findRecord('page', params.slug);
  }

}
