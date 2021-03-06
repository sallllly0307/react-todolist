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
  // reducer は、アクションごとにコンテンツがどのように変化するかを記述してくれる
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

// アプリが読み込まれたときの初期状態
// 通常サーバーからfetchする（らしい）
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];
  // 構成されたredux store をエキスポートする
export default createStore(reducer, { tasks: defaultTasks });