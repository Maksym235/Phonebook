import styled from "@emotion/styled";

export const Header = styled.header`
  ${(prop) => {
    if (prop.isMobile) {
      return `;
justify-content: space-between;
    `;
    }
  }}
  display: flex;
  margin-bottom: 40px;
  padding-top: 10px;
  align-items: center;
`;

export const Logo = styled.svg`
  fill: #bcbff2;
`;
