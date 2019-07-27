const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/0f7a644932940ac6b78b0ea1ffa280b4/' + latitude +',' + longitude + '?units=si'

    request({ url, json: true}, (error, {body}) => {
        if (error){ 
        callback('Unable to connect to weather service', undefined); 
        }
        else if (body.error) { 
            callback('unable to find location', undefined) 
        }
        else {
          callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} and the low today is ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% change of rain`)
        }
    })
}
module.exports = forecast