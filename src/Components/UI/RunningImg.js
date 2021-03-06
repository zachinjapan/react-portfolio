import styled from "styled-components";
import Nartuo from "../../images/UI/narutoRun.gif";
const RunningImg = (img) => {
  return (
    <Wrapper>
      <img
        src={Nartuo}
        loading="lazy"
        alt="anime character"
        className="img naruto"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .naruto {
    display: none;
  }

  @media (min-width: 992px) {
    .naruto {
      display: block;
      width: 70px;
      position: relative;
      animation-name: run;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      // move down
      top: 0px;
    }

    @keyframes run {
      from {
        left: -100px;
      }
      to {
        left: 100%;
      }
    }
  }

  @media (min-width: 1400px) {
    .naruto {
      top: 78px;
    }
  }
`;

export default RunningImg;
