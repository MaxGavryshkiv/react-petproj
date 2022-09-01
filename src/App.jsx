import Profile from './Profile/Profile';
import user from './data/user.json';
import Statistics from './Statistics/Statistics';
import stats from './data/statistics.json';
import FriendLisl from './FriendList/FriendList';
import friendsData from './data/friends.json';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />

      <FriendLisl friends={friendsData} />

      <TransactionsHistory items={transactions} />
    </>
  );
}

export default App;
