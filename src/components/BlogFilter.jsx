import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form className="search-form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="container-input">
        <input
          type="search"
          placeholder="Search"
          name="search"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <button type="submit">
          <svg
            fill="#333"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="content">
        <label className="checkBox">
          <input
            type="checkbox"
            id="ch1"
            name="latest"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          ></input>
          <div className="transition"></div>   
        </label>
        New only
      </div>
    </form>
  );
};

export { BlogFilter };
