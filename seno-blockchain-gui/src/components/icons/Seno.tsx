import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SenoIcon } from './images/chia.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SenoIcon} viewBox="0 0 150 58" {...props} />;
}
