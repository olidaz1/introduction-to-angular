import { Component, OnInit } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingLocationListServiceService } from './services/housing-location-list-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [];

  selectedLocation: HousingLocation | undefined;

  constructor(private readonly housingLocationListService: HousingLocationListServiceService) {}

  ngOnInit(): void {
    this.housingLocationListService.getHousingLocationList().subscribe((list: HousingLocation[]) =>{
      this.housingLocationList = list;
    } );
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
