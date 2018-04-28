import { Component, OnInit } from '@angular/core';
import { MotorcycleService } from '../motorcycle.service';

@Component({
  selector: 'app-motorcycle-compare',
  templateUrl: './motorcycle-compare.component.html',
  styleUrls: ['./motorcycle-compare.component.css']
})
export class MotorcycleCompareComponent implements OnInit {

  brands: any[];

  constructor(private motorcycleService: MotorcycleService) { }

  ngOnInit() {
    this.brands = this.motorcycleService.getBrands();
  }

}
