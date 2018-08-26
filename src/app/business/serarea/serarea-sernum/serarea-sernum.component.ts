import { Component, OnInit } from '@angular/core';
import {SerareaService} from '../../../commom/services/serarea.service';

@Component({
  selector: 'app-serarea-sernum',
  templateUrl: './serarea-sernum.component.html',
  styleUrls: ['./serarea-sernum.component.css']
})
export class SerareaSernumComponent implements OnInit {
  public sernums: Array<any>;
  public selectedSer: string[] = [];
  constructor(
    private serService: SerareaService
  ) { }

  ngOnInit() {
    this.uploadSernumData();
  }
  public uploadSernumData(): void {
    this.serService.getDerareas().subscribe(
      (value) => {
        this.sernums = value;
      }
    );
  }
  public addSernumWindow(): void {}
}
