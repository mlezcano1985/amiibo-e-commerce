import Amiibo from '../models/amiibo'
import AmiiboDto from '../models/amiibo-dto'

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const toDomain = (dto: AmiiboDto): Amiibo => ({
  ...dto,
  id: `${dto.head}${dto.tail}`,
  price: randomIntFromInterval(1000, 100000),
})
