import Model, { attr } from '@ember-data/model';

export default class MediaItemModel extends Model {
  @attr slug;
  @attr modules;
}
