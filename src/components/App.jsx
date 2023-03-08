import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';

import { FriendsList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  
  return (
    <div>        
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
          
    <FriendsList friends={friends}/> 
     
    <TransactionHistory items={transactions}/>
    </div>    
  );
};
