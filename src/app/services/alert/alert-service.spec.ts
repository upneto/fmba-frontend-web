import { Router } from '@angular/router';
import { AlertService } from './alert-service';

describe('AlertService', () => {
  it('should create an instance', () => {
    expect(new AlertService(new Router())).toBeTruthy();
  });
});
