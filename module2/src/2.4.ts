{
    // interface generic 

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T
    }
    type smartBrand1 = {
        brand: string;
        model: string;
        display: string
    }
    const poorDeveloper: Developer<smartBrand1> = {
        name: 'rakib',
        computer: {
            brand: 'asus',
            model: 'X-4fkf5',
            releaseYear: 2014
        },
        smartWatch: {
            brand: 'dahua',
            model: '201sw',
            display: 'OLED'
        }
    }

    interface smartBrand {
        brand: string;
        model: string;
        display: string
    }

    const richDeveloper: Developer<smartBrand> = {
        name: 'Apple',
        computer: {
            brand: 'Apple',
            model: 'X-4fkf5',
            releaseYear: 2014
        },
        smartWatch: {
            brand: 'apple',
            model: '201sw',
            display: 'OLED'
        }
    }
}