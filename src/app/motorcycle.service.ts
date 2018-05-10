import { Injectable } from '@angular/core';
import * as data from './motos';

@Injectable()
export class MotorcycleService {
  motos = data.default;

  constructor() {}

  getBrands() {
    
    //return Array.from(new Set(this.motorcycles.map(x => x.brand)));
    return Array.from(new Set(this.motos.map(x => x.fabricante)));
  }

  getModels(brand) {
    return Array.from(new Set(this.motos.filter(x => x.fabricante == brand).map(x => ({ model: x.marcaModelo, id: x.id }))));
  }

  getMoto(id) {
    return this.motos.find(x => x.id == id);
  }
}
