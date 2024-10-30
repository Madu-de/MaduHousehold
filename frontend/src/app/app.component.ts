import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private htmlElement = inject(DOCUMENT).documentElement;
  private translateSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translateSubscription = this.translate.onDefaultLangChange.subscribe(langChangeEv => {
      const lang = document.createAttribute('lang');
      lang.value = langChangeEv.lang;
      this.htmlElement.attributes.setNamedItem(lang);
    });
    this.translate.setDefaultLang('en');
  }

  ngOnDestroy() {
    this.translateSubscription?.unsubscribe();
  }
}
