import useSearch from "./useSearch";
import { Loader } from "../../components";

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
      <div className="divInputs">
        <input
          placeholder="Input location"
          value={location}
          onChange={onChange}
        />
        <button className="btnSearch" onClick={submit}>
          Search
        </button>
      </div>
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
