import styled from 'styled-components';
import { Select } from 'antd';

export const CustomSelect = styled(Select)`
  .ant-select-selector {
    width: 250px !important;
    height: 55px !important;
    padding: 20px !important;
    border: none !important;
    outline: none !important;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2b3945' : '#FFFFFF')} !important;
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    box-Shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    cursor: "pointer";
    @media (max-width: 800px){
      width: 175px !important ;
    }
  }

  .ant-select-selector .ant-select-selection-placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? '#a3a3a3 !important' : '#000 !important')}; 
  }
  .ant-select-selection-search-input {
    caret-color: transparent !important;
    outline: none !important;;
  }
  .dark-dropdown .ant-select-item-option:hover,
.dark-dropdown .ant-select-item-option.ant-select-item-option-selected {
  background-color: #374151 !important;  /* Màu nền khi hover và khi chọn */
  color: #fff !important;  /* Màu chữ khi hover và khi chọn */
}

.light-dropdown .ant-select-item-option:hover,
.light-dropdown .ant-select-item-option.ant-select-item-option-selected {
  background-color: #f0f0f0 !important;  /* Màu nền khi hover và khi chọn */
  color: #000 !important;  /* Màu chữ khi hover và khi chọn */
}
  .ant-select-item-option-content{
    color: #fff !important;
  }
  .ant-select-arrow {
    color: ${({ isDarkMode }) => (isDarkMode ? '#a3a3a3 !important' : '#000 !important')}; 
    margin-top: 5px !important;
  }
`;