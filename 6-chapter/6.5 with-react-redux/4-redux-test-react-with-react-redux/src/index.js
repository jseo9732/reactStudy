import React from 'react';
import ReactDOM from 'react-dom';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  // 스토어 객체를 Provider 컴포넌트의 속성값으로 넣는다.
  <Provider store={store}>
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById('root'),
);