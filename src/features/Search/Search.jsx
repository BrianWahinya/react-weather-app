import useSearch from "./useSearch";
import { Loader, SearchBox } from "../../components";

import "./css/search.css";

const Search = () => {
  const {
    location,
    isFetching,
    isLoading,
    isError,
    errorObj,
    onChange,
    submit,
  } = useSearch();

  return (
    <div className="divSearch">
      <SearchBox value={location} onChange={onChange} submit={submit} />
      <div className="divInfo">
        {isFetching && isLoading && !isError && <Loader />}
        {!isFetching && !isLoading && isError && errorObj.response ? (
          <p>{errorObj.response.data.message}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Search;
