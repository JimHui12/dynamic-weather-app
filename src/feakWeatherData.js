let cityWeather = [
    {
        id: 1,
        location: 'Brisbane',
        type: 'Clear',
        temperature: 19,
        rainChance: 20,
        windSpeed: 3,
        windDirection: 'NE',
        day: 'FRI',
        time: [
            {clock: '10:00', highest: 20, lowest: 8},
            {clock: '12:00', highest: 22, lowest: 9},
            {clock: '14:00', highest: 23, lowest: 10}

        ]    
    },
    {
        id: 2,
        location: 'Sydney',
        type: 'Clear',
        temperature: 11,
        rainChance: 30,
        windSpeed: 5,
        windDirection: 'NE',
        day: 'FRI',
        time: [
            {clock: '10:00', highest: 17, lowest: 7},
            {clock: '12:00', highest: 19, lowest: 9},
            {clock: '14:00', highest: 20, lowest: 9}  
        ] 
    },
    {
        id: 3,
        location: 'Melbourn',
        type: 'Cloudy',
        temperature: 9,
        rainChance: 70,
        windSpeed: 10,
        windDirection: 'NW',
        day: 'FRI',
        time: [
            {clock: '10:00', highest: 10, lowest: 5},
            {clock: '12:00', highest: 15, lowest: 6},
            {clock: '14:00', highest: 17, lowest: 7} 
        ]    
    }
]

export default cityWeather;