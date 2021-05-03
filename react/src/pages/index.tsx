// SPA -> single page application ->  nao salva para anexo da google e nem js
// SSR -> renderiza toda vez que é acessada GetServerSideProps
// SSG -> renderiza uma vez apenas em um determinado tempo getStaticProps
// falback false não gera as pagians que não foram passadas// falback true: ele tenta buscar pelo lado do  cliente  ai temos que usar loodiadng/blocking
import { Container, LatestEpisodes, AllEpisodes } from '../styles/stylesHome'

import { GetStaticProps } from 'next'
import api from '../services/api'
import Image from 'next/image' // melhora desempenho da resolucao
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { parseISO } from 'date-fns'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'
import Link from 'next/link'
import { usePlayer } from 'contexts/PlayerContext'

type Episode = {
  id: string
  title: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  url: string
  publishedAt: string
}
export type HomeProps = {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <LatestEpisodes>
        <h2> Últimos Lançamentos</h2>
        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <div className="episodeDetails">
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button
                  type="button"
                  onClick={() => playList(episodeList, index)}
                >
                  <img src="/play-green.svg" alt="Trocar Episodio" />
                </button>
              </li>
            )
          })}
        </ul>
      </LatestEpisodes>
      <AllEpisodes>
        <h2>Todos Episódios </h2>

        <table cellSpacing={0}>
          <thead>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td>
                    <Image
                      width={192}
                      height={192}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a href="">{episode.title}</a>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        playList(episodeList, index + latestEpisodes.length)
                      }
                    >
                      <img src="/play-green.svg" alt="pllay" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </AllEpisodes>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map((episode: any) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}
