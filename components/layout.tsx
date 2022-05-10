import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import { ComponentProps } from '../global'
import Header from './header'

type LayoutProps = ComponentProps

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Box p={1}>{children}</Box>
      </Container>
    </>
  )
}
