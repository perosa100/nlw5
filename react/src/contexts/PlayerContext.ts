import { createContext, useContext } from 'react'

export type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
  playList: (list: Episode[], index: number) => void
  tooglePlay: () => void
  playNext: () => void
  playPrevious: () => void
  hasPrevious: boolean
  hasNext: boolean
  isLooping: boolean
  toogleLoop: () => void
  isShuffling: boolean
  toogleShuffle: () => void
  clearPlayerState: () => void
}

export const PlayerContext = createContext({} as PlayerContextData)

export const usePlayer = () => useContext(PlayerContext)
