import React from 'react'
import styled from 'styled-components'

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
  align-items: flex-start;
  border-radius: 15px;
  background-color: var(--color-gb-block);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;

  @media screen and (min-width: 767px) {
    margin-top: 24px;
    padding: 40px;
  }

  @media screen and (min-width: 1023px) {
    padding-bottom: 0;
  }
`

const Header = styled.div`
  display: flex;

  @media screen and (min-width: 1023px) {
    width: 100%;

    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`

const Name = styled.h3`
  @media screen and (min-width: 767px) {
    font-size: 26px;
    line-height: 38px;
    margin-bottom: 2px;
  }
`

const Username = styled.h4`
  a {
    color: var(--color-blue);
  }

  @media screen and (min-width: 767px) {
    font-size: 16px;
    line-height: 19.25px;
    margin-bottom: 4px;
  }
`

const GithubLink = styled.a.attrs(props => {
  return {
    href: `https://github.com/${props.username}`,
  }
})`
  color: var(--color-blue);
  text-decoration: none;
`

const Join = styled.h4`
  color: var(--color-join);

  @media screen and (min-width: 767px) {
    font-size: 15px;
    line-height: 22px;
  }
`

const UserImg = styled.img.attrs(props => {
  return {
    src: props.src,
    alt: props.alt,
  }
})`
  display: block;
  margin-right: 19px;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media screen and (min-width: 767px) {
    width: 117px;
    height: 117px;
    margin-right: 41px;
  }
`

const Body = styled.div`
  margin-top: 33px;
  width: 100%;

  @media screen and (min-width: 1023px) {
    position: relative;
    left: 160px;
    bottom: 80px;
    width: 480px;
  }
`

const Bio = styled.p`
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`

const UserStats = styled.div`
  margin-top: 23px;
  padding: 18px 15px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-stats);

  @media screen and (min-width: 767px) {
    padding: 15px 96px 17px 32px;
    justify-content: space-between;
  }
`

const StatItem = styled.div`
  width: 81px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 11px;
  }

  @media screen and (min-width: 767px) {
    width: 72px;

    span {
      font-size: 13px;
      line-height: 19.25px;
    }

    h3 {
      font-size: 22px;
      line-height: 33px;
    }
  }
`

const UserInfo = styled.ul`
  margin-top: 24px;

  @media screen and (min-width: 767px) {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
  }

  @media screen and (min-width: 1023px) {
    margin-top: 45px;
  }
`

const ListItem = styled.li.attrs(props => {
  return {
    color: props.available ? '--color-text' : '--color-grey',
  }
})`
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 0px;
  }

  & > * {
    font-size: 13px;
    line-height: 19.25px;
    color: var(${props => props.color});
  }

  & > svg path {
    fill: var(${props => props.color});
  }

  & > svg path {
    fill: var(${props => props.color});
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 0;

    & > * {
      font-size: 15px;
      line-height: 22px;
    }
  }
`

const Link = styled.a.attrs(props => {
  return {
    href: props.href || null,
    margin: props.margin,
  }
})`
  display: inline-block;
  text-decoration: none;
  margin-left: ${props => props.margin}px;

  border-bottom: 1px solid transparent;

  &:hover {
    ${props =>
      props.href ? 'border-bottom: 1px solid var(--color-text)' : ''};
    transition: 0.3s ease;
  }
`

const Info = styled.span.attrs(props => {
  return {
    margin: props.margin,
  }
})`
  display: inline-block;
  margin-left: ${props => props.margin}px;
`

function UserCard({ data }) {
  return (
    <FlexContainer>
      <Header>
        <UserImg src={data.avatartUrl} alt='user' />
        <div>
          <div>
            <Name>{data.name}</Name>
            <Username>
              <GithubLink username={data.login}>@{data.login}</GithubLink>
            </Username>
          </div>
          <Join>Joined {data.joined}</Join>
        </div>
      </Header>
      <Body>
        <Bio>{data.bio || 'This profile has no bio'}</Bio>
        <UserStats>
          <StatItem>
            <span>Repos</span>
            <h3>{data.repos}</h3>
          </StatItem>
          <StatItem>
            <span>Followers</span>
            <h3>{data.followers}</h3>
          </StatItem>
          <StatItem>
            <span>Following</span>
            <h3>{data.following}</h3>
          </StatItem>
        </UserStats>
        <UserInfo>
          <ListItem available={!!data.location}>
            <LocationIcon />
            <Info margin={19}>{data.location || 'Not Available'}</Info>
          </ListItem>
          <ListItem available={!!data.blog}>
            <WebsiteIcon />
            <Link margin={13} href={data.blog}>
              {data.blog || 'Not Available'}
            </Link>
          </ListItem>
          <ListItem available={!!data.twitterUsername}>
            <TwitterIcon />
            <Info margin={13}>{data.twitterUsername || 'Not Available'}</Info>
          </ListItem>
          <ListItem available={!!data.company}>
            <ConpanyIcon />
            <Info margin={13}>{data.company || 'Not Available'}</Info>
          </ListItem>
        </UserInfo>
      </Body>
    </FlexContainer>
  )
}

export { UserCard }
