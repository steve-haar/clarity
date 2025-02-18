/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsCheckboxPanel } from './checkbox/checkbox-panel.element.js';
import { CdsRadioPanel } from './radio/radio-panel.element.js';

registerElementSafely('cds-checkbox-panel', CdsCheckboxPanel);
registerElementSafely('cds-radio-panel', CdsRadioPanel);

declare global {
  interface HTMLElementTagNameMap {
    'cds-checkbox-panel': CdsCheckboxPanel;
    'cds-radio-panel': CdsRadioPanel;
  }
}
