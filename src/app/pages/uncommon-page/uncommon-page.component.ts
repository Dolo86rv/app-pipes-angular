import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Dolores',
  age: 25,
  gender: 'female',
  country: 'Spain',
  city: 'Madrid',
};

const client2 = {
  name: 'Alex',
  age: 52,
  gender: 'male',
  country: 'Canada',
  city: 'Toronto',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }


  //i18n Plural
  clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos dos clientes',
    'other': 'tenemos # clientes',
  }

  clients = signal([
    'Dolores',
    'Alex',
    'Javier',
    'Joaquin',
    'Melissa',
    'Lola',
  ])

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'Dolores',
    age: 39,
    city: 'Madrid'
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  }
  );

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap( (value) => console.log('tap:', value))
  );
 }
