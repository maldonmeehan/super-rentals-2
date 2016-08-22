import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image') ? this.get('image'):"http://kingofwallpapers.com/house/house-026.jpg",
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
