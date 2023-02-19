import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const TextStyled = styled.div`
  ${props => {
    let styles = {};
    if (props.muted) {
      styles['color'] = "#7f8c8d";
    }
    if (props.danger) {
      styles['color'] = "#e74c3c";
    }
    if (props.bold) {
      styles['fontWeight'] = "bold";
    }
    return styles
  }}
`
export const Root = styled.div`
  animation : none;
  animation-delay : 0;
  animation-direction : normal;
  animation-duration : 0;
  animation-fill-mode : none;
  animation-iteration-count : 1;
  animation-name : none;
  animation-play-state : running;
  animation-timing-function : ease;
  backface-visibility : visible;
  background : 0;
  background-attachment : scroll;
  background-clip : border-box;
  background-color : transparent;
  background-image : none;
  background-origin : padding-box;
  background-position : 0 0;
  background-position-x : 0;
  background-position-y : 0;
  background-repeat : repeat;
  background-size : auto auto;
  border : 0;
  border-style : none;
  border-width : medium;
  border-color : inherit;
  border-bottom : 0;
  border-bottom-color : inherit;
  border-bottom-left-radius : 0;
  border-bottom-right-radius : 0;
  border-bottom-style : none;
  border-bottom-width : medium;
  border-collapse : separate;
  border-image : none;
  border-left : 0;
  border-left-color : inherit;
  border-left-style : none;
  border-left-width : medium;
  border-radius : 0;
  border-right : 0;
  border-right-color : inherit;
  border-right-style : none;
  border-right-width : medium;
  border-spacing : 0;
  border-top : 0;
  border-top-color : inherit;
  border-top-left-radius : 0;
  border-top-right-radius : 0;
  border-top-style : none;
  border-top-width : medium;
  bottom : auto;
  box-shadow : none;
  box-sizing : content-box;
  caption-side : top;
  clear : none;
  clip : auto;
  color : inherit;
  columns : auto;
  column-count : auto;
  column-fill : balance;
  column-gap : normal;
  column-rule : medium none currentColor;
  column-rule-color : currentColor;
  column-rule-style : none;
  column-rule-width : none;
  column-span : 1;
  column-width : auto;
  content : normal;
  counter-increment : none;
  counter-reset : none;
  cursor : auto;
  direction : ltr;
  display : inline;
  empty-cells : show;
  float : none;
  font : normal;
  font-family : inherit;
  font-size : 16px !important;
  font-style : normal;
  font-variant : normal;
  font-weight : normal;
  height : auto;
  hyphens : none;
  left : auto;
  letter-spacing : normal;
  line-height : normal;
  list-style : none;
  list-style-image : none;
  list-style-position : outside;
  list-style-type : disc;
  margin : 0;
  margin-bottom : 0;
  margin-left : 0;
  margin-right : 0;
  margin-top : 0;
  max-height : none;
  max-width : none;
  min-height : 0;
  min-width : 0;
  opacity : 1;
  orphans : 0;
  outline : 0;
  outline-color : invert;
  outline-style : none;
  outline-width : medium;
  overflow : visible;
  overflow-x : visible;
  overflow-y : visible;
  padding : 0;
  padding-bottom : 0;
  padding-left : 0;
  padding-right : 0;
  padding-top : 0;
  page-break-after : auto;
  page-break-before : auto;
  page-break-inside : auto;
  perspective : none;
  perspective-origin : 50% 50%;
  position : static;
  right : auto;
  tab-size : 8;
  table-layout : auto;
  text-align : inherit;
  text-align-last : auto;
  text-decoration : none;
  text-decoration-color : inherit;
  text-decoration-line : none;
  text-decoration-style : solid;
  text-indent : 0;
  text-shadow : none;
  text-transform : none;
  top : auto;
  transform : none;
  transform-style : flat;
  transition : none;
  transition-delay : 0s;
  transition-duration : 0s;
  transition-property : none;
  transition-timing-function : ease;
  unicode-bidi : normal;
  vertical-align : baseline;
  visibility : visible;
  white-space : normal;
  widows : 0;
  width : auto;
  word-spacing : normal;
  z-index : auto;
  all: initial;
  all: unset;
`

export const Card = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  border-radius: 5px;
`

export const Align = styled.div`
${
  props => {
    if (props.right) {
      return css`text-align: right`
    } else if (props.center) {
      return css`text-align: center`
    }
  }
}
`

export const Margin = styled.div`
  ${
    props => {
      return css`
        margin: ${props.margin};
      `;
    }
  }
`

export const Padded = styled.div`
  ${
    props => {
      return css`
        padding: ${props.padding};
      `;
    }
  }
`

export const Table = styled.table`
  border: 1px solid #aaa;
  width: 100%;
  th, td {
    border: 1px solid #aaa;
  }
`

export const Row = styled.div`
  flex-direction: row;
  display: flex;
`

export const Col = styled.div`
  ${props => {
    let customCss = {};
    if (props.flex) {
      customCss['flex'] = props.flex;
    } else {
      customCss['flex'] = 1;
    }
    if (props.verticallyCenter) {
      customCss['display'] = 'flex';
      customCss['alignItems'] = 'center';
    }
    if (props.spaceBetween) {
      customCss['display'] = 'flex';
      customCss['justifyContent'] = 'space-between';
    }
    return customCss;
  }}
`

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;

  ${props => {
    let color = "#2980b9";
    if (props.variant === 'success') {
      color = 'green';
    } else if (props.variant === 'danger') {
      color = '#e74c3c';
    } else if (props.variant === "secondary") {
      color = '#7f8c8d';
    } else if (props.variant === "warning") {
      color = '#e67e22';
    }

    if (props.disabled) {
      color += 'bb';
    }
    if (props.outline) {
      return css`
        border: 1px solid ${color};
        color: ${color};
      `;
    } else {
      return css`
        color: white;
        background-color: ${color};
        border: 1px solid ${color};
      `;
    }
  }}
`
const rotate = keyframes`
  from {
    stroke-dashoffset: 360;
  }
  to {
    stroke-dashoffset: 0;
  }
`


export const CircleProgress = styled.circle`
  stroke-dasharray: 360;
  stroke-dashoffset: 0;
  stroke: #2ecc71;
  animation: ${rotate} 1s ease-out;

  fill: none;
  stroke-width: 5px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  cx: 50;
  cy: 50;
  r: 45;
`