import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchCityInput') searchCityInput: ElementRef;
  searchCityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchCityForm = this.formBuilder.group({
      q: ['']
    });
  }

  seachCity() {
    console.log(this.searchCityInput.nativeElement.value);
  }
}
