const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29yaW5hYmVsZW56byIsImEiOiJja2pzYzdmNmwxNmwxMnpwNWU4MjlmbjR1In0.rraDDZcI7h_nfm7SGdWMvw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location! Try a different search term.')
        } else {
            const {center, place_name: location} = body.features[0]
            callback(undefined, {
                longitude: center[0],
                latitude: center[1],
                location
            })
        }
    })
}

module.exports = geocode