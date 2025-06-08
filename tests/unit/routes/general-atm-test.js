import { module, test } from 'qunit';
import { setupTest } from 'play/tests/helpers';

module('Unit | Route | general_atm', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:general-atm');
    assert.ok(route);
  });
});
