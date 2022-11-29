import Link from 'next/link';
import React from 'react'

import * as S from './style'
import { IPagination } from "./IPagination";

export default function Pagination({ data } : { data : IPagination}) {

  const count = Array.from(
    { length: Math.ceil(data.pageCount) },
    (_, index) => index + 1
  )
  
  return (
    <S.Container>
      {
        count.map((page) => {
          if (page === data.currentPage) {
            return <S.PageNumber active={true} key={page}>{page}</S.PageNumber>;
          }
          return (
            <Link
              href={page === 1 ? "/" : `/pages/${page}`}
              key={page}
              title={`Ir para a página ${page}`}
            >
              <S.PageNumber active={false}>{page}</S.PageNumber>
            </Link>
          );
        })
      }  
    </S.Container>
  )
}

