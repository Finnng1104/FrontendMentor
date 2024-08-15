import styled from 'styled-components';
import { Select } from 'antd';

export const CustomSelect = styled(Select)`
  .ant-select-selector {
    width: 250px !important;
    height: 55px !important;
    padding: 20px !important;
    border: none !important;
    outline: none !important;

    /* Tùy chỉnh màu sắc của placeholder */
    .ant-select-selection-placeholder {
      color: black !important;
      opacity: 1 !important; 
    }
  }

  .ant-select-selection-search-input {
    caret-color: transparent !important; /* Ẩn con trỏ */
  }

  .ant-select-arrow {
    margin-top: 5px !important;
  }
`;