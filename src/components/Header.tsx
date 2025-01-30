import React from 'react';
import styled, { css } from 'styled-components';

const TextEnd = styled.section`
  text-align: right;
  margin-bottom: 20px;
`;

const BreadcrumbItem = styled.span<{ $active?: boolean; $past?: boolean }>`
  font-weight: thin;
  margin-left: 20px;
  ${(props) => {
    if (props.$active) {
      return css`
        font-weight: bold;
      `;
    }

    if (props.$past) {
      return css`
        font-weight: bold;
        color: ${(props) => props.theme.colors.success};
        cursor: pointer;
      `;
    }
  }};
`;

const Aligned = styled.svg`
  margin-left: 20px;
  fill: grey;
`;

function Header<T>({
  steps,
  currentStep,
  onClick,
}: {
  steps: readonly T[];
  currentStep: number;
  onClick: (step: T) => void;
}) {
  return (
    <TextEnd id="csv-importer-nav-header">
      {steps.map((step, index) => {
        const past = currentStep > index;
        const active = currentStep === index;
        const last = index === steps.length - 1;
        return (
          <BreadcrumbItem
            key={index}
            $past={past}
            $active={active}
            onClick={() => onClick(step)}
          >
            {`${step}`}
            {!last && (
              <Aligned
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </Aligned>
            )}
          </BreadcrumbItem>
        );
      })}
    </TextEnd>
  );
}

export default Header;
