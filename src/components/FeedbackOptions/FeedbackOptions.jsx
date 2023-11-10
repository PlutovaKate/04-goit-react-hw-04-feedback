import React from 'react';
import { List, BtnList, ListItem } from './FeedbackOptions.styled';
import { HiHeart } from 'react-icons/hi2';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <ListItem key={index} option={option}>
          <BtnList
            option={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            <HiHeart />
            {option}
          </BtnList>
        </ListItem>
      ))}
    </List>
  );
};

export default Feedback;
