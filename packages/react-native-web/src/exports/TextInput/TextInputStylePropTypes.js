/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ColorPropType from '../ColorPropType';
import TextStylePropTypes from '../Text/TextStylePropTypes';
import { oneOf, string } from 'prop-types';

const TextInputStylePropTypes = {
  ...TextStylePropTypes,
  /* @platform web */
  caretColor: ColorPropType,
  outline: string,
  resize: oneOf(['none', 'vertical', 'horizontal', 'both'])
};

export default TextInputStylePropTypes;
