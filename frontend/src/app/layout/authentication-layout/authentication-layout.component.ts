import {Component, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrl: './authentication-layout.component.scss'
})
export class AuthenticationLayoutComponent {
  languages: Map<string, string> = new Map<string, string>([
    ['en', '🇺🇸'],
    ['de', '🇩🇪'],
    ['es', '🇪🇸'],
    ['fr', '🇫🇷']
  ]);
  languagesKeys = Array.from(this.languages.keys());
  currentLanguageIndex: number = 0;
  flagSig = signal(this.languages.get(this.languagesKeys[this.currentLanguageIndex]));

  constructor(public translateService: TranslateService) {}

  switchLanguage() {
    this.currentLanguageIndex++;
    this.translateService.setDefaultLang(this.languagesKeys[this.currentLanguageIndex]);
    this.flagSig.set(this.languages.get(this.languagesKeys[this.currentLanguageIndex]));
    if (this.currentLanguageIndex + 1 === this.languagesKeys.length) {
      this.currentLanguageIndex = -1;
    }
  }
}
