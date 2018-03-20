import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchCityInput') searchCityInput: ElementRef;

  @Output() search = new EventEmitter<string>();

  searchCityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchCityForm = this.formBuilder.group({
      q: ['', Validators.required ]
    });
  }

  seachCity() {
    this.search.emit(this.searchCityInput.nativeElement.value);
    this.searchCityInput.nativeElement.value = '';
    this.searchCityForm.reset();
  }
}
