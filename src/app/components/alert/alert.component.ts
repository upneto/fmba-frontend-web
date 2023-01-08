import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  public message!: any;

  constructor(private alertService: AlertService) { }


  ngOnInit(): void {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      console.log(message);
      this.message = message;
  });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
