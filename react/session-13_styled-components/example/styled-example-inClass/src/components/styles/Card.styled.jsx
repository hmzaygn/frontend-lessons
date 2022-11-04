import styled from "styled-components";

const Card = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 3rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px;
  flex-direction: ${({ id }) => (id % 2 ? "row" : "row-reverse")};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default Card;
