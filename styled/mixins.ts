import { lighten, darken } from './colorUtil';

type Direction = 'row' | 'column';
type JustifyContent =
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end';
type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface ISMixinFlex {
  direction?: Direction;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexWrap?: FlexWrap;
}
export const SMixinFlex = ({
  direction = 'row',
  justifyContent = 'stretch',
  alignItems = 'center',
  flexWrap = 'nowrap',
}: ISMixinFlex = {}) => `
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const SMixinFlexRow = (
  justifyContent: JustifyContent = 'stretch',
  alignItems: AlignItems = 'center',
  flexWrap: FlexWrap = 'nowrap',
) => SMixinFlex({ direction: 'row', justifyContent, alignItems, flexWrap });

export const SMixinFlexColumn = (
  justifyContent: JustifyContent = 'stretch',
  alignItems: AlignItems = 'center',
  flexWrap: FlexWrap = 'nowrap',
) => SMixinFlex({ direction: 'column', justifyContent, alignItems, flexWrap });

export const SMixinScrollBar = (
  size: number = 12,
  trackColor: string = '#4D4D4D',
  thumbColor: string = '#eee',
) => `
  &::-webkit-scrollbar {
    width: ${size}px;
    height: ${size}px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${thumbColor};
  }
  
  &::-webkit-scrollbar-track:vertical {
    background: ${trackColor};
    border-left: 1px solid ${lighten(thumbColor, 0.2)};
  }
  &::-webkit-scrollbar-track:horizontal {
    background: ${trackColor};
    border-top: 1px solid ${lighten(thumbColor, 0.2)};
  }
  &::-webkit-scrollbar-corner{
    border-top: 1px solid ${lighten(thumbColor, 0.2)};
    border-left: 1px solid ${lighten(thumbColor, 0.2)};
  }

`;
