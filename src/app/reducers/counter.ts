import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export const increase =createAction('[COUNTER] increase');
export const decrease =createAction('[COUNTER] decrease');
export const clear =createAction('[COUNTER] clear');

export interface CounterState{
  count: number;

  newTestNumber:number;
  newTestObject: {};
}

export const initialState: CounterState={
  count: 0,

  newTestNumber:100,
  newTestObject: {
    "okok":"no",
    "c33":"jeje",
    45:12+3
  }
}

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({   //claer function => something in and something out (required)
    ...state,
    ddd: state.newTestNumber+state.count,
    count: state.count+1 // can't be => count: state.count++ because '++' changed previous 'state' value -> it is forbidden
  })),
  on(decrease, state=>({
    ...state,
    count: state.count-1
  })),
  on(clear, state=>({
    ...state,
    count: 0
  }))
)

export const featureSelector=createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
  featureSelector,
  state=>state.count,


  // featureSelector,
  // featureSelector,
  // (a, b, c)
)
