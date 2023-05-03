const div = document.getElementById("map") as HTMLElement;

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(div, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
