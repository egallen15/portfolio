'use client'

import { useEffect, useRef } from 'react'

interface PlyrVideoProps {
  src: string
  alt: string
  poster?: string
  mimeType?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
}

export default function PlyrVideo({
  src,
  alt,
  poster,
  mimeType = 'video/mp4',
  autoPlay = true,
  muted = autoPlay,
  loop = false,
  className = '',
}: PlyrVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    let player: import('plyr').default | undefined
    let isMounted = true

    import('plyr').then(({ default: Plyr }) => {
      if (!isMounted) {
        return
      }

      player = new Plyr(video, {
        autoplay: autoPlay,
        autopause: true,
        clickToPlay: true,
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'duration',
          'mute',
          'volume',
          'pip',
          'fullscreen',
        ],
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true,
        },
        loop: {
          active: loop,
        },
        muted,
        resetOnEnd: !loop,
      })

      if (autoPlay) {
        player.muted = true
        const playPromise = player.play()

        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => undefined)
        }
      }
    })

    return () => {
      isMounted = false
      player?.destroy()
    }
  }, [autoPlay, loop, muted, src])

  return (
    <div className={`portfolio-plyr ${className}`}>
      <video
        ref={videoRef}
        aria-label={alt}
        autoPlay={autoPlay}
        controls
        loop={loop}
        muted={muted}
        playsInline
        poster={poster}
        preload="metadata"
      >
        <source src={src} type={mimeType} />
      </video>
    </div>
  )
}
