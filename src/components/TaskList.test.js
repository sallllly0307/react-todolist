import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    //テストを使用させる
    ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);
  
    //"task6（pinned）"というタイトルのタスクは、最後ではなく最初にレンダリングしたい
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);
  
    ReactDOM.unmountComponentAtNode(div);
  });