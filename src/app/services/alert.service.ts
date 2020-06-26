import { Injectable } from '@angular/core';
import { Alert } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public displayAlert: boolean;
  public alert: Alert;

  constructor() {}

  showAlertDialog(alert: Alert): void {
    this.alert = alert;
    this.displayAlert = true;
    setTimeout(() => (this.displayAlert = false), 2500);
  }

  dismissAlert(): void {
    this.displayAlert = false;
  }
}
