import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AlertType } from 'src/app/enums/enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(public alertService: AlertService) {}

  ngOnInit(): void {}

  closeAlert() {
    this.alertService.dismissAlert();
  }

  getAlertClasses() {
    return {
      alert: true,
      'alert-success': this.alertService.alert.type === AlertType.SUCCESS,
      'alert-warning': this.alertService.alert.type === AlertType.WARNING,
      'alert-danger': this.alertService.alert.type === AlertType.DANGER,
      'alert-dismissible': true,
      fade: true,
      show: true,
    };
  }
}
