import { styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
`;

export const ModalBackground = styled.div`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  z-index: 1;
  position: relative;
  border-radius: 8px;
`;

export const ModalHeader = styled.header`
  color: ${(props) => props.theme.colors.gray[500]};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const CloseModalButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
`;

export const ModalContent = styled.div`
  width: 100%;
`;
