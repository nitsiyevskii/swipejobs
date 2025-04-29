import React from 'react';
import { render } from '@testing-library/react-native';
import JobInfoSection from '../src/components/JobInfoSection';

describe('JobInfoSection', () => {
  it('renders distance and hourly rate', () => {
    const { getByText } = render(
      <JobInfoSection distance={5.6} hourlyRate={13.5} />
    );
    expect(getByText('Distance')).toBeTruthy();
    expect(getByText('5.6 miles')).toBeTruthy();
    expect(getByText('Hourly Rate')).toBeTruthy();
    expect(getByText('$13.50')).toBeTruthy();
  });
}); 