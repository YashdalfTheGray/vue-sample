const serviceDetails = require('../service-details.json');

export default {
    async getBeers(count = 10) {
        const response = await fetch(serviceDetails.url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'api-key': serviceDetails.apiKey
            }),
            body: JSON.stringify({
                search: '*',
                count: true,
                top: count
            })
        });

        return response.json();
    }
};
