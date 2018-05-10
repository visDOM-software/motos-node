import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { MotorcycleService } from '../motorcycle.service';
import { Motorcycle } from '../motorcycle';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-motorcycle-compare',
  templateUrl: './motorcycle-compare.component.html',
  styleUrls: ['./motorcycle-compare.component.css']
})
export class MotorcycleCompareComponent implements OnInit {

  brands: any[] = null;
  models: any[] = null;
  models2: any[] = null;
  moto = null;
  model: any;

  constructor(private motorcycleService: MotorcycleService) { }

  ngOnInit() {
    this.brands = this.motorcycleService.getBrands();
    this.models = null;
    this.models2 = null;
    this.moto = null;
  }

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  thBrands = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .merge(this.focus$)
      .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
      .map(term => (term === '' ? this.brands : this.brands.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));

  @ViewChild('instance') instanceModels: NgbTypeahead;
  focusModel$ = new Subject<string>();
  clickModel$ = new Subject<string>();

  thModels = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .merge(this.focusModel$)
      .merge(this.clickModel$.filter(() => !this.instanceModels.isPopupOpen()))
      .map(term => (term === '' ? this.models : this.models.filter(v => v.model.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));

  formatter = (x: { model: string }) => x.model;

  getModels(brand) {
    this.models = this.motorcycleService.getModels(brand.item);
    this.moto = null;
  }

  getMoto(moto) {
    this.moto = this.motorcycleService.getMoto(moto.item.id);
  }

}
