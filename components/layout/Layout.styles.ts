import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid black;
  height: 100vh;
  width: 15%;
  max-width: 55px;
`;

export const MenuItem = styled.button`
  margin: 10px 2px;
  padding: 4px;
  width: auto;
  text-align: center;
  cursor: pointer;
  background-color: lightgrey;
  border: none;
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 102%;
  width: 100vw;
  max-width: 85vw;
  height: 100vh;
  background-color: rgba(182, 184, 182, 0.4);
`;

export const OpenMenu = styled.div`
  background-color: whitesmoke;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: scroll;
`;
