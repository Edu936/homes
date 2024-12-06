import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public housingLocationList!: HousingLocation[];
  
  private housingService: HousingService = inject(HousingService);
  
  ngOnInit(): void {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
