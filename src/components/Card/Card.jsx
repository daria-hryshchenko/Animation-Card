import React, { useState } from 'react';
import usersData from 'servises/users.json';
import CardBackground from 'images/card-background.png';

import {
  List,
  Item,
  Logo,
  BackgroundImage,
  AccentLine,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './Card.styled';
export const Card = () => {
  const { id, user, tweets, followers, avatar } = usersData;

  const [isActive, setActive] = useState(
    JSON.parse(localStorage.getItem('isActive')) || false
  );
  const [follow, setFollow] = useState(
    JSON.parse(localStorage.getItem('follow')) || followers
  );

  const onClick = event => {
    event.preventDefault();
    setActive(!isActive);
    const newValue = !isActive;
    setActive(newValue);
    const newFollow = newValue ? follow + 1 : follow - 1;
    setFollow(newFollow);
    localStorage.setItem('follow', JSON.stringify(newFollow));
    localStorage.setItem('isActive', JSON.stringify(newValue));
  };

  return (
    <List>
      <Item id={id}>
        <Logo alt="GoIt" />
        <BackgroundImage
          src={CardBackground}
          alt="question mark and check mark icons"
          width="308px"
        />
        <AccentLine />
        <Avatar src={avatar} alt={user} />
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{follow} followers</Followers>
        <Button type="button" id={id} onClick={onClick} selected={isActive}>
          {isActive === true ? 'Following' : 'Follow'}
        </Button>
      </Item>
    </List>
  );
};
