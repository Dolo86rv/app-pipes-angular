import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocales, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-pages',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-pages.component.html',
})
export default class BasicPagesComponent {
  localService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('Dolores');
  nameUpper = signal('DOLORES');
  fullName = signal('doloRes MarTinEz');

  customDay = signal( new Date());

  tickeingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDay.set(new Date());
    }
    , 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocales) {
    this.localService.changeLocale(locale);
  }

}
