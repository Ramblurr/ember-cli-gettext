import Ember from 'ember';
import gettext from 'ember-cli-gettext/gettext';

export function getText(params, hash) {
  return new Ember.Handlebars.SafeString(gettext._t(...params, hash));
}

export default Ember.Helper.helper(getText);
