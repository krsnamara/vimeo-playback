import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

export function UWave({ videoId }) {
  return <Vimeo video={videoId} autoplay />
}
