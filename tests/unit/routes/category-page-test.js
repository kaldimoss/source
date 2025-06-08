import { module, test } from 'qunit';
import { setupTest } from 'play/tests/helpers';

module('Unit | Route | category-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:category-page');
    assert.ok(route);
  });
});
