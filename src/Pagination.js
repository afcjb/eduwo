import React from "react";

export default function Pagination({ links, metadata, newSearch }) {
  let first;
  let next;
  let last;
  let prev;
  if (links) {
    links.map((link) => {
      if (link.rel === "first") first = link.href;
      if (link.rel === "next") next = link.href;
      if (link.rel === "prev") prev = link.href;
      if (link.rel === "last") last = link.href;
    });
  }

  let disableFirstAndPrev = metadata && metadata.currentOffset === 0;
  let disableLastAndNext =
    metadata && metadata.totalCount - metadata.currentOffset < 10;
  return (
    <div className="d-flex justify-content-center">
      <div className=" mt-4">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                disabled={disableFirstAndPrev}
                className="page-link"
                onClick={() => {
                  newSearch(null, null, first);
                }}
              >
                First
              </button>
            </li>
            <li className="page-item">
              <button
                disabled={disableFirstAndPrev}
                className="page-link"
                onClick={() => {
                  newSearch(null, null, prev);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">Current Page</span>
            </li>
            <li className="page-item">
              <button
                disabled={disableLastAndNext}
                className="page-link"
                onClick={() => {
                  newSearch(null, null, next);
                }}
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
            <li className="page-item">
              <button
                disabled={disableLastAndNext}
                className="page-link"
                onClick={() => {
                  newSearch(null, null, last);
                }}
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
