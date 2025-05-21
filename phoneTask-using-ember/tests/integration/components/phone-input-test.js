import { module, test } from 'qunit';
import { setupRenderingTest } from 'phone-task/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | phone-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PhoneInput />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PhoneInput>
        template block text
      </PhoneInput>
    `);

    assert.dom().hasText('template block text');
  });
});
