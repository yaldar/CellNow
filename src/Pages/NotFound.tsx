/** @jsxImportSource @emotion/react */
import {
  jsx, css, Global, ClassNames,
} from '@emotion/react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { verticalCenterStyle } from '../utils';

function NotFound() {
  return (
    <div css={verticalCenterStyle}>
      <h1>Page not found or not implemented yet</h1>
      <Button component={RouterLink} to="/" color="primary" variant="contained">
        Home
      </Button>
    </div>
  );
}

export default NotFound;
