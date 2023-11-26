import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../store/slice";

function Pagination({ totalPages, pageNumber, onClick, lastPageCallback }) {
  
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li key={page} className={pageNumber === page ? "pagination__page active" : "pagination__page"}  onClick={() => onClick(page)}>
        <Link to={`/posts/${page}`} >
          <span className="page-number">{page}</span>
        </Link>
      </li>
      ))}
    </ul>
  );
}

export default Pagination;
