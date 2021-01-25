


//I had a bug there, missed 'export' but it didn't pop up as an error
//which is weird, it made detecting this bug hard...
//what did App.js even do with increment and decrement without them being exported??? weird
export const increment = () =>
{
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addNumber = (number) =>
{
    return {
        type: 'ADD_NUMBER',
        payload: number
    }
}

