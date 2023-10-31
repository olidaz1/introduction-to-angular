import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from '../housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationListServiceService {

  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];
  constructor() { }

  getHousingLocationList() : Observable<Array<HousingLocation>> {
    return new Observable<Array<HousingLocation>>(observer => {
      observer.next(this.housingLocationList);
      observer.complete();
    });
  }
}
