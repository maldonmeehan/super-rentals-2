import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update (rental){
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image')  ? this.get('image'):"http://kingofwallpapers.com/house/house-026.jpg",
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost'))
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
