interface SearchResult {
  title: string;
  link: string;
};

interface ISearchResults {
  results: SearchResult[];
  onClickResult: (searchResult: SearchResult) => void;
};

export default ISearchResults;