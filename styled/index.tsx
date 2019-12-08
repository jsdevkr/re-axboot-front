import theme from '../styles/theme';
import * as styledComponents from 'styled-components';

export { theme };

const {
  default: styled,
  ThemeProvider,
  withTheme,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

export { styled, ThemeProvider, withTheme, keyframes };

export {
  darken,
  lighten,
  saturate,
  desaturate,
  grayscale,
  whiten,
  blacken,
  invert,
  isDark,
  opaquer,
  alpha,
} from './colorUtil';

export { SMixinFlex, SMixinFlexRow, SMixinFlexColumn, SMixinScrollBar } from './mixins';

const font1 = 'objektiv-mk1, sans-serif';
const font2 = 'acumin-pro, sans-serif';
const mediaMobile = `@media (max-width: 768px)`;
const mediaTablet = `@media (min-width: 768px) and (max-width: 992px)`;
const mediaDesktop = `@media (min-width: 993px)`;
const mediaTabletDesktop = `@media (min-width: 768px)`;
const mediaWide = `@media (min-width: 1801px)`;
const mediaNotMobile = `@media (min-width: 768px)`;

export { font1, font2, mediaMobile, mediaTablet, mediaDesktop, mediaWide, mediaTabletDesktop, mediaNotMobile };
