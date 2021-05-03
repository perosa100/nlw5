import { Container, EmptyPlayer, Progress } from './styles'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { usePlayer } from 'contexts/PlayerContext'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    tooglePlay,
    playNext,
    playPrevious,
    setPlayingState,
    hasNext,
    hasPrevious,
    isLooping,
    toogleLoop,
    isShuffling,
    toogleShuffle,
    clearPlayerState
  } = usePlayer()

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  function setupProgressListenner() {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  const episode = episodeList[currentEpisodeIndex]

  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="tocando agora" />
        <strong>Tocando Agora</strong>
      </header>

      {episode ? (
        <div className="currentEpisode">
          <Image
            width={592}
            height={592}
            objectFit="cover"
            src={episode.thumbnail}
          />

          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <EmptyPlayer>
          <strong>Seleciona um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <Progress>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            loop={isLooping}
            autoPlay
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListenner}
          />
        )}

        <div className="buttons">
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toogleShuffle}
            className={isShuffling ? 'isActive' : ''}
          >
            <img src="/shuffle.svg" alt="embaralhar" />
          </button>

          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="/play-previous.svg" alt="voltar anterior" />
          </button>

          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={tooglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Pause" />
            )}
          </button>

          <button
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/play-next.svg" alt="trocar proxima" />
          </button>

          <button
            type="button"
            disabled={!episode}
            onClick={toogleLoop}
            className={isLooping ? 'isActive' : ''}
          >
            <img src="/repeat.svg" alt="repetir" />
          </button>
        </div>
      </footer>
    </Container>
  )
}