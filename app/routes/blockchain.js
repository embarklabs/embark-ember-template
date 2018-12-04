import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return {}
  },

  init () {
    this._super(...arguments)
    console.log('Inited')
  }
});
