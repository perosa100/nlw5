import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 4rem;
  width: 46.5rem;
  height: 100vh;

  background: ${({ theme }) => theme.colors.purple500};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px; //coloca espacamento entre os elemento entre header
  }

  strong {
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-weight: 600;
  }

  .currentEpisode {
    text-align: center;

    img {
      border-radius: 1.5rem1.5%;
    }

    strong {
      display: block;
      margin-top: 2rem;
      font: 600 1.25rem ${({ theme }) => theme.font.family.secondary};
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      opacity: 0.6;
      line-height: 1.5rem;
    }
  }

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
      background: transparent;
      border: 0;
      font-size: 0;
      transition: filter 0.2s;

      &:disabled {
        cursor: default;
      }

      &:hover:not(:disabled) {
        filter: brightness(0.7);
      }

      &.isActive {
        filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
      }

      &.isActive:hover {
        filter: brightness(0.6) inverter(0.35) sepia(1) saturate(3)
          hue-rotate(100deg);
      }

      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.purple300};
        transition: filter 0.2s;

        &:hover:not(:disabled) {
          filter: brightness(0.9);
        }
      }
    }
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 2px dashed ${({ theme }) => theme.colors.purple800};
  border-radius: 15px;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 249, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;

    .emptySlider {
      width: 100%;
      height: 4px;
      background: ${({ theme }) => theme.colors.purple300};
      border-radius: 2px;
    }
  }
`
