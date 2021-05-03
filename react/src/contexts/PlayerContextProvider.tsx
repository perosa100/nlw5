import { ReactNode, useState } from 'react'
import { Episode, PlayerContext } from './PlayerContext'

type PlayerContextProps = {
  children: ReactNode
}
export function PlayerContextProvider({ children }: PlayerContextProps) {
  const [episodeList, setEpisodeList] = useState<Episode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  function play(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  function tooglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length

  function playNext() {
    if (isShuffling) {
      const nextRandonEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )
      setCurrentEpisodeIndex(nextRandonEpisodeIndex)
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function clearPlayerState() {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }
  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  function toogleLoop() {
    setIsLooping(!isLooping)
  }
  function toogleShuffle() {
    setIsShuffling(!isShuffling)
  }
  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        setPlayingState,
        tooglePlay,
        playList,
        playNext,
        playPrevious,
        hasPrevious,
        hasNext,
        isLooping,
        toogleLoop,
        isShuffling,
        toogleShuffle,
        clearPlayerState
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
