import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang?: string;
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang)
  }

  
}


