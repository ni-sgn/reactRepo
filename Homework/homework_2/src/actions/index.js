
const increment = () =>
{
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const addNumber = (number) =>
{
    return {
        type: 'ADD_NUMBER',
        payload: number
    }
}