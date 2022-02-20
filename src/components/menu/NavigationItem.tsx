import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
}

const NavigationItem: React.FC<Props> = ({ text, to }) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default NavigationItem;