import Text from 'components/atoms/Text'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
interface TeamCardProps {
  imageSrc: string
  name: string
  job: string
}
const TeamCard = ({ imageSrc, job, name }: TeamCardProps) => {
  const container: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [imageSize, setImageSize] = useState({ width: 328, height: 356 })
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (
        container.current?.clientWidth !== undefined
      ) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth * 1.085,
        })
      }
    })
  }, [container])
  useEffect(() => {
    window.addEventListener('load', () => {
      if (
        container.current?.clientWidth !== undefined
      ) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth * 1.1,
        })
      }
    })
  }, [container])
  return (
    <div className="w-full rounded-md overflow-hidden" ref={container}>
      <div className="w-full relative">
        <Image
          width={imageSize.width}
          height={imageSize.height}
          src={imageSrc}
          quality={80}
        />
      </div>
      <div className="w-full bg-light px-8 py-7 grid gap-2">
        <Text textStyle="TeamName" value={name} />
        <Text textStyle="TeamJob" value={job} />
      </div>
    </div>
  )
}

export default TeamCard
