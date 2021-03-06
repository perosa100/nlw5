import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

  img {
    cursor: pointer;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.gray100};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`
