import { Component, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class AbstractPages {
  /**
   * ---------------------------------------------------------------------------
   *
   *        ALERT
   *
   * ---------------------------------------------------------------------------
   */

  public alertType!: string;
  public alertMessage: string = '';

  private alertSubject = new Subject<string>();

  /** Alert componente */
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  showMessage(message: string, type: string) {
    this.alertType = type;
    this.alertSubject.next(message);
  }

  buildAlert() {
    this.alertSubject.subscribe((message) => (this.alertMessage = message));
    this.alertSubject.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
}
