import React from 'react';
import ReactDOM from 'react-dom';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById('root'),
);

// 컴포넌트의 속성값 이용하기
// ReactDOM.render(
//   <Provider store={store}>
//     <div>
//       <FriendMain ageLimit={30} />
//       <TimelineMain ageLimit={15} />
//     </div>
//   </Provider>,
//   document.getElementById('root'),
// );
