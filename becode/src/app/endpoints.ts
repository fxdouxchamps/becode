import { Injectable } from '@angular/core';
import { EnvironmentConfig } from './env-config';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {

  constructor(
    private environmentConfig: EnvironmentConfig
  ) { }
  private SUFFIX = '/';

  public endpoints = {
    application: `${this.getBaseUrl()}/application`,
  };

  getBaseUrl() {
    return `${this.environmentConfig.environment.BASE_URL}`;
  }
}
