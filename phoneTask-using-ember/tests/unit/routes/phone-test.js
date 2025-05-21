import { module, test } from 'qunit';
import { setupTest } from 'phone-task/tests/helpers';

module('Unit | Route | phone', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:phone');
    assert.ok(route);
  });
});
