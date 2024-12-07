import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _housingService: HousingService = inject(HousingService);

  public housingLocation!: HousingLocation | undefined;

  ngOnInit(): void {
    const housingLocationId = Number(this._route.snapshot.params["id"]);
    this.housingLocation = this._housingService.getHousingLocationById(housingLocationId); 
  }
  
}
