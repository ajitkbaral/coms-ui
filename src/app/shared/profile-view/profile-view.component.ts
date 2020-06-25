import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/interface/interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  @Input() customer: Customer;

  constructor() {}

  ngOnInit(): void {}
}
