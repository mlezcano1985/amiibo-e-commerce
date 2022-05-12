import Amiibo from '../models/amiibo'
import AmiiboDto from '../models/amiibo-dto'
import AmiiboListDto from '../models/amiibo-list-dto'
import { toDomain } from '../tools'

const baseUrl = 'https://amiiboapi.com/api'

const getAll = async (): Promise<Amiibo[]> => {
  const url = `${baseUrl}/amiibo/`
  try {
    const res = await fetch(url)
    const data: AmiiboListDto = await res.json()

    return data.amiibo.map(toDomain)
  } catch (error) {
    console.error(error)
    return []
  }
}

const getById = async (id: string): Promise<Amiibo> => {
  const url = `${baseUrl}/amiibo/?id=${id}`
  try {
    const res = await fetch(url)
    const { amiibo }: { amiibo: AmiiboDto } = await res.json()

    return toDomain(amiibo)
  } catch (error) {
    console.error(error)
    return {} as unknown as Amiibo
  }
}

const service = { getAll, getById }
export default service
