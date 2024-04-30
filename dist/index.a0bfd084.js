let usStates = [
    {
        country: "Alabama",
        abbreviation: "AL",
        capital: "Montgomery",
        population: 4903200,
        admission: "December 14, 1819",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg"
    },
    {
        country: "Alaska",
        abbreviation: "AK",
        capital: "Juneau",
        population: 731545,
        admission: "January 3, 1959",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg"
    },
    {
        country: "Arizona",
        abbreviation: "AZ",
        capital: "Phoenix",
        population: 7278717,
        admission: "February 14, 1912",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg"
    },
    {
        country: "Arkansas",
        abbreviation: "AR",
        capital: "Little Rock",
        population: 3017804,
        admission: "June 15, 1836",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"
    },
    {
        country: "California",
        abbreviation: "CA",
        capital: "Sacramento",
        population: 39538223,
        admission: "September 9, 1850",
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"
    },
    {
        country: "Colorado",
        abbreviation: "CO",
        capital: "Denver",
        population: 5773714,
        admission: "August 1, 1876",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg"
    },
    {
        country: "Connecticut",
        abbreviation: "CT",
        capital: "Hartford",
        population: 3605944,
        admission: "January 9, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Connecticut.svg"
    },
    {
        country: "Delaware",
        abbreviation: "DE",
        capital: "Dover",
        population: 989948,
        admission: "December 7, 1787",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Delaware.svg"
    },
    {
        country: "Florida",
        abbreviation: "FL",
        capital: "Tallahassee",
        population: 21538187,
        admission: "March 3, 1845",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"
    },
    {
        country: "Georgia",
        abbreviation: "GA",
        capital: "Atlanta",
        population: 10711908,
        admission: "January 2, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Georgia_%28U.S._state%29.svg"
    },
    {
        country: "Hawaii",
        abbreviation: "HI",
        capital: "Honolulu",
        population: 1455271,
        admission: "August 21, 1959",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg"
    },
    {
        country: "Idaho",
        abbreviation: "ID",
        capital: "Boise",
        population: 1839106,
        admission: "July 3, 1890",
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Idaho.svg"
    },
    {
        country: "Illinois",
        abbreviation: "IL",
        capital: "Springfield",
        population: 12812508,
        admission: "December 3, 1818",
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg"
    },
    {
        country: "Indiana",
        abbreviation: "IN",
        capital: "Indianapolis",
        population: 6790280,
        admission: "December 11, 1816",
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg"
    },
    {
        country: "Iowa",
        abbreviation: "IA",
        capital: "Des Moines",
        population: 3190369,
        admission: "December 28, 1846",
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg"
    },
    {
        country: "Kansas",
        abbreviation: "KS",
        capital: "Topeka",
        population: 2937880,
        admission: "January 29, 1861",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg"
    },
    {
        country: "Kentucky",
        abbreviation: "KY",
        capital: "Frankfort",
        population: 4505836,
        admission: "June 1, 1792",
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg"
    },
    {
        country: "Louisiana",
        abbreviation: "LA",
        capital: "Baton Rouge",
        population: 4657757,
        admission: "April 30, 1812",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg"
    },
    {
        country: "Maine",
        abbreviation: "ME",
        capital: "Augusta",
        population: 1362359,
        admission: "March 15, 1820",
        flag: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg"
    },
    {
        country: "Maryland",
        abbreviation: "MD",
        capital: "Annapolis",
        population: 6177224,
        admission: "April 28, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg"
    },
    {
        country: "Massachusetts",
        abbreviation: "MA",
        capital: "Boston",
        population: 7033469,
        admission: "February 6, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg"
    },
    {
        country: "Michigan",
        abbreviation: "MI",
        capital: "Lansing",
        population: 10077331,
        admission: "January 26, 1837",
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg"
    },
    {
        country: "Minnesota",
        abbreviation: "MN",
        capital: "Saint Paul",
        population: 5709752,
        admission: "May 11, 1858",
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg"
    },
    {
        country: "Mississippi",
        abbreviation: "MS",
        capital: "Jackson",
        population: 2963914,
        admission: "December 10, 1817",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg"
    },
    {
        country: "Missouri",
        abbreviation: "MO",
        capital: "Jefferson City",
        population: 6154913,
        admission: "August 10, 1821",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg"
    },
    {
        country: "Montana",
        abbreviation: "MT",
        capital: "Helena",
        population: 1084225,
        admission: "November 8, 1889",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg"
    },
    {
        country: "Nebraska",
        abbreviation: "NE",
        capital: "Lincoln",
        population: 1952570,
        admission: "March 1, 1867",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg"
    },
    {
        country: "Nevada",
        abbreviation: "NV",
        capital: "Carson City",
        population: 3139658,
        admission: "October 31, 1864",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg"
    },
    {
        country: "New Hampshire",
        abbreviation: "NH",
        capital: "Concord",
        population: 1379089,
        admission: "June 21, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_New_Hampshire.svg"
    },
    {
        country: "New Jersey",
        abbreviation: "NJ",
        capital: "Trenton",
        population: 9288994,
        admission: "December 18, 1787",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_New_Jersey.svg"
    },
    {
        country: "New Mexico",
        abbreviation: "NM",
        capital: "Santa Fe",
        population: 2117522,
        admission: "January 6, 1912",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg"
    },
    {
        country: "New York",
        abbreviation: "NY",
        capital: "Albany",
        population: 20201249,
        admission: "July 26, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg"
    },
    {
        country: "North Carolina",
        abbreviation: "NC",
        capital: "Raleigh",
        population: 10439388,
        admission: "November 21, 1789",
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg"
    },
    {
        country: "North Dakota",
        abbreviation: "ND",
        capital: "Bismarck",
        population: 779094,
        admission: "November 2, 1889",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg"
    },
    {
        country: "Ohio",
        abbreviation: "OH",
        capital: "Columbus",
        population: 11718568,
        admission: "March 1, 1803",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg"
    },
    {
        country: "Oklahoma",
        abbreviation: "OK",
        capital: "Oklahoma City",
        population: 3990456,
        admission: "November 16, 1907",
        flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg"
    },
    {
        country: "Oregon",
        abbreviation: "OR",
        capital: "Salem",
        population: 4301089,
        admission: "February 14, 1859",
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg"
    },
    {
        country: "Pennsylvania",
        abbreviation: "PA",
        capital: "Harrisburg",
        population: 13011844,
        admission: "December 12, 1787",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg"
    },
    {
        country: "Rhode Island",
        abbreviation: "RI",
        capital: "Providence",
        population: 1097379,
        admission: "May 29, 1790",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg"
    },
    {
        country: "South Carolina",
        abbreviation: "SC",
        capital: "Columbia",
        population: 5210095,
        admission: "May 23, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg"
    },
    {
        country: "South Dakota",
        abbreviation: "SD",
        capital: "Pierre",
        population: 903027,
        admission: "November 2, 1889",
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_South_Dakota.svg"
    },
    {
        country: "Tennessee",
        abbreviation: "TN",
        capital: "Nashville",
        population: 6886834,
        admission: "June 1, 1796",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg"
    },
    {
        country: "Texas",
        abbreviation: "TX",
        capital: "Austin",
        population: 29472295,
        admission: "December 29, 1845",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
    },
    {
        country: "Utah",
        abbreviation: "UT",
        capital: "Salt Lake City",
        population: 3282115,
        admission: "January 4, 1896",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg"
    },
    {
        country: "Vermont",
        abbreviation: "VT",
        capital: "Montpelier",
        population: 628061,
        admission: "March 4, 1791",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg"
    },
    {
        country: "Virginia",
        abbreviation: "VA",
        capital: "Richmond",
        population: 8626207,
        admission: "June 25, 1788",
        flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg"
    },
    {
        country: "Washington",
        abbreviation: "WA",
        capital: "Olympia",
        population: 7693612,
        admission: "November 11, 1889",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg"
    },
    {
        country: "West Virginia",
        abbreviation: "WV",
        capital: "Charleston",
        population: 1793716,
        admission: "June 20, 1863",
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg"
    },
    {
        country: "Wisconsin",
        abbreviation: "WI",
        capital: "Madison",
        population: 5893718,
        admission: "May 29, 1848",
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg"
    },
    {
        country: "Wyoming",
        abbreviation: "WY",
        capital: "Cheyenne",
        population: 576851,
        admission: "July 10, 1890",
        flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg"
    }
];

//# sourceMappingURL=index.a0bfd084.js.map
