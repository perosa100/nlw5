import {
  Container,
  ThumbailContainer,
  Header
} from '../../styles/stylesEpisodes'
import api from 'services/api'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Head } from 'next/document'

import { usePlayer } from './../../contexts/PlayerContext'

type Episode = {
  id: string
  title: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  url: string
  publishedAt: string
  description: string
}

type EpisodeProps = {
  episode: Episode
}

export default function Episode({ episode }: EpisodeProps) {
  const { play } = usePlayer()
  /*   if (router.isFallback) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  } */
  return (
    <Container>
      <Head>
        <title>Play | Home</title>
      </Head>
      <ThumbailContainer>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="voltar" />
          </button>
        </Link>

        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          alt={episode.title}
          objectFit="cover"
        />

        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="tocar episodio" />
        </button>
      </ThumbailContainer>

      <Header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </Header>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </Container>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map((episode: any) => {
    return {
      params: {
        slug: episode.id
      }
    }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params!

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url,
    description: data.description
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 8
  }
}
