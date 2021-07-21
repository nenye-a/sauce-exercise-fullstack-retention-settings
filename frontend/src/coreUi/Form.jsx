import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
  let { children, onSubmit, ...otherProps } = props;
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
      {...otherProps}
    >
      {children}
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;
