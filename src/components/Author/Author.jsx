import './Author.scss'
import { Image } from 'minista'

export const Author = ({ authorImage, authorName, authorPosition }) => {
  return (
    <div className="author">
      <Image className="author__image" src={authorImage} />
      <div className="author__about">
        <span className="author__about-name">{authorName}</span>
        <span className="author__about-position">{authorPosition}</span>
      </div>
    </div>
  )
}
