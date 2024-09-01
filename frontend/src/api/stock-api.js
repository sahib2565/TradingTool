const basePath = 'http://127.0.0.1:5000'

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

export const fetchOverViewData = async (
    stockSymbol
) => {
    const url = `${basePath}/overview/${stockSymbol}`;

    const response = await fetch(url);

    if(!response.ok){
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    };

    return await response.json();
};


export const fetchDetailsData = async (
    stockSymbol
    ) => {
        const url = `${basePath}/details/${stockSymbol}`;

        const response = await fetch(url);

        if(!response.ok){
            const message = `An error has occured ${response.status}`;
            throw new Error(message);
        };

        return await response.json();
    };


