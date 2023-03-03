import {addSkill, StudentType} from '../03/03';


let student: StudentType;
beforeEach(()=>{
    student = {
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
})
test("new tech skill should be added to student", () => {

    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})