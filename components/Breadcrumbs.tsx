import { ComponentProps } from '../global'
import Typography from '@mui/material/Typography'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

type BreadcrumbParents = {
  path: string
  text: string
}

type BreadcrumbsProps = ComponentProps & {
  current?: string
  parents?: BreadcrumbParents[]
}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current, parents }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Inicio
      </Link>
      {parents?.map((p) => (
        <Link key={p.path} color="inherit" href={p.path}>
          {p.text}
        </Link>
      ))}
      {current && <Typography color="text.primary">{current}</Typography>}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
