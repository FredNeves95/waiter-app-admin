import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 480px;
`;

export const SectionTitle = styled.h3`
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: 14px;
  font-weight: 500;
  `;

export const StatusSection = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .status-value {
    color: ${(props) => props.theme.colors.gray[500]};
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ItemsSection = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.span`
  display: flex;
  gap: 12px;

  img {
    width: 48px;
    height: 40px;
    border-radius: 6px;
  }

  .item-quantity {
    color: ${(props) => props.theme.colors.gray[300]};
    font-size: 14px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .item-name {
      font-size: 16px;
      color: ${(props) => props.theme.colors.gray[500]};
      font-weight: 600;
    }

    .item-price {
      font-size: 14px;
      color: ${(props) => props.theme.colors.gray[400]};
      font-weight: 400;
    }
  }
`;

export const TotalSection = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .total-value {
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray[500]};
    font-weight: 600;
  }
`;
