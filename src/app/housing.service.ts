import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

 /*  url = 'http://localhost:3000/locations'; */

  protected housingLocationList:
  Housinglocation [] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `./assets/img/apartment_bldg250x250.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `./assets/img/bldg1.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `./assets/img/bldg2.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `./assets/img/bldg3.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `./assets/img/bldg4.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `./assets/img/bldg5.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `./assets/img/bldg6.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `./assets/img/bldg7.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `./assets/img/bldg8.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `./assets/img/bldg9.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
    /*
    {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `./assets/img/apartment_bldg250x250.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
    }
    */
];

getAllHousingLocations():
Housinglocation[] {
  return this.housingLocationList;
}

getHousingLocationById(id: number):
Housinglocation | undefined {
 return this.housingLocationList.find(housingLocation => housingLocation.id === id);
}

submitApplication(
  firstName: string,
  lastName: string,
  email: string) {
  console.log(`Homes application received: firstName:
  ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
