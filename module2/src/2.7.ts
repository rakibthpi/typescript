{
    // generic constraint with keyof operator 

    // interface Vehicle {

    // }
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship';

    type Owner2 = keyof Vehicle;

    // object defarent angele 
    const User = {
        name: "rakib hosen",
        age: 23,
        address: 'ctg'
    }
    // console.log(User['name']);
    function getPropartyValue<X, Y extends keyof X>(obj: X, key: Y) {
        return { ...obj, key, rakib: obj[key] }
    }
    const result = getPropartyValue(User, "age");
    console.log(result)

}