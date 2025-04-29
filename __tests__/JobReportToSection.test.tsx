import React from 'react';
import { render } from '@testing-library/react-native';
import JobReportToSection from '../src/components/JobReportToSection';

describe('JobReportToSection', () => {
  it('renders report to name and phone', () => {
    const { getByText } = render(
      <JobReportToSection name="Dave" phone="(123) 546 987" />
    );
    expect(getByText('Report To')).toBeTruthy();
    expect(getByText('Dave ((123) 546 987)')).toBeTruthy();
  });
}); 