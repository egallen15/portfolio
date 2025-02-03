import type { FC } from 'react'
 
export const Footer: FC = () => {
  return (
    <footer style={{ background: 'lightsalmon', padding: 20 }}>
      © {new Date().getFullYear()} Eric Allen
    </footer>
  )
}