import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Country, State } from 'country-state-city';
import React, { useState } from 'react';

const Section2 = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  return (
    <div className='my-20'>
      <h1 className='text-center text-2xl md:text-5xl text-gray-800 font-bold'>
        Check <span className='text-orange-500'>Coverage</span>
      </h1>
      <h4 className='md:text-xl my-6 text-center font-semibold text-gray-700'>
        Please enter your district and thana to check coverage.
      </h4>
      <div className=' px-6 md:w-[60%] mx-auto'>
        <div className='flex flex-col md:flex-row gap-6'>
          <FormControl fullWidth>
            <InputLabel id='country-select'>District</InputLabel>
            <Select
              labelId='country-select'
              id='country-select'
              defaultValue={country}
              label='Country'
              onChange={(e) => setCountry(e.target.value)}
            >
              {Country.getAllCountries().map((country) => (
                <MenuItem key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth disabled={country ? false : true}>
            <InputLabel id='state-select'>Thana</InputLabel>
            <Select
              labelId='state-select'
              id='state-select'
              value={state}
              label='State'
              onChange={(e) => setState(e.target.value)}
              required
            >
              {State.getStatesOfCountry(country).map((state) => (
                <MenuItem key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='flex items-center justify-center my-10'>
        <Button variant='contained'>Check Area</Button>
      </div>
    </div>
  );
};

export default Section2;
