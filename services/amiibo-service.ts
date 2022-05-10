import Amiibo from '../models/amiibo'
import AmiiboListDto from '../models/amiibo-list-dto'

const baseUrl = process.env.AMIIBO_API_BASE_URL

const getAll = async (): Promise<Amiibo[]> => {
  const url = `${baseUrl}/amiibo/`
  try {
    const res = await fetch(url)
    const data: AmiiboListDto = await res.json()

    return data.amiibo.map((dto, i): Amiibo => {
      return {
        ...dto,
        id: `${dto.head}${dto.tail}`,
        price: (i + 1) * 10,
      }
    })
  } catch (error) {
    console.error(error)
    return []
  }
}

const service = { getAll }
export default service
