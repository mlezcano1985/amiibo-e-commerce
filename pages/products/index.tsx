import type { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import AmiiboList from '../../components/amiibo-list'
import WithLayout from '../../components/with-layout'
import Amiibo from '../../models/amiibo'
import service from '../../services/amiibo-service'

const Products: NextPage = () => {
  const [items, setItems] = useState<Amiibo[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const products = await service.getAll()
      setItems(products)
    }

    fetchProducts()
  }, [])

  return <AmiiboList items={items} />
}

export default WithLayout(Products)
