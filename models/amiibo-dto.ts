import AmiiboRelease from './amiibo-release'

/**
 * Information of specific amiibo.
 * @see {@link https://www.amiiboapi.com/docs/#amiibo}
 */
type AmiiboDto = {
  /**
   * The series the amiibo belongs to.
   */
  amiiboSeries: string
  /**
   * The character of the amiibo, multiple character have different amiibo design.
   */
  character: string
  /**
   * The game series of the amiibo.
   */
  gameSeries: string
  /**
   * The 1st 8 value of the hexadecimal to recognize the amiibo. Note: 0-7 value in the hexadecimal
   */
  head: string
  /**
   * The image link of the amiibo.
   */
  image: string
  /**
   * The name of the amiibo.
   */
  name: string
  /**
   * The release date for North America, Japan, Europe and Australia
   */
  release: AmiiboRelease
  /**
   * The next 8 value of the hexadecimal to recognize the amiibo.
   *
   * Note: 8-15 value in the hexadecimal
   */
  tail: string
  /**
   * The type it belongs to. Example: card, figure and yarn
   */
  type: string
}

export default AmiiboDto
