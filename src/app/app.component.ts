import { Component, OnInit } from '@angular/core';
import { selectConfig } from './store/selectors/config.selector';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
