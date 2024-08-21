"use client"

import React, { useEffect, useState } from 'react'
import styles from './VisuallyHidden.module.css'

interface IVisuallyHidden extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const VisuallyHidden = ({ children, ...delegated }: IVisuallyHidden) => {
  const [ forceShow, setForceShow ] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true)
        }
      }

      const handleKeyUp = () => {
        setForceShow(false)
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [])

  if (forceShow) {
    return children
  }


  return <div {...delegated} className={styles.wrapper}>{children}</div>
}

export default VisuallyHidden;