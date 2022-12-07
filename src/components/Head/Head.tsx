import React from 'react'
import NextHead from "next/head";

interface IHead {
  title: string;
}

function Head({ title }: IHead) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}

export default Head