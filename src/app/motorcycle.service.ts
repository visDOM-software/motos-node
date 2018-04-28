import { Injectable } from '@angular/core';
import { Motorcycle } from './motorcycle';

@Injectable()
export class MotorcycleService {

  motorcycles: Motorcycle[] = [
    { brand: "Suzuki", cubic: 648, engine: 4, id: 1, model: "Vstrom 650", power: "70hp" },
    { brand: "Yamaha", cubic: 148, engine: 4, id: 2, model: "R15", power: "13hp" },
    { brand: "Suzuki", cubic: 249, engine: 4, id: 3, model: "Inazuma", power: "24hp" }
  ];

  constructor() { }

  getBrands() {
    return Array.from(new Set(this.motorcycles.map(x => x.brand)));
  }

  getModels(brand) {
    return Array.from(new Set(this.motorcycles.filter(x => x.brand == brand).map(x => ({ model: x.model, id: x.id }))));
  }

  getMoto(id) {
    return this.motorcycles.find(x => x.id == id);
  }
}
