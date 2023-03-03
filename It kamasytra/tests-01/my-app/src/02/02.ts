export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AdressType
}
export type AdressType = {
    number?: number
    street: StritType
}
export type StritType = {
    title: string
}
export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AdressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}








