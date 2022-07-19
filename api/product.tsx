import instance from "./instance"

export const list = (url: any) => {
    return instance.get(url)
}
export const add = (item: any) => {
    return instance.post("/products", item)
}
export const removeItem = (id: any) => {
    return instance.delete('/products/' + id)
}
