import React from 'react';
import { render } from '@testing-library/react-native';
import JobLocationSection from '../src/components/JobLocationSection';

describe('JobLocationSection', () => {
  it('renders address and miles', () => {
    const { getByText } = render(
      <JobLocationSection address="123 Main St, City" miles={5.62} />
    );
    expect(getByText('Location')).toBeTruthy();
    expect(getByText('123 Main St, City')).toBeTruthy();
    expect(getByText('5.62 miles from your job search location')).toBeTruthy();
  });
}); 