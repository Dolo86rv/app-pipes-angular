import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocal = signal<'es' | 'fr' | 'en'>('en');

  constructor() {
    this.currentLocal.set(
      localStorage.getItem('locale') as AvailableLocales ?? 'es');
  }

  getLocale() {
    return this.currentLocal();
  }

  changeLocale(locale: AvailableLocales){
    localStorage.setItem('locale', locale);
    this.currentLocal.set(locale);

    window.location.reload();
  }

}
