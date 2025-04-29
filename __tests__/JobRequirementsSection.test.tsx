import React from 'react';
import { render } from '@testing-library/react-native';
import JobRequirementsSection from '../src/components/JobRequirementsSection';

describe('JobRequirementsSection', () => {
  it('renders all requirements', () => {
    const requirements = ['Safety Vest', 'Hard Hat'];
    const { getByText } = render(<JobRequirementsSection requirements={requirements} />);
    expect(getByText('Requirements')).toBeTruthy();
    expect(getByText('- Safety Vest')).toBeTruthy();
    expect(getByText('- Hard Hat')).toBeTruthy();
  });
}); 