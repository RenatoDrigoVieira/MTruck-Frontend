import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SetLogged, SetLoggout, SetUser } from './login.actions';
import { LoginStateModel } from './login.model';

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    logged: false,
    name: '',
    userType: '',
    empresaId: '',
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

  @Action(SetUser)
  setUser(ctx: StateContext<LoginStateModel>, action: SetUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      name: action.name,
      userType: action.userType,
      empresaId: action.empresaId,
    });
  }
  @Action(SetLoggout)
  setLoggout(ctx: StateContext<LoginStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      logged: false,
      name: '',
      userType: '',
      empresaId: '',
    });
  }
}
