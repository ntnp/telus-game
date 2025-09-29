import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from './page';

test('renders title', () => {
  render(<Page />);

  expect(screen.getByRole('heading', { level: 1, name: 'Natan Pereira' })).toBeDefined();
});

test('renders js list', () => {
  render(<Page />);

  const listItems = screen.getAllByRole('listitem');

  expect(listItems.find(x => x.textContent === 'TypeScript')).toBeDefined();
  expect(listItems.find(x => x.textContent === 'React')).toBeDefined();
  expect(listItems.find(x => x.textContent === 'Next.js')).toBeDefined();
});

test('renders php list', () => {
  render(<Page />);

  const listItems = screen.getAllByRole('listitem');

  expect(listItems.find(x => x.textContent === 'PHP')).toBeDefined();
  expect(listItems.find(x => x.textContent === 'Laravel')).toBeDefined();
  expect(listItems.find(x => x.textContent === 'Symfony')).toBeDefined();
});
