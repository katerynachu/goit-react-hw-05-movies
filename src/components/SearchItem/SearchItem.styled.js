import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 320px;
  outline: none;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const SearchResultsContainer = styled.div`
  margin-top: 20px;
`;

export const SearchResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SearchResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
