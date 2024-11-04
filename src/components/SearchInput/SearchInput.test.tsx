import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/themes';

jest.mock('../../../assets/icons/icon-search.svg', () => 'ProductsIconSearchMock');
jest.mock('../../../assets/icons/icon-filter.svg', () => 'ProductsIconFilterMock');
const placeholder = 'Search...';
const value = '';
const onSearch = jest.fn();
const onFilter = jest.fn();
describe('SearchInput', () => {
  test('renders correctly', () => {
    const placeholder = 'Search...';
    const value = '';
    const onSearch = jest.fn();
    const onFilter = jest.fn();

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput
          placeholder={placeholder}
          showFilter
          value={value}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </ThemeProvider>,
    );

    const input = getByPlaceholderText(placeholder);
    expect(input).toBeDefined();
  });

  test('calls onSearch when input value changes', () => {
    const placeholder = 'Search...';
    const value = '';
    const onSearch = jest.fn();
    const onFilter = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput
          placeholder={placeholder}
          showFilter
          value={value}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </ThemeProvider>,
    );

    const input = getByPlaceholderText(placeholder);
    const searchText = 'example';
    fireEvent.changeText(input, searchText);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith(searchText);
  });

  test('calls onFilter when filter button is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput
          placeholder={placeholder}
          showFilter
          value={value}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </ThemeProvider>,
    );

    const filterButton = getByTestId('filter-button');
    fireEvent.press(filterButton);

    expect(onFilter).toHaveBeenCalledTimes(1);
  });
  test('displays searchFilter  when showFilter is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput
          placeholder={placeholder}
          showFilter={true}
          value={value}
          onSearch={onSearch}
          onFilter={onFilter}
        />
      </ThemeProvider>,
    );

    const searchFilter = getByTestId('filter-button');
    expect(searchFilter).toBeTruthy();
  });
});
