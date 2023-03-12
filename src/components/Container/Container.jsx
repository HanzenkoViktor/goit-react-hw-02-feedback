import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer } from './Container.styled';

const Container = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
