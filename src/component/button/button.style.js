import styled from 'styled-components';

const getStyle = (category, property) => {
  const categoryList = {
    background: {
      primary: '#00aeef',
      outline: 'transparent',
      secondary: 'white'
    },
    color: {
      primary: 'white',
      outline: '#00aeef',
      secondary: 'black'
    }
  };

  if (categoryList[property].hasOwnProperty(category)) {
    return categoryList[property][category];
  }
  return categoryList[property].primary;
};

export const StyledLinkButton = styled.a`
  background: ${({ category }) => getStyle(category, 'background')};
  color: ${({ category }) => getStyle(category, 'color')};
  font-size: 15px;
  line-height: 42px;
  height: 42px;
  text-decoration: none;
  display: inline-block;
  padding: 0 10px;
  border-radius: 4px;
  ${({ selected }) => (selected ? 'border-bottom: 4px solid #00AEEF' : '')}
`;
