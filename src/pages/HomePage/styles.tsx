import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const OrderTrailStep = styled.span`
  width: 30%;
  min-width: 180px;
  min-height: 75px;
  height: fit-content;
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
`;

export const TrailStepTitle = styled.h5`
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: 18px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  .title {
    font-weight: 600;
  }
  .amount {
    font-weight: 500;
    font-size: 16px;
    background-color: ${(props) => props.theme.colors.gray[100]};
    padding: 4px 8px;
  }
`;

export const TableContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  align-items: center;
`;

export const Table = styled.button`
  width: 80%;
  height: 128px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.2s;

  &:hover{
    background-color: ${(props) => props.theme.colors.gray[100]};
  }

  .table-name {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray[500]};
  }

  .table-items {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray[400]};
  }
`;
