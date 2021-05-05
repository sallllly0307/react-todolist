//シンプルなredux store/actions/reducerを作る
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
  };