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
          <style jsx>{`
            .page-number {
              border-radius: 100%;
              font-size: 18px;
              padding: 8px 12px;
              margin: 8px;
              font-weight: 700;
              background-color: ${page === data.currentPage ? 'lightblue' : 'trasparent'};
            }
            
            .page-number:hover {
              background-color: ${page === data.currentPage ? 'lightblue' : 'lightgray'};
            }
          `}</style>
          if (page === data.currentPage) {
            return <span className='page-number' key={page}>{page}</span>;
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
        .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

