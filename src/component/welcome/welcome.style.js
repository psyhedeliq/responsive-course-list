import styled from 'styled-components';
import styledWelcomeBackground from '../../asset/image/AdobeStock_299034266.png';

export const StyledWelcome = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url(${styledWelcomeBackground});
  background-position: center;
  background-size: cover;
  padding: 3px 16px 37px;
`;

export const StyledWelcomeTitle = styled.h1`
  min-height: 88px;
  font-size: 36px;
  line-height: 44px;
  color: white;
`;

export const StyledWelcomeDescription = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-weight: medium;
  color: white;
`;
