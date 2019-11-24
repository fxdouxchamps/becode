import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { EnvironmentConfig } from './env-config';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EnvironmentConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: EnvironmentConfig) => () => config.load(),
      deps: [EnvironmentConfig],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
