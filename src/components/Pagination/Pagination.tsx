import Link from 'next/link';
import React from 'react'

import { IPagination } from "./IPagination";

export default function Pagination({ data } : { data : IPagination}) {
  const count = Array.from(
    { length: Math.ceil(data.pageCount) },
    (_, index) => index + 1
  )
  
  return (
    <div className="container">
      {
        count.map((page) => {
          if (page === data.currentPage) {
            return <span className='page-number active' key={page}>{page}</span>;
          }
          return (
            <Link
              href={page === 1 ? "/" : `/pages/${page}`}
              key={page}
              title={`Ir para a página ${page}`}
            >
              <span className='page-number'>{page}</span>
            </Link>
          );
        })
      }
      <style jsx>{`
        span {
          color: var(--W12)
        }
        
        .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .page-number {
          border-radius: 100%;
          font-size: 18px;
          padding: 8px 12px;
          margin: 8px;
          font-weight: 700;
          background-color: trasparent;
        }
        
        .page-number:hover {
          background-color: lightgray;
        }

        .active {
          background-color: lightblue;
        }

        .active:hover {
          background-color: lightblue;
        }
      `}</style>
    </div>
  )
}

