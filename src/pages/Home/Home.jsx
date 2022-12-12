import { NavLink } from 'react-router-dom'
import {Wrapper,Content} from './HomeElements'

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <h1>Share The World With Your Friend's</h1>
          <p>Chat App Let's You Connected with the world</p>

          <NavLink to="/chat">Get Started</NavLink>
        </div>
      </Content>
    </Wrapper>
  )
}
