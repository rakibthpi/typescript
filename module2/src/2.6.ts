{
    //Constraints 
    interface typeValue {
        id: number,
        name: string,
        email: string,
    }
    const addCourseToStudent = <T extends typeValue>(student: T) => {
        const course = 'Next level Web Development';
    }

    const student1 = addCourseToStudent({
        id: 1323,
        name: "Rakib hosen",
        email: "rakibhosen@gmail.com",
        devType: "Web developement"
    })

    const student2 = addCourseToStudent({
        id: 122,
        name: "rasel islam",
        email: "|fldjf"
    })


    //
}