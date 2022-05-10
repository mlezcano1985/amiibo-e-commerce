import Image, { ImageProps } from 'next/image'
import Amiibo from '../models/amiibo'

type AmiiboImageProps = Partial<ImageProps> & {
  amiibo: Amiibo
}
const AmiiboImage: React.FC<AmiiboImageProps> = ({
  amiibo,
  src = amiibo.image,
  alt = `Imagen para el personaje ${amiibo.character}`,
  width = 150,
  height = 200,
  ...rest
}) => {
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />
}

export default AmiiboImage
