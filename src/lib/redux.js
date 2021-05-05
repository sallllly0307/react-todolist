//シンプルなredux store/actions/reducerを作る
import { createStore } from 'redux';

// "actions" は、ストアに発生する可能性のある変更の「名前」
export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
  };
//アクションを実行するために必要なデータとアクションをバンドルする
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });