{
    // generic type 

    type ArrayType<parms> = Array<parms>;

    // const rollString: Array<string> = ['rakib', 'rasel', 'rana', 'raka'];
    // const rollString: string[] = ['rakib', 'rasel', 'rana', 'raka'];
    const rollString: ArrayType<string> = ['rakib', 'rasel', 'rana', 'raka'];
    // const rollNumber: Array<number> = [12, 32, 14, 77];
    // const rollNumber: number[] = [12, 32, 14, 77];
    const rollNumber: ArrayType<number> = [12, 32, 14, 77];
    // const rollBoolean: Array<boolean> = [true, false];
    // const rollBoolean: boolean[] = [true, false];
    const rollBoolean: ArrayType<boolean> = [true, false];

    const user: ArrayType<{ name: string, age: number }> = [
        {
            name: "mezba",
            age: 102
        },
        {
            name: "rasel",
            age: 122,
        }
    ]
    type GenericTuple<X, Y> = [X, Y];
    const manush: GenericTuple<string, string> = ['mr.x', 'mr: y'];

    const user1: ArrayType<{ name: string, age: number }> = [
        {
            name: "rakib",
            age: 43
        }
    ]



}