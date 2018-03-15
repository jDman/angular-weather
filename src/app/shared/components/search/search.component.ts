import { Component, OnInit, AfterViewInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchCityInput') searchCityInput: ElementRef;

  @Output() search = new EventEmitter<string>();

  searchCityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchCityForm = this.formBuilder.group({
      q: ['']
    });
  }

  seachCity() {
    this.search.emit(this.searchCityInput.nativeElement.value);
    this.searchCityInput.nativeElement.value = '';
    this.searchCityForm.reset();
  }
}
