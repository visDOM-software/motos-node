import { Component, OnInit } from '@angular/core';
import { MotorcycleService } from '../motorcycle.service';
import { Motorcycle } from '../motorcycle';

@Component({
  selector: 'app-motorcycle-compare',
  templateUrl: './motorcycle-compare.component.html',
  styleUrls: ['./motorcycle-compare.component.css']
})
export class MotorcycleCompareComponent implements OnInit {

  brands: any[] = null;
  models: any[] = null;
  moto = null;

  constructor(private motorcycleService: MotorcycleService) { }

  ngOnInit() {
    this.brands = this.motorcycleService.getBrands();
    this.models = null;
    this.moto = null;
  }

  getModels(brand) {
    this.models = this.motorcycleService.getModels(brand);
    this.moto = null;
  }

  getMoto(id) {
    this.moto = this.motorcycleService.getMoto(id);
  }

}
