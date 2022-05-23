import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img<{
  height?: number;
  width?: number;
}>`
  ${(props) => (!props.height ? null : `height: ${props.height}px`)}
  ${(props) => (!props.width ? null : `width: ${props.width}px`)}
`;

export const Text = styled.span`
  margin: 5px 0px;
`;

export const Paragraph = styled.p`
  margin: 10px;
`;

export const Button = styled.button`
  margin: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px;
`;
