import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  min-height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const FooterBody = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: auto;
  padding: 0 1rem 0 1rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  }
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const TextArea = styled.div`
  width: 20rem;
  text-align: end;
  line-height: 3rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  }
`;
export const IconArea = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  line-height: 3rem;
`;

export default FooterStyled;
