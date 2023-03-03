import {AdressType, HousesType} from "../../02/02";
import {GovernmentBuildingType} from "../../02/02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 36,
    isActive: false,
    addres: {
        streetTitle: "Syrganova",
        city: {
            title: "Minsk",
            countryTitle: "belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    addres: addresType
    technologies: Array<technoTipe>
}
type addresType = {
    streetTitle: string
    city: cityType
}
type cityType = {
    title: string
    countryTitle: string
}
type technoTipe =
    {
        id: number
        title: string
    }


export const addMoneyToBudget= (bulding: GovernmentBuildingType, budget:number) => {
bulding.budget += budget;
}

export const repairHouse= (house:HousesType)=>{
   house.repaired = true;
}

export const toFireStaff = (firestaff:GovernmentBuildingType, staffCount: number)=>{
    firestaff.staffCount -= 20;
}
export const toHireStaff = (hireestaff:GovernmentBuildingType, staffCount: number)=>{
   hireestaff.staffCount += 20;
}