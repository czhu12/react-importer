import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export const Container = ({ children }: { children?: ReactNode }) => {
  const componentStyle: CSSProperties = {
    margin: '0 auto',
    maxWidth: '1200px',
  };

  return <div style={componentStyle}>{children}</div>;
};

export const TextStyled = ({
  muted,
  danger,
  bold,
  children,
  style,
}: {
  children?: ReactNode;
  bold?: boolean;
  danger?: boolean;
  muted?: boolean;
  style?: CSSProperties;
}) => {
  const theme = useTheme();

  const componentStyle: CSSProperties = {
    color: danger
      ? theme.colors.danger
      : muted
        ? theme.colors.secondary
        : undefined,
    fontWeight: bold ? 'bold' : undefined,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Root = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        animation: 'none',
        animationDelay: '0',
        animationDirection: 'normal',
        animationDuration: '0',
        animationFillMode: 'none',
        animationIterationCount: '1',
        animationName: 'none',
        animationPlayState: 'running',
        animationTimingFunction: 'ease',
        backfaceVisibility: 'visible',
        background: '0',
        backgroundAttachment: 'scroll',
        backgroundClip: 'border-box',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        backgroundOrigin: 'padding-box',
        backgroundPosition: '0 0',
        backgroundPositionX: '0',
        backgroundPositionY: '0',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto auto',
        border: '0',
        borderStyle: 'none',
        borderWidth: 'medium',
        borderColor: 'inherit',
        borderBottom: '0',
        borderBottomColor: 'inherit',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        borderBottomStyle: 'none',
        borderBottomWidth: 'medium',
        borderCollapse: 'separate',
        borderImage: 'none',
        borderLeft: '0',
        borderLeftColor: 'inherit',
        borderLeftStyle: 'none',
        borderLeftWidth: 'medium',
        borderRadius: '0',
        borderRight: '0',
        borderRightColor: 'inherit',
        borderRightStyle: 'none',
        borderRightWidth: 'medium',
        borderSpacing: '0',
        borderTop: '0',
        borderTopColor: 'inherit',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        borderTopStyle: 'none',
        borderTopWidth: 'medium',
        bottom: 'auto',
        boxShadow: 'none',
        boxSizing: 'content-box',
        captionSide: 'top',
        clear: 'none',
        clip: 'auto',
        color: 'inherit',
        columns: 'auto',
        columnCount: 'auto',
        columnFill: 'balance',
        columnGap: 'normal',
        columnRule: 'medium none currentColor',
        columnRuleColor: 'currentColor',
        columnRuleStyle: 'none',
        columnRuleWidth: 'none',
        columnSpan: 'inherit',
        columnWidth: 'auto',
        content: 'normal',
        counterIncrement: 'none',
        counterReset: 'none',
        cursor: 'auto',
        direction: 'ltr',
        display: 'inline',
        emptyCells: 'show',
        float: 'none',
        font: 'normal',
        fontFamily: 'inherit',
        fontSize: '16px !important',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        height: 'auto',
        hyphens: 'none',
        left: 'auto',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        listStyle: 'none',
        listStyleImage: 'none',
        listStylePosition: 'outside',
        listStyleType: 'disc',
        margin: '0',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        marginTop: '0',
        maxHeight: 'none',
        maxWidth: 'none',
        minHeight: '0',
        minWidth: '0',
        opacity: '1',
        orphans: 'inherit',
        outline: '0',
        outlineColor: 'invert',
        outlineStyle: 'none',
        outlineWidth: 'medium',
        overflow: 'visible',
        overflowX: 'visible',
        overflowY: 'visible',
        padding: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '0',
        pageBreakAfter: 'auto',
        pageBreakBefore: 'auto',
        pageBreakInside: 'auto',
        perspective: 'none',
        perspectiveOrigin: '50% 50%',
        position: 'static',
        right: 'auto',
        tabSize: '8',
        tableLayout: 'auto',
        textAlign: 'inherit',
        textAlignLast: 'auto',
        textDecoration: 'none',
        textDecorationColor: 'inherit',
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        textIndent: '0',
        textShadow: 'none',
        textTransform: 'none',
        top: 'auto',
        transform: 'none',
        transformStyle: 'flat',
        transition: 'none',
        transitionDelay: '0s',
        transitionDuration: '0s',
        transitionProperty: 'none',
        transitionTimingFunction: 'ease',
        unicodeBidi: 'normal',
        verticalAlign: 'baseline',
        visibility: 'visible',
        whiteSpace: 'normal',
        widows: 'inherit',
        width: 'auto',
        wordSpacing: 'normal',
        zIndex: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export const Card = ({
  children,
  style,
  ...props
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  const componentStyle: React.CSSProperties = {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    padding: '10px',
    borderRadius: '5px',
    ...style,
  };

  return (
    <div style={componentStyle} {...props}>
      {children}
    </div>
  );
};

export const Align = ({
  right,
  center,
  children,
}: {
  right?: boolean;
  center?: boolean;
  children?: ReactNode;
}) => {
  const componentStyle: React.CSSProperties = {
    textAlign: right ? 'right' : center ? 'center' : 'initial',
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Margin = ({
  margin,
  style,
  children,
}: {
  margin: string;
  style?: CSSProperties;
  children?: ReactNode;
}) => {
  const componentStyle: React.CSSProperties = {
    margin,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Padded = ({
  padding,
  style,
  children,
}: {
  padding: string;
  style?: CSSProperties;
  children?: ReactNode;
}) => {
  const componentStyle: React.CSSProperties = {
    padding,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Table = ({
  children,
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  const componentStyle: React.CSSProperties = {
    border: '1px solid #aaa',
    width: '100%',
  };

  return <table style={componentStyle}>{children}</table>;
};

export const Row = ({ children }: { children?: ReactNode }) => {
  const componentStyle: React.CSSProperties = {
    flexDirection: 'row',
    display: 'flex',
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Col = ({
  children,
  flex,
  verticallyCenter,
  spaceBetween,
}: {
  children?: ReactNode;
  flex?: CSSProperties['flex'];
  verticallyCenter?: boolean;
  spaceBetween?: boolean;
}) => {
  const componentStyle: React.CSSProperties = {
    flex: flex ?? 1,
    display: verticallyCenter || spaceBetween ? 'flex' : undefined,
    alignItems: verticallyCenter ? 'center' : undefined,
    justifyContent: spaceBetween ? 'space-between' : undefined,
  };

  return <div style={componentStyle}>{children}</div>;
};

export const Button = ({
  children,
  variant,
  disabled,
  outline,
  onClick,
  style,
}: {
  children?: ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'secondary' | 'warning';
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}) => {
  const theme = useTheme();

  let color = theme.colors.primary;
  if (variant === 'success') {
    color = theme.colors.success;
  } else if (variant === 'danger') {
    color = theme.colors.danger;
  } else if (variant === 'secondary') {
    color = theme.colors.secondary;
  } else if (variant === 'warning') {
    color = theme.colors.warning;
  }

  if (disabled) {
    color += 'bb';
  }

  const componentStyle: React.CSSProperties = {
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
    color: outline ? color : 'white',
    border: `1px solid ${color}`,
    backgroundColor: outline ? undefined : color,
    ...style,
  };

  return (
    <div style={componentStyle} onClick={onClick}>
      {children}
    </div>
  );
};
