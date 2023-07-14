import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase } from 'src/app/state/example.action';
import { selectFeatureCount } from 'src/app/state/example.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // counter$: Observable<number>;

  counter = 101010203;
  constructor(private store$: Store) {
    // this.counter$ = this.store$.select()

  }

  increaseCount() {
    this.store$.dispatch(increase())
  }

}
