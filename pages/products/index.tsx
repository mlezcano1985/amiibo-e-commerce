import type { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import AmiiboList from '../../components/amiibo-list'
import WithLayout from '../../components/with-layout'
import { useGetAllAmiibosQuery } from '../../services/amiibo-api'

const Products: NextPage = () => {
  const { isFetching, data = [], error } = useGetAllAmiibosQuery(undefined)

  if (isFetching) return <>Loading...</>
  if (error) return <>Oh no, there was an error</>

  return <AmiiboList items={data} />
}

export default WithLayout(Products)
