import styled from 'styled-components';
import { Row } from 'antd';
export const ContainerComponent = styled.div`
    width: 80%;
    margin: auto;
    @media (max-width: 1437px) {
    width: 90%;
    }
`;
export const ShowNotification = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 20px 0;
    span{
        font-size: 40px;
    }
`   
export const ResponsiveRow = styled(Row)`
  @media (max-width: 1200px) {
    --gutter: 30px;
  }

  @media (max-width: 768px) {
    --gutter: 20px;
  }

  @media (max-width: 480px) {
    --gutter: 10px;
  }

  margin-left: calc(var(--gutter) / -2);
  margin-right: calc(var(--gutter) / -2);

  .ant-col {
    padding-left: calc(var(--gutter) / 2);
    padding-right: calc(var(--gutter) / 2);
  }
`;