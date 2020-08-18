module.exports = SetupEndpoint({
    name: 'simpleExample',
    urls: [{
        requests: [
            { response: './veterinario.json' }
        ]
    }]
});