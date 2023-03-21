import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/logo-goit.svg';

export const List = styled.ul`
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  width: 380px;
  height: 460px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled(Icon)``;

export const BackgroundImage = styled.img`
  align-self: center;
  margin-bottom: 18px;
`;

export const AccentLine = styled.div`
  width: 380px;
  height: 8px;
  margin-bottom: 62px;
  align-self: center;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: fixed;
  align-self: center;
  position: absolute;
  top: 40%;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
  align-self: center;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  align-self: center;

  color: #ebd8ff;
`;

export const Button = styled.button`
  align-self: center;
  width: 196px;
  height: 50px;

  /* background: #ebd8ff; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  background-color: ${props => (props.selected ? '#5CD3A8' : '#EBD8FF')};
`;
