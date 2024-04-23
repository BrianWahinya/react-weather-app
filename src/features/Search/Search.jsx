import useSearch from "./useSearch";
import { Loader, SearchBox } from "../../components";

import "./css/search.css";

const Search = () => {
  const {
    userInput,
    changeInput,
    isFetching,
    isLoading,
    isError,
    errorObj,
    submit,
  } = useSearch();
  return (
    <div className="div-search">
      <SearchBox value={userInput} changeInput={changeInput} submit={submit} />
      <div className="div-info">
        {isFetching && isLoading && !isError && <Loader />}
        {!isFetching && !isLoading && isError && errorObj !== null ? (
          <p className="p-error">{errorObj?.response?.data.message}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Search;
