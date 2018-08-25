import { Component, OnInit } from '@angular/core';
import {Role} from '../../../common/model/limit-model';
import {LimitService} from '../../../common/services/limit.service';

@Component({
  selector: 'app-limit-role',
  templateUrl: './limit-role.component.html',
  styleUrls: ['./limit-role.component.css']
})
export class LimitRoleComponent implements OnInit {
  public roles: Role[];
  public selectedRole: string[] = [];
  constructor(
    public limitService: LimitService
  ) { }

  ngOnInit() {
    this.uploadRoleData();
  }
  public uploadRoleData(): void {
    this.limitService.getRoles().subscribe(
      (value) => {
        this.roles = value;
      }
    );
  }
  public addRoleWindow(): void {}

}
