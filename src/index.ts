/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
const user = new User();
const company = new Company();
document.getElementById("map");

let div = document.getElementById("map") as HTMLElement;

new google.maps.Map(div, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
