import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { loc } from '@ember/string';
import RSVP from 'rsvp';

export default class CategoryPageRoute extends Route {
  @service store;

  async model(params) {
    let x = await this.store.findAll('location');
    let c = await this.store.findRecord('category', params.slug);
    let s = await this.store.query('page', {
      modules: {
        category: params.slug,
      },
    });

    return RSVP.hash({
      category: c,
      stories: s,
      locaction: x,
    });
  }
}
