export type GalleryMediaType = 'image' | 'video'

export interface GalleryMedia {
  src: string
  alt: string
  width?: number
  height?: number
  type?: GalleryMediaType
  poster?: string
  thumbnail?: string
  mimeType?: string
  loop?: boolean
  title?: string
  date?: string
  description?: string
}

const videoExtensionPattern = /\.(mp4|m4v|mov|webm|ogv|ogg)(?:[?#].*)?$/i

export function getMediaType(media: GalleryMedia): GalleryMediaType {
  if (media.type) {
    return media.type
  }

  return videoExtensionPattern.test(media.src) ? 'video' : 'image'
}

export function getMediaDimensions(media: GalleryMedia) {
  return {
    width: media.width ?? 1200,
    height: media.height ?? 675,
  }
}

export function getVideoMimeType(media: GalleryMedia) {
  if (media.mimeType) {
    return media.mimeType
  }

  const src = media.src.split(/[?#]/)[0].toLowerCase()

  if (src.endsWith('.webm')) {
    return 'video/webm'
  }

  if (src.endsWith('.ogv') || src.endsWith('.ogg')) {
    return 'video/ogg'
  }

  if (src.endsWith('.mov')) {
    return 'video/quicktime'
  }

  return 'video/mp4'
}
