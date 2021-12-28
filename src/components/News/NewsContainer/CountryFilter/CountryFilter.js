import React, { useState } from 'react';
import './CountryFilter.css';

    const CountryFilter = (props) => {
    const [filteredCountry,setFilteredCoutry] =  useState('South Africa');
   
    const dropDownChangeHandler= selectedCountry=>{
          setFilteredCoutry(selectedCountry.target.value);
          {props.reloadNews(selectedCountry.target.value);}
      };

  return (
    <div className='country-filter'>
      <div className='country-filter__control'>
        <label>Please, Choose country</label>

        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value=''></option>
          <option value='za'>South Africa</option>
          <option value='us'>United State</option>
          <option value='uk'>United KingDom</option>
          <option value='ch'>China</option>
          <option value='fr'>France</option>
          <option value='ag'>Angentina</option>
          <option value='zim'>Zimbabwe</option>
          <option value='ng'>Nagel</option>
        </select>
      </div>
    </div>
  );
};

export default CountryFilter;