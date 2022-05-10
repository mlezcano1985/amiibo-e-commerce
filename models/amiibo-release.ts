import { Nullable } from '../global'

/**
 * The release date for North America, Japan, Europe and Australia.
 * @see {@link https://www.amiiboapi.com/docs/#amiibo}
 */
type AmiiboRelease = {
  /**
   * Date Format: yyyy-mm-dd.
   *
   * If date is not available, it will return as `null`.
   */
  au: Nullable<string>
  /**
   * Date Format: yyyy-mm-dd.
   *
   * If date is not available, it will return as `null`.
   */
  eu: Nullable<string>
  /**
   * Date Format: yyyy-mm-dd.
   *
   * If date is not available, it will return as `null`.
   */
  jp: Nullable<string>
  /**
   * Date Format: yyyy-mm-dd.
   *
   * If date is not available, it will return as `null`.
   */
  na: Nullable<string>
}

export default AmiiboRelease
