const basePath = 'http://localhost:5000/'

export const fetchHistoricalData = async (
    stockSymbol,
    period
) => {
    const url = `${basePath}/price/${stockSymbol}/${period}`;

    const response = await fetch(url);

    if(!response.ok){
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    };

    return await response.json();
};