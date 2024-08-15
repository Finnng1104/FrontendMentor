import React from 'react';
import { CustomSelect } from './style';


const Filter = ({ onFilterChange }) => (
  <CustomSelect
    showSearch
    placeholder="Filter by Region"
    optionFilterProp="label"

    options={[
      {
        value: 'Africa',
        label: 'Africa',
      },
      {
        value: 'Americas',
        label: 'Americas',
      },
      {
        value: 'Asia',
        label: 'Asia',
      },
      {
        value: 'Europe',
        label: 'Europe',
      },
      {
        value: 'Oceania',
        label: 'Oceania',
      },
      {
        value: '',
        label: 'All',
      },
    ]}
    onChange={onFilterChange} // Gọi hàm khi giá trị thay đổi
  />
);

export default Filter;