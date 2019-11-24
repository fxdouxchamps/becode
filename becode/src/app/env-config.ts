import { Injectable } from '@angular/core';
import { Environment } from './types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var require: any;

@Injectable()
export class EnvironmentConfig {

  public environment: Environment;
  public version: string;

  constructor(
    private http: HttpClient
  ) {

  }

  public loadEnvironmentAtRuntime(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.getConfigFile().subscribe((config) => {
        this.environment = this.getEnvironmentByConfig(config.env);
        this.version = config.version;
        resolve();
      }, (error) => reject(error))
    });
  }

  private getConfigFile(): Observable<{ env: string, version: string }> {
    return this.http.get<{ env: string, version: string }>('assets/config.json');
  }

  private getEnvironmentByConfig(env: any): Environment {
    let envSuffix = '';
    if (env !== 'local') { // local is the default dev profile
      envSuffix = '.' + env;
    }
    const environment: Environment = require(`./../environments/environment${envSuffix}.ts`)['environment'];
    console.log('env:', environment);
    return environment;
  }

  public load(): Promise<any> {
    return this.loadEnvironmentAtRuntime();
  }
}
