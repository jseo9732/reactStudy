import React, { useContext, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', helloCount: 0 });
const SetUserContext = createContext(() => {});

export default function App() {
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>//상태값 병경 함수를 별도의 컴포넌틀로 내려줌
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}