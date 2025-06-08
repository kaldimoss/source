import { module, test } from 'qunit';
import { setupTest } from 'play/tests/helpers';

module('Unit | Route | summer-zurich', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:summer-zurich');
    assert.ok(route);
  });
});
