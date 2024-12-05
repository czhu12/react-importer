import React from 'react';
import { Margin } from './common';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { useTheme } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { hexToRgb } from '../utils';

const Failed = () => {
  const theme = useTheme();
  return (
    <div>
      <Margin margin="60px" style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <svg
            style={{
              position: 'absolute',
              margin: 'auto',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill={theme.colors.danger}
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <h2 style={{ fontSize: '2em' }}>Something went wrong</h2>
      </Margin>
    </div>
  );
};

const SuccessIcon = () => {
  const theme = useTheme();
  return (
    <svg
      style={{
        position: 'absolute',
        margin: 'auto',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill={theme.colors.success}
      className="bi bi-check-lg"
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    </svg>
  );
};

const Uploading = ({
  progress,
  pending,
}: {
  progress: number;
  pending?: boolean;
}) => {
  const theme = useTheme();
  const rgb = hexToRgb(theme.colors.success);

  return (
    <div>
      <Margin margin="60px" style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <CircularProgressbarWithChildren
            value={progress}
            strokeWidth={5}
            styles={buildStyles({
              // Colors
              pathColor: `rgba(${rgb?.r ?? 0}, ${rgb?.g ?? 0}, ${rgb?.b ?? 0}, ${progress / 100})`,
            })}
          >
            {!pending && <SuccessIcon />}
            {pending && (
              <div>
                <b style={{ fontSize: '1.2em' }}>{progress}%</b>
              </div>
            )}
          </CircularProgressbarWithChildren>
        </div>
        {pending && <h2 style={{ fontSize: '2em' }}>Uploading</h2>}
        {!pending && <h2 style={{ fontSize: '2em' }}>Success</h2>}
      </Margin>
    </div>
  );
};

const Completed = ({
  progress,
  pending,
  failed,
}: {
  progress: number;
  pending?: boolean;
  failed?: boolean;
}) => {
  if (failed) {
    return <Failed />;
  }
  return <Uploading progress={progress} pending={pending} />;
};

export default Completed;
