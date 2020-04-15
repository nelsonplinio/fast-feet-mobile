import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Letters, Image } from './styles';

export default function ImageProfile({ source, nameOfUser, ...rest }) {
  const letters = useMemo(() => {
    const [first, second] = nameOfUser.toUpperCase().split(' ');

    return `${first[0]}${second[0] || ''}`;
  }, [nameOfUser]);
  return (
    <Container {...rest}>
      {source && source.uri ? (
        <Image source={source} />
      ) : (
        <Letters>{letters}</Letters>
      )}
    </Container>
  );
}

ImageProfile.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  nameOfUser: PropTypes.string.isRequired,
};
