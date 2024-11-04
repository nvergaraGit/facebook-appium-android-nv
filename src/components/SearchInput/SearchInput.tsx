import React, { useRef } from 'react';
import {
  ProductsContainerSearchAndPlaceHolder,
  ProductsFinder,
  ProductsFinderButton,
  ProductsFinderContainer,
  ProductsIconFilter,
  ProductsIconSearch,
  ProductsInput,
  SearchInputTextError,
  SearchInputText,
} from './styles';
import { TIMEOUT_DEBOUNCE } from '@env';
import { Platform } from 'react-native';

interface Props {
  placeholder: string;
  showFilter?: boolean;
  value: string;
  onSearch: (text: string) => void;
  onFilter?: () => void;
  onSearchFilter?: () => void;
}
const SearchInput = ({
  placeholder,
  showFilter = false,
  value,
  onSearch,
  onFilter,
  onSearchFilter,
}: Props) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const searchTextRef = useRef<string>('');

  const handleSearch = (text: string) => {
    searchTextRef.current = text;
    onSearch(searchTextRef.current);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {}, parseInt(TIMEOUT_DEBOUNCE));
  };
  return (
    <ProductsFinderContainer>
      <ProductsFinder isFilter={showFilter}>
        <ProductsContainerSearchAndPlaceHolder>
          <ProductsFinderButton onPress={onSearchFilter}>
            <ProductsIconSearch width="24px" height="24px" />
          </ProductsFinderButton>
          {Platform.OS === 'android' ? (
            <ProductsInput
              onChangeText={handleSearch}
              value={value}
              placeholder={placeholder}
              testID="search-input"
              maxLength={61}
              returnKeyType="search"
              onSubmitEditing={onSearchFilter}
            />
          ) : (
            <SearchInputText
              onChangeText={handleSearch}
              value={value}
              placeholder={placeholder}
              testID="search-input"
              maxLength={61}
              returnKeyType="search"
              onSubmitEditing={onSearchFilter}
            />
          )}
        </ProductsContainerSearchAndPlaceHolder>
        {showFilter && (
          <ProductsFinderButton onPress={onFilter} testID="filter-button">
            <ProductsIconFilter width="26px" height="26px" />
          </ProductsFinderButton>
        )}
      </ProductsFinder>
      {value.length === 61 && (
        <SearchInputTextError>
          Superaste el máximo de caracteres permitidos. Máx. 60
        </SearchInputTextError>
      )}
    </ProductsFinderContainer>
  );
};

export default SearchInput;
