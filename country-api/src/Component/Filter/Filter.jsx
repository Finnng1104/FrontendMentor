import React from 'react';
import { CustomSelect } from './style';

// Filter component: Provides a dropdown for filtering countries by region
const Filter = ({ onFilterChange, isDarkMode }) => (
  <CustomSelect
    key={isDarkMode ? 'dark' : 'light'}  // Forces re-render when dark mode changes
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
            e.currentTarget.style.backgroundColor = '#f0f0f0'; // Change background on hover
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = ''; // Reset background when not hovering
          }
        })}
      </div>
    )}
    showSearch  // Enable search functionality within the dropdown
    placeholder="Filter by Region"  // Placeholder text for the dropdown
    optionFilterProp="label"  // Filter options based on the label property
    isDarkMode={isDarkMode}  // Pass dark mode status for styling
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
    onChange={onFilterChange}  // Handle change events for the dropdown
  />
);

export default Filter;