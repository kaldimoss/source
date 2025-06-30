import EmberRouter from '@ember/routing/router';
import config from 'play/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('studio');
  this.route('reviews');
  this.route('contact');
  this.route('cv');
  this.route('texts');
  this.route('general-atm');
  this.route('summer-zurich');
  this.route('category-page', { path: '/:slug' });
  this.route('page1');
  this.route('page2', { path: '/page2/:slug' });
});
