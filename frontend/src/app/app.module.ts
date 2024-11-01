import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {HttpLoaderFactory} from './app-translation.factory';
import {interceptors} from './core/interceptors/interceptors';
import {LayoutModule} from './layout/layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule, MicrosoftLoginProvider,
  SocialAuthServiceConfig, SocialLoginModule
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors(interceptors)
    ),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '', {
                oneTapEnabled: false,
              }
            )
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              ''
            )
          }
          /*{
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              ''
            )
          }*/
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
