import React from 'react';
import { CustomSelect } from './style';

const Filter = ({ onFilterChange, isDarkMode }) => (
  <CustomSelect
    key={isDarkMode ? 'dark' : 'light'} 
    dropdownClassName={isDarkMode ? 'dark-dropdown' : 'light-dropdown'}
    dropdownStyle={{ 
      backgroundColor: isDarkMode ? '#2b3945' : '#FFFFFF',
      color: isDarkMode ? '#fff' : '#000',
      borderRadius: '4px',  
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  
    }}
    dropdownRender={menu => (
      <div>
        {React.cloneElement(menu, {
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0'; // Màu khi hover
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = ''; // Màu khi không hover
          }
        })}
      </div>
    )}
    showSearch
    placeholder="Filter by Region"
    optionFilterProp="label"
    isDarkMode={isDarkMode} 
    options={[
      {
        value: 'Africa',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>Africa</span>,
      },
      {
        value: 'Americas',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>Americas</span>,
      },
      {
        value: 'Asia',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>Asia</span>,
      },
      {
        value: 'Europe',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>Europe</span>,
      },
      {
        value: 'Oceania',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>Oceania</span>,
      },
      {
        value: '',
        label: <span style={{ color: isDarkMode ? '#a3a3a3' : '#000' }}>All</span>,
      },
    ]}
    onChange={onFilterChange} 
  />
);

export default Filter;