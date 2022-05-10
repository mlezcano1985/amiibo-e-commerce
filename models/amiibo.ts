import AmiiboDto from './amiibo-dto'

/**
 * Information of specific amiibo.
 */
type Amiibo = AmiiboDto & {
  /**
   * Head + Tail
   */
  id: string
  /**
   * Price
   */
  price: number
}

export default Amiibo
