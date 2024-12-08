import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _housingService: HousingService = inject(HousingService);

  public housingLocation!: HousingLocation | undefined;
  public applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  ngOnInit(): void {
    const housingLocationId = parseInt(this._route.snapshot.params['id'], 10);
    this._housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication(): void {
    this._housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
    );
  }
  
}
