import { setupTest } from 'play/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | media item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('media-item', {});
    assert.ok(model, 'model exists');
  });
});
