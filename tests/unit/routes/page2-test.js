import { module, test } from 'qunit';
import { setupTest } from 'play/tests/helpers';

module('Unit | Route | page2', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:page2');
    assert.ok(route);
  });
});
