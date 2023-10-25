import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <section>
    <form>
      <input
      type="text"
      placeholder="Filter by city"
      #filter>
      <button
      class="primary"
      type="button"
      (click)="filterResults(filter.value)">
      Search
      </button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor ="let housingLocation of filteredLocationList"
    [housingLocation]="housingLocation">
  </app-housing-location>
  </section>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];

constructor() {
  this.housingLocationList =
this.housingService.getAllHousingLocations();
  this.filteredLocationList = this.housingLocationList;
}

filterResults(text: string) {
  if (!text) {
    this.filteredLocationList =
    this.housingLocationList;
  }

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation =>
    housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

/* constructor() {
  this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;

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
    {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
    },

    */
