export interface Pollution {
    id?: string,
    cityId?: string,
    stateId?: string,
    current?: {
        weather?: {
            timestamp?: string,
            temperature?: string,
            pressure?: string,
            humidity?: string
        },
        pollution?: {
            timestamp?: string,
            aqius?: string
        }
    }
}