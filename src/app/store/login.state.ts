import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SetLogged, SetUserType } from './login.actions';
import { LoginStateModel } from './login.model';

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    logged: false,
    userType: '',
  },
})
@Injectable()
export class LoginState {
  @Action(SetLogged)
  setLogged(ctx: StateContext<LoginStateModel>, action: SetLogged) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      logged: action.logged,
    });
  }

  @Action(SetUserType)
  setUserType(ctx: StateContext<LoginStateModel>, action: SetUserType) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      userType: action.userType,
    });
  }
}
