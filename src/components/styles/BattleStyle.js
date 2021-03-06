import styled from 'styled-components';
import { rgba, lighten } from 'polished';

const mixinParalax = (
  nth,
  alpha,
  color,
  delay,
  duration,
  lightenAmount,
) => `
    .parallax > use:nth-child(${nth}) {
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        fill: ${rgba(lighten(lightenAmount, color), alpha)};
      }
    `;

const waveColor = '#1b9892';
export const BattleScreen = styled.div`
  background-color: rgb(0,0,0,0.25);
  border-top: 10px solid #26aeab;
  box-shadow:  100px 100px 200px rgb(0,0,0,0.5) inset;
  user-select: none;
  flex: none;
  width: 100%;
  margin-top: 550px;
  height: 100%;
  z-index: 1;
  .header-waves {
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgb(125, 43, 49) 0%,
      rgb(35, 44, 88) 100%
    );
    color: white;
    z-index: -1;
    .waves {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 200px;
      margin-bottom: -7px;
      z-index: -1;
      /*safari fix*/
      min-height: 100px;
      max-height: 200px;
      /* Animation */
      .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
      }
      ${mixinParalax(1, 0.3, waveColor, -2, 7, 0.0)}
      ${mixinParalax(2, 0.5, waveColor, -3, 10, 0.05)}
      ${mixinParalax(3, 0.7, waveColor, -4, 13, 0.1)}
      ${mixinParalax(4, 1, waveColor, -5, 20, 0.15)}

      @keyframes move-forever {
        0% {
          transform: translate3d(-90px, 0, 0);
        }
        100% {
          transform: translate3d(85px, 0, 0);
        }
      }
    }
  }
`;

export const Centered = styled.div`
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const SelectTarget = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
  width: 200px;
  text-align: center;
  margin-left: -100px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
`;

export const Hand = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    margin: 2px;
  }

  .disabled {
    -webkit-filter: grayscale(1);
  }
`;

export const BattleStats = styled.div`
  align-self: center;
  height: 200px;
  display: flex;
  justify-content: center;
  font-family: monospace;
  max-width: 100%;
  margin: 0;
`;

export const TextStats = styled.pre`
  display: flex;
  flex-basis: 600px;
  align-self: center;
  justify-content: center;
`;
