{
    //

    // Conditional Type 
    type a1 = null;
    type a2 = undefined;

    type x = a1 extends null ? true : false;

    type b1 = null;
    type b2 = undefined;
    type y = a1 extends string ? true : a2 extends undefined ? true : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;


    type hasBike = CheckVehicle<'rakib'>

    //
}