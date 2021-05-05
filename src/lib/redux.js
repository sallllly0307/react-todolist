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

//Reducerは、actionを受けてstateを変更するの為のメソッドのこと
//Reducerは、単一のタスクの状態を変更するだけにする
function taskStateReducer(taskState) {
    return (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, state: taskState } : task
        ),
      };
    };
  }
  // The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {
      case actions.ARCHIVE_TASK:
        return taskStateReducer('TASK_ARCHIVED')(state, action);
      case actions.PIN_TASK:
        return taskStateReducer('TASK_PINNED')(state, action);
      default:
        return state;
    }
  };