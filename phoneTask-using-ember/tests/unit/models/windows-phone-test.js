import { setupTest } from 'phone-task/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | windows phone', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('windows-phone', {});
    assert.ok(model, 'model exists');
  });
});
