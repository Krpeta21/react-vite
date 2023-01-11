import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export default function App() {
const users =[
    {
        userName: 'krpeta21',
        name: 'Irving Lopez',
        isFollowing: false
    },
    {
        userName: 'Careaga2000',
        name: 'Alfonso Careaga',
        isFollowing: true
    }
]
  return (
    <section className='App'>
    {
        users.map(user =>{
            const {userName, name,isFollowing} = user
            return(
                <TwitterFollowCard
                key={userName}
                userName={userName} 
                initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            )
        })
    }
    </section>    
  )
}
