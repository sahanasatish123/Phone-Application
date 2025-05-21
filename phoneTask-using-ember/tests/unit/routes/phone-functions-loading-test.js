import { module, test } from 'qunit';
import { setupTest } from 'phone-task/tests/helpers';

module('Unit | Route | phone-functions-loading', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:phone-functions-loading');
    assert.ok(route);
  });
});
