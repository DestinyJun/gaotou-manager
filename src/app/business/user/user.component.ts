import { Component, OnInit } from '@angular/core';
import {Car} from '../../common/model/user-model';
import {UserService} from '../../common/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public cars: Car[];
  public cols: any[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.userService.getCarsSmall().then(cars => this.cars = cars);
    this.cars = [
      {vin: 'dsad231ff', year: '2012', brand: 'VW', color: 'Orange'},
      {vin: 'gwregre345', year: '2011', brand: 'Audi', color: 'Black'},
      {vin: 'h354htr', year: '2005', brand: 'Renault', color: 'Gray'},
      {vin: 'j6w54qgh', year: '2003', brand: 'BMW', color: 'Blue'},
    ];
  }

}
