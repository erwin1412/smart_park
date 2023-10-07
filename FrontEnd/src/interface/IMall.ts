export interface IMall {
    id: string
    name: string
    location: string
    image: string | Blob
    created_at : Date
    updated_at : Date
}

export interface IMallPost {
    name: string
    location: string
    image: string | Blob
}