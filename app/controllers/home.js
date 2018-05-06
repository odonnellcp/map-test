import Controller from '@ember/controller';

export default Controller.extend({
  latitude: '',
  longitude: '',
  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,

  actions: {
    updateMap(){
      this.set('lat', this.get('latitude'));
      this.set('lng', this.get('longitude'));
      this.set('latitude', '');
      this.set('longitude', '');
    }
  }
});
