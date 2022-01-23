import React from 'react'
import styled from 'styled-components'

import user from './../../assets/user.png'

import { ReactComponent as LocationIcon } from './../../assets/icon-location.svg'
import { ReactComponent as WebsiteIcon } from './../../assets/icon-website.svg'
import { ReactComponent as TwitterIcon } from './../../assets/icon-twitter.svg'
import { ReactComponent as ConpanyIcon } from './../../assets/icon-company.svg'

const FlexContainer = styled.div`
  margin-top: 16px;
  padding: 33px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: var(--color-gb-block);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`

const Header = styled.div`
  display: flex;

  h4:first-child {
    color: var(--color-blue);
  }
`

const Username = styled.h4`
  color: var(--color-blue);
`

const Join = styled.h4`
  color: var(--color-join);
`

const UserImg = styled.img.attrs(props => {
  return {
    src: props.src,
    alt: props.alt,
  }
})`
  margin-right: 19px;
  width: 70px;
  height: 70px;
`

const Body = styled.div`
  margin-top: 33px;
`

const UserStats = styled.div`
  margin-top: 23px;
  padding: 18px 15px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-stats);
`

const StatItem = styled.div`
  width: 81px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 11px;

    &:nth-child(2) {
    }
  }
`

const UserLinks = styled.ul`
  margin-top: 24px;
`

const ListItem = styled.li`
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const Link = styled.a.attrs(props => {
  return {
    href: props.href,
    margin: props.margin,
  }
})`
  display: inline-block;
  margin-left: ${props => props.margin}px;
`

function UserCard() {
  return (
    <FlexContainer>
      <Header>
        <UserImg src={user} alt='user' />
        <div>
          <h3>The Octocat</h3>
          <Username>@octobar</Username>
          <Join>Joined 25 Jan 2011</Join>
        </div>
      </Header>
      <Body>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <UserStats>
          <StatItem>
            <span>Repos</span>
            <h3>8</h3>
          </StatItem>
          <StatItem>
            <span>Followers</span>
            <h3>3938</h3>
          </StatItem>
          <StatItem>
            <span>Following</span>
            <h3>9</h3>
          </StatItem>
        </UserStats>
        <UserLinks>
          <ListItem>
            <LocationIcon />
            <Link margin={19}>San Francisco</Link>
          </ListItem>
          <ListItem>
            <WebsiteIcon />
            <Link margin={13}>https://github.blog</Link>
          </ListItem>
          <ListItem>
            <TwitterIcon />
            <Link margin={13}>Not Available</Link>
          </ListItem>
          <ListItem>
            <ConpanyIcon />
            <Link margin={13}>@github</Link>
          </ListItem>
        </UserLinks>
      </Body>
    </FlexContainer>
  )
}

export { UserCard }
