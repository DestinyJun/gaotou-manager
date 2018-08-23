import {Component, OnInit} from '@angular/core';
import {Persons} from '../../common/model/user-model';
import {UserService} from '../../common/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public cars: Persons[];
  public cols: any[];
  public selectedCities: string[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.cols = this.userService.cols;
    this.cars = this.userService.cars;
  }

}
