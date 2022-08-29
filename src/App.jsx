import Profile from "./Profile/Profile"
import user from "./data/user.json";
import Statistics from './Statistics/Statistics'
    
function App(){
    return(<>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics/>
    </>)
}

export default App