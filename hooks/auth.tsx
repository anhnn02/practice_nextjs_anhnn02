import useSWR, { useSWRConfig } from "swr"
import { list } from "../api/auth"

export const useAuth = () => {
    const fetcher = async (url: string) => {
        const {data} = await list(url)
    }

    const {data, error} =  useSWR("/users", fetcher)
    const {mutate} = useSWRConfig()

}