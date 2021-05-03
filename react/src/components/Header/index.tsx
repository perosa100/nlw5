import { Container } from './styles'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import Link from 'next/link'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })
  return (
    <Container>
      <Link href="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </Container>
  )
}
