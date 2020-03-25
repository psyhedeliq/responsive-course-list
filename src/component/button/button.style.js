import styled from 'styled-components';

const getCategory = category => {
  const categoryList = {
    primary: '#00aeef',
    outline: 'transparent'
  };

  if (categoryList.hasOwnProperty(category)) {
    return categoryList[category];
  }
  return categoryList.primary;
};

export const StyledLinkButton = styled.a`
  background-color: ${({ category }) => getCategory(category)};
  font-size: 15px;
  line-height: 42px;
  height: 42px;
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0 20px;
  border-radius: 4px;
`;
