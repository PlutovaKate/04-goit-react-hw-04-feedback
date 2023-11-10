import styled from 'styled-components';

const GetBorderColor = props => {
  switch (props.option) {
    case 'good':
      return props.theme.colors.good;
    case 'neutral':
      return props.theme.colors.neutral;
    case 'bad':
      return props.theme.colors.bad;
    default:
      return '#201e20';
  }
};

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const BtnList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-weight: 500;
  font-size: 18px;
  border: transparent;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.button};
  box-shadow: 3px 3px 3px ${GetBorderColor};
`;

export const ListItem = styled.li`
  :hover,
  focus {
    background-color: ${GetBorderColor};
    box-shadow: 3px 3px 3px ${p => p.theme.colors.button};
  }
`;
