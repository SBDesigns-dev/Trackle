const sourcePlaces = [
  { name: "ROMFORD", pt: [51.5743, 0.1834] },
  { name: "EMERSON PARK", pt: [51.5690, 0.2180] },
  { name: "UPMINSTER", pt: [51.5590, 0.2510] },
  { name: "WATFORD JUNCTION", pt: [51.6630, -0.3960] },
  { name: "WATFORD HIGH STREET", pt: [51.6520, -0.3910] },
  { name: "BUSHEY", pt: [51.6450, -0.3850] },
  { name: "CARPENDERS PARK", pt: [51.6280, -0.3850] },
  { name: "HATCH END", pt: [51.6090, -0.3680] },
  { name: "HEADSTONE LANE", pt: [51.5940, -0.3550] },
  { name: "HARROW & WEALDSTONE", pt: [51.5920, -0.3350] },
  { name: "KENTON", pt: [51.5820, -0.3160] },
  { name: "SOUTH KENTON", pt: [51.5700, -0.3080] },
  { name: "NORTH WEMBLEY", pt: [51.5620, -0.3030] },
  { name: "WEMBLEY CENTRAL", pt: [51.5520, -0.2960] },
  { name: "STONEBRIDGE PARK", pt: [51.5430, -0.2750] },
  { name: "HARLESDEN", pt: [51.5360, -0.2570] },
  { name: "WILLESDEN JUNCTION", pt: [51.5320, -0.2460] },
  { name: "KENSAL GREEN", pt: [51.5300, -0.2240] },
  { name: "QUEEN’S PARK", pt: [51.5330, -0.2050] },
  { name: "KILBURN HIGH ROAD", pt: [51.5370, -0.1940] },
  { name: "SOUTH HAMPSTEAD", pt: [51.5410, -0.1800] },
  { name: "EUSTON", pt: [51.5280, -0.1330] },
  { name: "STRATFORD", pt: [51.5410, -0.0030] },
  { name: "HACKNEY WICK", pt: [51.5430, -0.0250] },
  { name: "HOMERTON", pt: [51.5470, -0.0410] },
  { name: "HACKNEY CENTRAL", pt: [51.5470, -0.0550] },
  { name: "DALSTON KINGSLAND", pt: [51.5480, -0.0750] },
  { name: "CANONBURY", pt: [51.5480, -0.0930] },
  { name: "HIGHBURY & ISLINGTON", pt: [51.5460, -0.1040] },
  { name: "CALEDONIAN ROAD & BARNSBURY", pt: [51.5430, -0.1160] },
  { name: "CAMDEN ROAD", pt: [51.5410, -0.1390] },
  { name: "KENTISH TOWN WEST", pt: [51.5480, -0.1460] },
  { name: "GOSPEL OAK", pt: [51.5550, -0.1510] },
  { name: "HAMPSTEAD HEATH", pt: [51.5560, -0.1650] },
  { name: "FINCHLEY ROAD & FROGNAL", pt: [51.5500, -0.1830] },
  { name: "WEST HAMPSTEAD", pt: [51.5470, -0.1910] },
  { name: "BRONDESBURY", pt: [51.5450, -0.2030] },
  { name: "BRONDESBURY PARK", pt: [51.5400, -0.2100] },
  { name: "KENSAL RISE", pt: [51.5340, -0.2200] },
  { name: "ACTON CENTRAL", pt: [51.5080, -0.2630] },
  { name: "SOUTH ACTON", pt: [51.4990, -0.2700] },
  { name: "GUNNERSBURY", pt: [51.4910, -0.2750] },
  { name: "KEW GARDENS", pt: [51.4770, -0.2850] },
  { name: "RICHMOND", pt: [51.4630, -0.3010] },
  { name: "SHEPHERD’S BUSH", pt: [51.5050, -0.2180] },
  { name: "KENSINGTON (OLYMPIA)", pt: [51.4970, -0.2100] },
  { name: "WEST BROMPTON", pt: [51.4870, -0.1950] },
  { name: "IMPERIAL WHARF", pt: [51.4750, -0.1820] },
  { name: "CLAPHAM JUNCTION", pt: [51.4640, -0.1700] },
  { name: "BARKING RIVERSIDE", pt: [51.5260, 0.0950] },
  { name: "BARKING", pt: [51.5390, 0.0810] },
  { name: "WOODGRANGE PARK", pt: [51.5490, 0.0440] },
  { name: "WANSTEAD PARK", pt: [51.5510, 0.0220] },
  { name: "LEYTONSTONE HIGH ROAD", pt: [51.5560, 0.0080] },
  { name: "LEYTON MIDLAND ROAD", pt: [51.5680, 0.0080] },
  { name: "WALTHAMSTOW QUEEN’S ROAD", pt: [51.5810, -0.0200] },
  { name: "BLACKHORSE ROAD", pt: [51.5860, -0.0410] },
  { name: "SOUTH TOTTENHAM", pt: [51.5820, -0.0720] },
  { name: "HARRINGAY GREEN LANES", pt: [51.5770, -0.0980] },
  { name: "CROUCH HILL", pt: [51.5710, -0.1180] },
  { name: "LIVERPOOL STREET", pt: [51.5180, -0.0820] },
  { name: "BETHNAL GREEN", pt: [51.5230, -0.0590] },
  { name: "CAMBRIDGE HEATH", pt: [51.5300, -0.0570] },
  { name: "LONDON FIELDS", pt: [51.5410, -0.0570] },
  { name: "HACKNEY DOWNS", pt: [51.5480, -0.0600] },
  { name: "CLAPTON", pt: [51.5610, -0.0570] },
  { name: "ST JAMES STREET", pt: [51.5820, -0.0340] },
  { name: "WALTHAMSTOW CENTRAL", pt: [51.5830, -0.0190] },
  { name: "WOOD STREET", pt: [51.5860, 0.0010] },
  { name: "HIGHAMS PARK", pt: [51.6080, 0.0010] },
  { name: "CHINGFORD", pt: [51.6320, 0.0090] },
  { name: "RECTORY ROAD", pt: [51.5610, -0.0670] },
  { name: "STOKE NEWINGTON", pt: [51.5650, -0.0730] },
  { name: "STAMFORD HILL", pt: [51.5760, -0.0750] },
  { name: "SEVEN SISTERS", pt: [51.5830, -0.0750] },
  { name: "BRUCE GROVE", pt: [51.5970, -0.0710] },
  { name: "WHITE HART LANE", pt: [51.6050, -0.0700] },
  { name: "SILVER STREET", pt: [51.6150, -0.0700] },
    { name: "EDMONTON GREEN", pt: [51.6240, -0.0610] },
  { name: "BUSH HILL PARK", pt: [51.6410, -0.0630] },
  { name: "ENFIELD TOWN", pt: [51.6520, -0.0800] },
  { name: "SOUTHBURY", pt: [51.6480, -0.0670] },
  { name: "TURKEY STREET", pt: [51.6730, -0.0510] },
  { name: "THEOBALDS GROVE", pt: [51.6850, -0.0340] },
  { name: "CHESHUNT", pt: [51.7020, -0.0230] },
  { name: "DALSTON JUNCTION", pt: [51.5460, -0.0750] },
  { name: "HAGGERSTON", pt: [51.5380, -0.0760] },
  { name: "HOXTON", pt: [51.5310, -0.0770] },
  { name: "UPPER HOLLOWAY", pt: [51.5650, -0.1230] },
  { name: "SHOREDITCH HIGH STREET", pt: [51.5230, -0.0750] },
  { name: "WHITECHAPEL", pt: [51.5190, -0.0590] },
  { name: "SHADWELL", pt: [51.5110, -0.0560] },
  { name: "WAPPING", pt: [51.5040, -0.0560] },
  { name: "ROTHERHITHE", pt: [51.5000, -0.0520] },
  { name: "CANADA WATER", pt: [51.4980, -0.0500] },
  { name: "SURREY QUAYS", pt: [51.4930, -0.0470] },
  { name: "NEW CROSS", pt: [51.4760, -0.0320] },
  { name: "NEW CROSS GATE", pt: [51.4750, -0.0400] },
  { name: "BROCKLEY", pt: [51.4640, -0.0370] },
  { name: "HONOR OAK PARK", pt: [51.4520, -0.0450] },
  { name: "FOREST HILL", pt: [51.4390, -0.0530] },
  { name: "SYDENHAM", pt: [51.4270, -0.0550] },
  { name: "CRYSTAL PALACE", pt: [51.4180, -0.0720] },
  { name: "PENGE WEST", pt: [51.4170, -0.0640] },
  { name: "ANERLEY", pt: [51.4130, -0.0650] },
  { name: "NORWOOD JUNCTION", pt: [51.3970, -0.0750] },
  { name: "WEST CROYDON", pt: [51.3780, -0.1020] },
  { name: "QUEENS ROAD PECKHAM", pt: [51.4740, -0.0570] },
  { name: "PECKHAM RYE", pt: [51.4690, -0.0700] },
  { name: "DENMARK HILL", pt: [51.4680, -0.0900] },
  { name: "CLAPHAM HIGH STREET", pt: [51.4650, -0.1320] },
  { name: "WANDSWORTH ROAD", pt: [51.4670, -0.1440] },
  { name: "BATTERSEA PARK", pt: [51.4770, -0.1480] },
];

App.prototype.initializePlaces = function () {
  console.log("initialize places");

  sourcePlaces.forEach((sourcePlace) => {
    var place = new Place(sourcePlace.name, sourcePlace.pt, false);
    app.placeList.push(place);
  });
};
