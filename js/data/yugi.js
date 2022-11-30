function getRandomNumber(max) {
  var randomNumber = max * Math.random();
  randomNumber = parseInt(randomNumber);
  return randomNumber;
}

function problem1601() {
  var inputData = [
      {
        monthly1: 4000,
        monthly2: 6000,
        monthly3: 3000,
      },
      {
        monthly1: 3000,
        monthly2: 000,
        monthly3: 3000,
      },
      {
        monthly1: 4000,
        monthly2: 5000,
        monthly3: 2000,
      },
      {
        monthly1: 4000,
        monthly2: 5000,
        monthly3: 7000,
      },
      {
        monthly1: 9000,
        monthly2: 6000,
        monthly3: 5000,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    monthly1 = inputData[randomIndex]["monthly1"],
    monthly2 = inputData[randomIndex]["monthly2"],
    monthly3 = inputData[randomIndex]["monthly3"],
    p,
    question = {};

  p = (monthly1 * 2 + monthly2 * 2 + monthly3 * 2) / 2 - monthly3 * 2;

  question = {
    type: "single",
    id: "16",
    question:
      "The average monthly income of p and q is " +
      monthly1 +
      " the average, monthly income q and r " +
      monthly +
      "the average of p and r " +
      monthly3 +
      " the monthly income of p is:",
    options: {
      A: p,
      B: p - parseInt(Math.random() * 10),
      C: p + parseInt(Math.random() * 10),
      D: p - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "1601",
  };

  return question;
}

function getRandomNumber(max) {
  var randomNumber = max * Math.random();
  randomNumber = parseInt(randomNumber);
  return randomNumber;
}

function problem1602() {
  var inputData = [
      {
        monthly1: 4000,
        monthly2: 6000,
        monthly3: 3000,
      },
      {
        monthly1: 3000,
        monthly2: 000,
        monthly3: 3000,
      },
      {
        monthly1: 4000,
        monthly2: 5000,
        monthly3: 2000,
      },
      {
        monthly1: 4000,
        monthly2: 5000,
        monthly3: 7000,
      },
      {
        monthly1: 9000,
        monthly2: 6000,
        monthly3: 5000,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    monthly1 = inputData[randomIndex]["monthly1"],
    monthly2 = inputData[randomIndex]["monthly2"],
    monthly3 = inputData[randomIndex]["monthly3"],
    p,
    question = {};

  p = (monthly1 * 2 + monthly2 * 2 + monthly3 * 2) / 2 - monthly3 * 2;

  question = {
    type: "single",
    id: "1602",
    question:
      "The average monthly income of p and q is " +
      monthly1 +
      " the average, monthly income q and r " +
      monthly +
      "the average of p and r " +
      monthly3 +
      " the monthly income of p is:",
    options: {
      A: p,
      B: p + parseInt(Math.random() * 10),
      C: p + parseInt(Math.random() * 10),
      D: p - parseFloat(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function problem1603() {
  var inputData = [
      {
        electricity_bill: 35,
        deducted: 150,
      },
      {
        electricity_bill: 50,
        deducted: 200,
      },
      {
        electricity_bill: 60,
        deducted: 180,
      },
      {
        electricity_bill: 90,
        deducted: 300,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    electricity_bill = inputData[randomIndex]["electricity_bill"],
    deducted = inputData[randomIndex]["deducted"],
    bill,
    question = {};

  to_pay = deducted - electricity_bill;
  bill = (deducted / to_pay) * 100;

  question = {
    type: "single",
    id: "1604",
    question:
      "If" +
      electricity_bill +
      "% of an electricity bill is deducted then rs" +
      deducted +
      "is still to be paid .How much was the original bill",
    options: {
      A: bill,
      B: bill + parseInt(Math.random() * 10),
      C: bill + parseInt(Math.random() * 10),
      D: bill - parseFloat(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function problem1604() {
  var inputData = [
      {
        costprice: 20090,
        loss: 40,
      },
      {
        costprice: 50090,
        loss: 50,
      },
      {
        costprice: 40050,
        loss: 90,
      },
      {
        costprice: 80600,
        loss: 70,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    costprice = inputData[randomIndex]["costprice"],
    loss = inputData[randomIndex]["loss"],
    p,
    sellingprice,
    question = {};

  p = (100 - loss) / 100;
  sellingprice = p * costprice;

  question = {
    type: "single",
    id: "1604",
    question:
      "A man purchase tv for RS " +
      costprice +
      " and sells it " +
      loss +
      "% loss.what is the sellingprice of TV",
    options: {
      A: sellingprice - parseInt(Math.random() * 10),
      B: sellingprice - parseInt(Math.random() * 10),
      C: sellingprice + parseInt(Math.random() * 10),
      D: sellingprice,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1605() {
  var inputData = [
      {
        costprice: 15040,
        profit: 65,
      },
      {
        costprice: 17040,
        profit: 95,
      },
      {
        costprice: 10020,
        profit: 75,
      },
      {
        costprice: 10480,
        profit: 65,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    costprice = inputData[randomIndex]["costprice"],
    profit = inputData[randomIndex]["profit"],
    p,
    sellingprice,
    question = {};

  p = (100 + profit) / 100;
  sellingprice = p * costprice;

  question = {
    type: "single",
    id: "1605",
    question:
      "pradeep bought a chai for RS " +
      costprice +
      " and sold it suressh ,if pradeep earned a profit of " +
      profit +
      "% profit.what is the sellingprice of chair",
    options: {
      A: sellingprice,
      B: sellingprice - parseInt(Math.random() * 10),
      C: sellingprice + parseInt(Math.random() * 10),
      D: sellingprice - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function problem1606() {
  var inputData = [
      {
        over1: 10,
        rr: 3.2,
        over2: 40,
        runs: 252,
      },
      {
        over1: 10,
        rr: 3.2,
        over2: 40,
        runs: 262,
      },
      {
        over1: 10,
        rr: 3.2,
        over2: 40,
        runs: 292,
      },
      {
        over1: 10,
        rr: 3.2,
        over2: 40,
        runs: 282,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    over1 = inputData[randomIndex]["over1"],
    over2 = inputData[randomIndex]["over2"],
    rr = inputData[randomIndex]["rr"],
    runs = inputData[randomIndex]["runs"],
    r,
    runrate,
    question = {};

  r = runs - over1 * rr;
  runrate = r / over2;

  question = {
    type: "single",
    id: "1606",
    question:
      "In the first " +
      over1 +
      " overs of a cricket game, the run rate was only " +
      rr +
      ". What should be the run rate in the remaining " +
      over2 +
      " overs to reach the target of " +
      runs +
      " runs?",
    options: {
      A: runrate - parseInt(Math.random() * 10),
      B: runrate - parseInt(Math.random() * 10),
      C: runrate + parseInt(Math.random() * 10),
      D: runrate,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1607() {
  var inputData = [
      {
        manspeed: 10,
        bike: 1.5,
      },
      {
        manspeed: 15,
        bike: 4.5,
      },
      {
        manspeed: 8,
        bike: 3.5,
      },
      {
        manspeed: 5,
        bike: 2.5,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    manspeed = inputData[randomIndex]["manspeed"],
    bike = inputData[randomIndex]["bike"],
    a,
    b,
    question = {};

  a = manspeed - bike;
  b = a - bike;

  question = {
    type: "single",
    id: "1607",
    question:
      "A man speed  is " +
      manspeed +
      " km/hr and the speed of the bike is " +
      bike +
      " km/hr. The mans speed against the bike is",
    options: {
      A: b - parseInt(Math.random() * 10),
      B: b - parseInt(Math.random() * 10),
      C: b + parseInt(Math.random() * 10),
      D: b,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1608() {
  var inputData = [
      {
        distance: 16,
        time1: 2,
        time2: 4,
      },
      {
        distance: 18,
        time1: 3,
        time2: 4,
      },
      {
        distance: 20,
        time1: 7,
        time2: 5,
      },
      {
        distance: 14,
        time1: 5,
        time2: 7,
      },
      {
        distance: 15,
        time1: 2,
        time2: 4,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    distance = inputData[randomIndex]["distance"],
    time1 = inputData[randomIndex]["time1"],
    time2 = inputData[randomIndex]["time2"],
    manspeed,
    question = {};

  distance = parseInt(distance);
  time1 = parseInt(time1);
  time2 = parseInt(time2);
  rate = (distance / time1) * time2;

  question = {
    type: "single",
    id: "1608",
    question:
      "The speed of a boat in still water in" +
      distance +
      "and the rate of current is" +
      time1 +
      "The distance travelled downstream in" +
      time2 +
      "is",
    options: {
      A: 1.2,
      B: 1.8,
      C: 2.4,
      D: rate,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1609() {
  var inputData = [
      {
        base: 5,
        height: 15,
      },
      {
        base: 8,
        height: 15,
      },
      {
        base: 7,
        height: 10,
      },
      {
        base: 5,
        height: 12,
      },
      {
        base: 5,
        height: 10,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    base = inputData[randomIndex]["base"],
    height = inputData[randomIndex]["height"],
    area,
    question = {};

  base = parseInt(base);
  height = parseInt(height);
  (area = (1 / 2) * base * height),
    (question = {
      type: "single",
      id: "1609",
      question:
        "what is the area of a triangle with" +
        base +
        "and" +
        height +
        "meters",
      options: {
        A: area,
        B: 40,
        C: 52,
        D: 25,
      },
      answer: "a",
      "author-id": "16",
    });

  return question;
}

function problem1610() {
  var inputData = [
      {
        typist: 80,
        pages: 1150,
        hours: 4,
      },
      {
        typist: 50,
        pages: 400,
        hours: 5,
      },
      {
        typist: 70,
        pages: 750,
        hours: 2,
      },
      {
        typist: 10,
        pages: 600,
        hours: 8,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    typist = inputData[randomIndex]["typist"],
    pages = inputData[randomIndex]["pages"],
    hours = inputData[randomIndex]["hours"],
    count,
    total,
    question = {};

  count = pages / typist;
  total = count / hours;

  question = {
    type: "single",
    id: "1610",
    question:
      +typist +
      "typists can type" +
      pages +
      "pages in" +
      hours +
      "hours.Find the average number of pages typed by each typist in an hour.",
    options: {
      A: total - parseInt(Math.random() * 10),
      B: total - parseInt(Math.random() * 10),
      C: total + parseInt(Math.random() * 10),
      D: total,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1611() {
  var inputData = [
      {
        salaryA: 2000,
        salaryB: 6658,
        salaryC: 4590,
        salaryD: 2765,
        salaryE: 1890,
        average: 3579,
      },
      {
        salaryA: 6435,
        salaryB: 6927,
        salaryC: 6855,
        salaryD: 7230,
        salaryE: 6562,
        average: 6500,
      },
      {
        salaryA: 5439,
        salaryB: 3967,
        salaryC: 4865,
        salaryD: 1505,
        salaryE: 3689,
        average: 5432,
      },
      {
        salaryA: 9075,
        salaryB: 7634,
        salaryC: 5423,
        salaryD: 9809,
        salaryE: 4500,
        average: 5000,
      },
      {
        salaryA: 6543,
        salaryB: 6789,
        salaryC: 9087,
        salaryD: 6790,
        salaryE: 4326,
        average: 7000,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    salaryA = inputData[randomIndex]["salaryA"],
    salaryB = inputData[randomIndex]["salaryB"],
    salaryC = inputData[randomIndex]["salaryC"],
    salaryD = inputData[randomIndex]["salaryD"],
    salaryE = inputData[randomIndex]["salaryE"],
    average = inputData[randomIndex]["average"],
    total = inputData[randomIndex]["total"],
    salary = inputData[randomIndex]["salary"],
    finalSalary,
    question = {};

  var total = parseInt(salaryA + salaryB + salaryC + salaryD + salaryE),
    salary = parseInt(average * 6),
    finalSalary = parseInt(salary - total);

  question = {
    type: "single",
    id: "1611",
    question:
      "Mohan gets a salary of " +
      salaryA +
      ", " +
      salaryB +
      ", " +
      salaryC +
      ", " +
      salaryD +
      " and " +
      salaryE +
      " for 5 months.How much salary he must have in the sixth month so that he gets an average of " +
      average +
      "",
    options: {
      A: finalSalary,
      B: finalSalary - parseInt(Math.random() * 10),
      C: finalSalary + parseInt(Math.random() * 10),
      D: finalSalary - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function problem1612() {
  var inputData = [
      {
        perimeter: 56,
      },
      {
        perimeter: 78,
      },
      {
        perimeter: 29,
      },
      {
        perimeter: 41,
      },
      {
        perimeter: 49,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    perimeter = inputData[randomIndex]["perimeter"],
    side,
    question = {};

  perimeter = parseInt(perimeter);
  side = perimeter / 4;

  question = {
    type: "single",
    id: "1612",
    question:
      "If the perimeter of square is " +
      perimeter +
      ", find one of the side of square?",
    options: {
      A: side - parseInt(Math.random() * 10),
      B: side - parseInt(Math.random() * 10),
      C: side + parseInt(Math.random() * 10),
      D: side,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1613() {
  var inputData = [
      {
        value: 78367,
      },
      {
        value: 7465,
      },
      {
        value: 2340,
      },
      {
        value: 5293,
      },
      {
        value: 3343,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    value = inputData[randomIndex]["value"],
    cubeRoot,
    question = {};

  value = parseInt(value);
  cubeRoot = Math.cbrt(value);

  question = {
    type: "single",
    id: "1613",
    question: "Find the cube root value of " + value + "? ",
    options: {
      A: cubeRoot - parseInt(Math.random() * 10),
      B: cubeRoot - parseInt(Math.random() * 10),
      C: cubeRoot + parseInt(Math.random() * 10),
      D: cubeRoot,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1614() {
  var inputData = [
      {
        lossPercentage: 25,
        costPrice: 6000,
      },
      {
        lossPercentage: 15,
        costPrice: 8000,
      },
      {
        lossPercentage: 35,
        costPrice: 30000,
      },
      {
        lossPercentage: 10,
        costPrice: 5000,
      },
      {
        lossPercentage: 12,
        costPrice: 9800,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    lossPercentage = inputData[randomIndex]["lossPercentage"],
    costPrice = inputData[randomIndex]["costPrice"],
    sellingPrice,
    question = {};

  lossPercentage = parseInt(lossPercentage);
  costPrice = parseInt(costPrice);
  sellingPrice = ((100 - lossPercentage) / 100) * costPrice;

  question = {
    type: "single",
    id: "1614",
    question:
      "A man purchase a TV for Rs. " +
      costPrice +
      " and sells it at " +
      lossPercentage +
      ". What is the sellingPrice of Tv?",
    options: {
      A: sellingPrice - parseInt(Math.random() * 10),
      B: sellingPrice + parseInt(Math.random() * 10),
      C: sellingPrice,
      D: sellingPrice - parseInt(Math.random() * 10),
    },
    answer: "C",
    "author-id": "16",
  };

  return question;
}
function problem1615() {
  var inputData = [
      {
        milk: 40,
        litres: 3,
      },
      {
        milk: 44,
        litres: 2,
      },
      {
        milk: 12,
        litres: 4,
      },

      {
        milk: 80,

        litres: 12,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    milk = inputData[randomIndex]["sugar"],
    litres = inputData[randomIndex]["litres"],
    milk = parseInt(milk / 100);
  litres = parseInt(litres);
  quality = milk * litres;
  addedonelitres = litres + 1;
  percentage = (quality / addedonelitres) * 100;
  q = {};

  q = {
    type: "single",
    id: "1615",
    question:
      "To a milk solution of " +
      litres +
      " containing " +
      milk +
      ", one litre of water is added.the percentage of milk in the new solution is",
    options: {
      A: percentage - parseInt(Math.random() * 10),
      B: percentage - parseInt(Math.random() * 10),
      C: percentage,
      D: percentage + parseInt(Math.random() * 10),
    },
    answer: "c",
    "author-id": "16",
  };
  return q;
}

function problem1616() {
  var inputData = [
      {
        orange: 420,
        sells: 40,
      },
      {
        orange: 480,
        sells: 30,
      },
      {
        orange: 410,
        sells: 20,
      },

      {
        orange: 430,
        sells: 10,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    orange = inputData[randomIndex]["orange"],
    sells = inputData[randomIndex]["sells"],
    orange = parseInt(orange);

  sells = parseInt(sells);
  totalsells = 100;
  selling = totalsells - sells;
  price = parseFloat(selling / 100);
  price = x;
  x = (orange * 100) / selling;

  q = {};

  q = {
    type: "single",
    id: "1616",
    question:
      "A fruit seller had some orange. He sells " +
      sells +
      "% orange and still has " +
      orange +
      " orange. Originally, he had",
    options: {
      A: x - parseInt(Math.random() * 10),
      B: x,
      C: x - parseInt(Math.random() * 10),
      D: x + parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };
  return q;
}

function problem1617() {
  var inputData = [
      {
        A: 3,
        B: 2,
        C: 5,
        total: 1670,
      },
      {
        A: 3,
        B: 2,
        C: 5,
        total: 1960,
      },
      {
        A: 3,
        B: 2,
        C: 5,
        total: 1860,
      },
      {
        A: 3,
        B: 2,
        C: 5,
        total: 1540,
      },
      {
        A: 3,
        B: 2,
        C: 5,
        total: 1500,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    A = inputData[randomIndex]["A"],
    B = inputData[randomIndex]["B"],
    C = inputData[randomIndex]["C"],
    total = inputData[randomIndex]["total"],
    add,
    cshare,
    question = {};

  (add = C / (A + B + C)),
    (cshare = add * total),
    (question = {
      type: "single",
      id: "1617",
      question:
        "A:B:C is in ratio of " +
        A +
        ":" +
        B +
        ":" +
        C +
        " ,how much money will c get out of " +
        total +
        ".",
      options: {
        A: cshare + parseInt(Math.random() * 10),
        B: cshare - parseInt(Math.random() * 10),
        C: cshare - parseInt(Math.random() * 10),
        D: cshare,
      },
      answer: "D",
      "author-id": "16",
    });

  return question;
}

function problem11618() {
  var inputData = [
      {
        principle: 65000,
        interest: 9,
        years: 5,
      },
      {
        principle: 55000,
        interest: 6,
        years: 5,
      },
      {
        principle: 85000,
        interest: 6,
        years: 6,
      },
      {
        principle: 95000,
        interest: 5,
        years: 5,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    principle = inputData[randomIndex]["principle"],
    interest = inputData[randomIndex]["interest"],
    years = inputData[randomIndex]["years"],
    x,
    S,
    question = {};

  x = principle * interest * years;
  S = x / 100;

  question = {
    type: "single",
    id: "1618",
    question:
      "If venkat borrows Rs. " +
      principle +
      " from aadi at rate of interest " +
      interest +
      " S.I, at the end of four years how much interest venkat has to pay along with principal amount?",
    options: {
      A: S + parseInt(Math.random() * 10),
      B: S - parseInt(Math.random() * 10),
      C: S,
      D: S - parseInt(Math.random() * 10),
    },
    answer: "C",
    "author-id": "16",
  };

  return question;
}

function problem1619() {
  var inputData = [
      {
        boatSpeed: 16,
        streamSpeed: 4,
        distance: 78,
      },
      {
        boatSpeed: 18,
        streamSpeed: 3,
        distance: 85,
      },
      {
        boatSpeed: 15,
        streamSpeed: 79,
        distance: 100,
      },
      {
        boatSpeed: 17,
        streamSpeed: 12,
        distance: 120,
      },
      {
        boatSpeed: 12,
        streamSpeed: 9,
        distance: 150,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    boatSpeed = inputData[randomIndex]["boatSpeed"],
    streamSpeed = inputData[randomIndex]["streamSpeed"],
    distance = inputData[randomIndex]["distance"],
    downStreamSpeed,
    time,
    question = {};

  boatSpeed = parseInt(boatSpeed);
  streamSpeed = parseInt(streamSpeed);
  distance = parseInt(distance);
  downStreamSpeed = boatSpeed + streamSpeed;
  time = distance / downStreamSpeed;

  question = {
    type: "single",
    id: "1619",
    question:
      "A Boat can travel with a speed of " +
      " " +
      +boatSpeed +
      " " +
      "km/hr in still water. If the speed of stream is " +
      " " +
      +streamSpeed +
      "km/hr. Find the time by the boat to go" +
      " " +
      +distance +
      "km downstream ?",
    options: {
      A: time,
      B: time + parseInt(Math.random() * 10),
      C: time + parseInt(Math.random() * 10),
      D: time - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function getRandomNumber(max) {
  var randomNumber = max * Math.random();
  randomNumber = parseInt(randomNumber);
  return randomNumber;
}

function problem1620() {
  var inputData = [
    {
      a: 10,
      b: 60,
    },
    {
      a: 30,
      b: 60,
    },
    {
      a: 310,
      b: 7,
    },
    {
      a: 20,
      b: 10,
    },

    {
      a: 50,
      b: 80,
    },
  ];
}


function problem1621() {
  var inputData = [
      {
        wheat: 40,
        water: 3,
      },
      {
        wheat: 44,
        water: 2,
      },
      {
        wheat: 12,
        water: 4,
      },

      {
        wheat: 80,

        water: 12,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    milk = inputData[randomIndex]["wheat"],
    litres = inputData[randomIndex]["water"],
    wheat = parseInt(wheat / 100);
  water = parseInt(litres);
  quality = wheat * water;
  addedonelitres = water + 1;
  percentage = (quality / addedonelitres) * 100;
  q = {};

  q = {
    type: "single",
    id: "1621",
    question:
      "To a wheat solution of " +
      wheat +
      " containing " +
      water +
      ", one litre of water is added.the percentage of water in the new solution is",
    options: {
      A: percentage - parseInt(Math.random() * 10),
      B: percentage - parseInt(Math.random() * 10),
      C: percentage,
      D: percentage + parseInt(Math.random() * 10),
    },
    answer: "c",
    "author-id": "16",
  };
  return q;
}

function problem1622() {
  var inputData = [
      {
        ngp: 2,
        np: 2,
        ngc: 3,
        aagp: 67,
        aap: 35,
        aagc: 6,
      },
      {
        ngp: 2,
        np: 2,
        ngc: 4,
        aagp: 65,
        aap: 40,
        aagc: 8,
      },
      {
        ngp: 2,
        np: 2,
        ngc: 3,
        aagp: 60,
        aap: 42,
        aagc: 8,
      },
      {
        ngp: 2,
        np: 2,
        ngc: 3,
        aagp: 55,
        aap: 50,
        aagc: 5,
      },
      {
        ngp: 2,
        np: 2,
        ngc: 3,
        aagp: 76,
        aap: 53,
        aagc: 12,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    ngp = inputData[randomIndex]["ngp"],
    np = inputData[randomIndex]["np"],
    ngc = inputData[randomIndex]["ngc"],
    aagp = inputData[randomIndex]["aagp"],
    aap = inputData[randomIndex]["aap"],
    aagc = inputData[randomIndex]["aagc"],
    af,
    question = {};

  ngp = parseFloat(ngp);
  np = parseFloat(np);
  ngc = parseFloat(ngc);
  aagp = parseFloat(aagp);
  aap = parseFloat(aap);
  aagc = parseFloat(aagc);
  af = (aagp * ngp + np * aap + ngc * aagc) / (ngp + np + ngc);

  question = {
    type: "single",
    id: "1622",
    question:
      "A family consists of" +
      ngp +
      "grandchildren," +
      np +
      "parents and " +
      ngc +
      "grandparent. The average age of the grandparents is" +
      aagp +
      "years, that of the children is " +
      aap +
      " years and that of the pafrent is " +
      aagc +
      " years. What is the average age of the family?",
    options: {
      A: af,
      B: af - parseInt(Math.random() * 10),
      C: af - parseInt(Math.random() * 10),
      D: af + parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}
function problem1623() {
  var inputData = [
      {
        abc: 35,
        ab: 30,
        bc: 43,
      },
      {
        abc: 60,
        ab: 55,
        bc: 40,
      },
      {
        abc: 45,
        ab: 25,
        bc: 53,
      },
      {
        abc: 45,
        ab: 80,
        bc: 43,
      },
      {
        abc: 45,
        ab: 28,
        bc: 33,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    abc = inputData[randomIndex]["abc"],
    ab = inputData[randomIndex]["ab"],
    bc = inputData[randomIndex]["bc"],
    b,
    question = {};

  abc = parseInt(abc);
  ab = parseInt(ab);
  bc = parseInt(bc);
  b = 2 * bc - (3 * abc - 2 * ab);

  question = {
    type: "single",
    id: "1623",
    question:
      "The average weight of A, B and C is " +
      abc +
      " kg. If the average weight of A and B be " +
      ab +
      " kg and that of B and C be " +
      bc +
      " kg, then the weight of B is:",
    options: {
      A: b - parseInt(Math.random() * 10),
      B: b - parseInt(Math.random() * 10),
      C: b,
      D: b + parseInt(Math.random() * 10),
    },
    answer: "C",
    "author-id": "16",
  };

  return question;
}

function problem1624() {
  var inputData = [
      {
        sum: 420,
        totalNumber: 10,
      },
      {
        sum: 415,
        totalNumber: 5,
      },
      {
        sum: 980,
        totalNumber: 8,
      },
      {
        sum: 840,
        totalNumber: 6,
      },
      {
        sum: 503,
        totalNumber: 5,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    sum = inputData[randomIndex]["sum"],
    totalNumber = inputData[randomIndex]["totalNumber"],
    average,
    question = {};

  sum = parseInt(sum);
  totalNumber = parseInt(totalNumber);
  average = sum / totalNumber;

  question = {
    type: "single",
    id: "1624",
    question:
      " The sum of" +
      " " +
      totalNumber +
      " " +
      "numbers is" +
      " " +
      +sum +
      ". Find their average number.?",
    options: {
      A: average + parseInt(Math.random() * 10),
      B: average - parseInt(Math.random() * 10),
      C: average - parseInt(Math.random() * 10),
      D: average,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1625() {
  var inputData = [
      {
        capital1: 35000,
        capital2: 25000,
        capital3: 10000,
        profit: 18000,
      },
      {
        capital1: 35000,
        capital2: 250010,
        capital3: 20000,
        profit: 18000,
      },
      {
        capital1: 35000,
        capital2: 25000,
        capital3: 30000,
        profit: 18000,
      },
      {
        capital1: 35000,
        capital2: 25000,
        capital3: 40000,
        profit: 18000,
      },
      {
        capital1: 35000,
        capital2: 25000,
        capital3: 60000,
        profit: 18000,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    capital1 = inputData[randomIndex]["capital1"],
    capital2 = inputData[randomIndex]["capital2"],
    capital3 = inputData[randomIndex]["capital3"],
    profit = inputData[randomIndex]["profit"],
    shareA,
    question = {};

  capital1 = parseInt(capital1);
  capital2 = parseInt(capital2);
  capital3 = parseInt(capital3);
  shareA = (capital1 * profit) / (capital1 + capital2 + capital3);

  question = {
    type: "single",
    id: "1625",
    question:
      "ramu, Balu and Caran are partners. They have invested Rs." +
      capital1 +
      " " +
      ",Rs." +
      capital2 +
      " " +
      "and Rs." +
      capital3 +
      " " +
      "respectively for the same period. If the total profit is Rs." +
      profit +
      ", find the share of ram ?",
    options: {
      A: shareA + parseInt(Math.random() * 10),
      B: shareA,
      C: shareA - parseInt(Math.random() * 10),
      D: shareA - parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };

  return question;
}
function problem1626() {
  var inputData = [
      {
        average: 10,
        bijoy: 2,
        chandru: 60,
      },
      {
        average: 30,
        bijoy: 5,
        chandru: 120,
      },
      {
        average: 35,
        bijoy: 4,
        chandru: 80,
      },
      {
        average: 60,
        bijoy: 8,
        chandru: 100,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    average = inputData[randomIndex]["average"],
    bijoy = inputData[randomIndex]["bijoy"],
    chandru = inputData[randomIndex]["chandru"],
    x,
    new_man,
    question = {};

  average = parseInt(average);
  bijoy = parseInt(bijoy);
  chandru = parseInt(chandru);
  x = average * bijoy;
  new_man = chandru - x;

  question = {
    type: "single",
    id: "1626",
    question:
      "The average chandru of" +
      average +
      " men is bijoy by" +
      bijoy +
      "kg when one of them whose chandru is" +
      chandru +
      "kg is replaced by a new man. What is the chandru of the new man?",
    options: {
      A: new_man,
      B: new_man - parseInt(Math.random() * 10),
      C: new_man + parseFloat(Math.random() * 10),
      D: new_man - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}
function problem1627() {
  var inputData = [
      {
        average: 50,
        years: 35,
        teacher: 6,
        years_teacher: 9,
      },
      {
        average: 80,
        years: 65,
        teacher: 12,
        years_teacher: 3,
      },
      {
        average: 135,
        years: 40,
        teacher: 10,
        years_teacher: 6,
      },
      {
        average: 30,
        years: 15,
        teacher: 2,
        years_teacher: 1,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    average = inputData[randomIndex]["average"],
    years = inputData[randomIndex]["years"],
    teacher = inputData[randomIndex]["teacher"],
    years_teacher = inputData[randomIndex]["years_teacher"],
    a,
    sum,
    age,
    x,
    includes,
    question = {};

  average = parseInt(average);
  years = parseInt(years);
  teacher = parseInt(teacher);
  years_teacher = parseInt(years_teacher);
  a = average + teacher;
  sum = years + years_teacher;
  age = average * years;
  x = a * sum;
  includes = x - age;

  question = {
    type: "single",
    id: "1627",
    question:
      "The average age of" +
      average +
      "boys in a class is" +
      years +
      "years. If we include the age of" +
      teacher +
      "teachers, the average age increases by" +
      years_teacher +
      " . What is the sum of ages of the two teachers?",
    options: {
      A: includes - parseInt(Math.random() * 10),
      B: includes - parseInt(Math.random() * 10),
      C: includes + parseInt(Math.random() * 10),
      D: includes,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}
function problem1628() {
  var inputData = [
      {
        first: 4586,
        second: 7896,
        third: 2458,
        four: 6253,
        five: 4863,
        six: 5,
        month: 6845,
      },
      {
        first: 6435,
        second: 6927,
        third: 6855,
        four: 7230,
        five: 6562,
        six: 5,
        month: 6500,
      },
      {
        first: 4586,
        second: 3698,
        third: 1257,
        four: 4587,
        five: 3625,
        six: 5,
        month: 4257,
      },
      {
        first: 4265,
        second: 8563,
        third: 7536,
        four: 4963,
        five: 7532,
        six: 5,
        month: 9756,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    first = inputData[randomIndex]["first"],
    second = inputData[randomIndex]["second"],
    third = inputData[randomIndex]["third"],
    four = inputData[randomIndex]["four"],
    five = inputData[randomIndex]["five"],
    six = inputData[randomIndex]["six"],
    month = inputData[randomIndex]["month"],
    x,
    y,
    group,
    question = {};

  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);
  four = parseInt(four);
  five = parseInt(five);
  six = parseInt(six);
  month = parseInt(month);
  x = first + second + third + four + five;
  y = six * month;
  group = y - x;

  question = {
    type: "single",
    id: "1628",
    question:
      "Mohan gets a salary of Rs." +
      first +
      ", Rs." +
      second +
      ", Rs." +
      third +
      ", Rs." +
      four +
      " and Rs." +
      five +
      "for" +
      six +
      "months. How much salary he must have in the sixth month so that he gets an average of Rs." +
      month +
      "?",
    options: {
      A: group + parseFloat(Math.random() * 10),
      B: group + parseInt(Math.random() * 10),
      C: group + parseInt(Math.random() * 10),
      D: group,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}
function problem1629() {
  var inputData = [
      {
        average: 10,
        bijoy: 2,
        chandru: 60,
      },
      {
        average: 30,
        bijoy: 5,
        chandru: 120,
      },
      {
        average: 35,
        bijoy: 4,
        chandru: 80,
      },
      {
        average: 60,
        bijoy: 8,
        chandru: 100,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    average = inputData[randomIndex]["average"],
    bijoy = inputData[randomIndex]["bijoy"],
    chandru = inputData[randomIndex]["chandru"],
    x,
    new_man,
    question = {};

  average = parseInt(average);
  bijoy = parseInt(bijoy);
  chandru = parseInt(chandru);
  x = average * bijoy;
  new_man = chandru - x;

  question = {
    type: "single",
    id: "1629",
    question:
      "The average chandru of" +
      average +
      " men is bijoy by" +
      bijoy +
      "kg when one of them whose chandru is" +
      chandru +
      "kg is replaced by a new man. What is the chandru of the new man?",
    options: {
      A: new_man,
      B: new_man - parseInt(Math.random() * 10),
      C: new_man + parseFloat(Math.random() * 10),
      D: new_man - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}
function problem1630() {
  var inputData = [
      {
        average: 40,
        years: 65,
        teacher: 7,
        years_teacher: 3,
      },
      {
        average: 80,
        years: 65,
        teacher: 12,
        years_teacher: 3,
      },
      {
        average: 15,
        years: 40,
        teacher: 10,
        years_teacher: 6,
      },
      {
        average: 330,
        years: 15,
        teacher: 2,
        years_teacher: 1,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    average = inputData[randomIndex]["average"],
    years = inputData[randomIndex]["years"],
    teacher = inputData[randomIndex]["teacher"],
    years_teacher = inputData[randomIndex]["years_teacher"],
    a,
    sum,
    age,
    x,
    includes,
    question = {};

  average = parseInt(average);
  years = parseInt(years);
  teacher = parseInt(teacher);
  years_teacher = parseInt(years_teacher);
  a = average + teacher;
  sum = years + years_teacher;
  age = average * years;
  x = a * sum;
  includes = x - age;

  question = {
    type: "single",
    id: "1630",
    question:
      "The average age of" +
      average +
      "boys in a class is" +
      years +
      "years. If we include the age of" +
      teacher +
      "teachers, the average age increases by" +
      years_teacher +
      " . What is the sum of ages of the two teachers?",
    options: {
      A: includes - parseInt(Math.random() * 10),
      B: includes - parseInt(Math.random() * 10),
      C: includes + parseInt(Math.random() * 10),
      D: includes,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}
function problem1631() {
  var inputData = [
      {
        cp: 45,
        sp: 60,
      },
      {
        cp: 100,
        sp: 120,
      },
      {
        cp: 700,
        sp: 1000,
      },
      {
        cp: 450,
        sp: 600,
      },
      {
        cp: 300,
        sp: 500,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    cp = inputData[randomIndex]["cp"],
    sp = inputData[randomIndex]["sp"],
    p,
    pp,
    question = {};

  cp = parseInt(cp);
  sp = parseInt(sp);
  p = sp - cp;
  pp = (p / cp) * 100;

  question = {
    type: "single",
    id: "1631",
    question:
      "a toy is bought for  " +
      cp +
      "rs and sold for " +
      sp +
      " rs. what is the " +
      pp +
      " profit percentage of the toy?",
    options: {
      A: pp - parseFloat(Math.random() * 10),
      B: pp * parseFloat(Math.random() * 10),
      C: pp + parseFloat(Math.random() * 10),
      D: pp,
    },
    answer: "D",
    "author-id": "16",
  };
  return question;
}
function problem1632() {
  var inputData = [
      {
        speed: 40,
        time: 20,
      },
      {
        speed: 22,
        time: 2,
      },
      {
        speed: 14,
        time: 2,
      },
      {
        speed: 15,
        time: 2,
      },
      {
        speed: 18,
        time: 4,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    speed = inputData[randomIndex]["speed"],
    time = inputData[randomIndex]["time"],
    distance,
    question = {};

  speed = parseInt((speed * 5) / 18);
  time = parseInt(time * 60);
  distance = speed * time;

  question = {
    type: "single",
    id: "1632",
    question:
      "A rider moving at a speed of" +
      speed +
      " m/s and crosses a street in  " +
      time +
      " mins .what is the " +
      distance +
      "distance of the street?",
    options: {
      A: distance - parseInt(Math.random() * 10),
      B: distance,
      C: distance + parseInt(Math.random() * 10),
      D: distance - parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };

  return question;
}
function problem1633() {
  var inputData = [
      {
        l: 18,
        b: 14,
      },
      {
        l: 16,
        b: 13,
      },
      {
        l: 12,
        b: 10,
      },
      {
        l: 7,
        b: 7,
      },
      {
        l: 20,
        b: 12,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    l = inputData[randomIndex]["l"],
    b = inputData[randomIndex]["b"],
    a,
    question = {};

  l = parseInt(l);
  b = parseInt(b);
  a = l * b;

  question = {
    type: "single",
    id: "1633",
    question:
      "If the length of rectangle is " +
      l +
      " m and its breadth is " +
      b +
      " m. find the area" +
      a +
      " m? ",
    options: {
      A: a * parseInt(Math.random() * 10),
      B: a,
      C: a - parseInt(Math.random() * 10),
      D: a + parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };
  return question;
}
function problem1634() {
  var inputData = [
      {
        p: 24600,
        n: 2,
        r: 12,
      },
      {
        p: 8400,
        n: 2,
        r: 6,
      },
      {
        p: 9700,
        n: 2,
        r: 8,
      },
      {
        p: 12400,
        n: 2,
        r: 8,
      },
      {
        p: 6000,
        n: 2,
        r: 6,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    p = inputData[randomIndex]["p"],
    n = inputData[randomIndex]["n"],
    r = inputData[randomIndex]["r"],
    a,
    ci,
    question = {};

  p = parseInt(p);
  n = parseInt(n);
  r = parseInt(r);
  a = p * (1 + r / 100) ** n;
  (ci = a - p),
    (question = {
      type: "single",
      id: "1634",
      question:
        "Find the simple interest on" +
        p +
        " rs for " +
        n +
        " years at " +
        r +
        " percentage per annum completed annualy.",
      options: {
        A: ci,
        B: ci + parseInt(Math.random() * 10),
        C: ci - parseInt(Math.random() * 10),
        D: ci * parseInt(Math.random() * 10),
      },
      answer: "A",
      "author-id": "16",
    });
  return question;
}
function problem1635() {
  var inputData = [
      {
        ss: 25,
        cs: 3,
        time: 10,
      },
      {
        ss: 10,
        cs: 4,
        time: 12,
      },
      {
        ss: 45,
        cs: 6,
        time: 10,
      },
      {
        ss: 15,
        cs: 40,
        time: 6,
      },
      {
        ss: 16,
        cs: 7,
        time: 14,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    ss = inputData[randomIndex]["ss"],
    cs = inputData[randomIndex]["cs"],
    time = inputData[randomIndex]["time"],
    speed,
    distance,
    question = {};

  ss = parseInt(ss);
  cs = parseInt(cs);
  time = parseInt(time / 60);
  speed = ss + cs;
  distance = speed * time;

  question = {
    type: "single",
    id: "1635",
    question:
      " The speed of a jet in stil water in" +
      ss +
      "km/hr and the rate of current is " +
      cs +
      "km/hr. The distance travlled downstream in " +
      time +
      "minutes is?",
    options: {
      A: distance - parseInt(Math.random() * 10),
      B: distance + parseInt(Math.random() * 10),
      C: distance - parseInt(Math.random() * 10),
      D: distance,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1636() {
  var inputData = [
      {
        hour1: 5,
        hour2: 10,
      },
      {
        hour1: 6,
        hour2: 12,
      },
      {
        hour1: 14,
        hour2: 20,
      },
      {
        hour1: 10,
        hour2: 20,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    hour1 = inputData[randomIndex]["hour1"],
    hour2 = inputData[randomIndex]["hour2"],
    time,
    question = {};

  time = (hour1 * hour2) / (hour2 - hour1);

  question = {
    type: "single",
    id: "1631",
    question:
      "A pipe can fill a ss tank in " +
      hour1 +
      "hours another pipe can empty the ss tank in " +
      hour2 +
      "hours both the pipes are opened at same time ,the tank can be filled ",
    options: {
      A: time - parseInt(Math.random() * 10),
      B: time,
      C: time + parseInt(Math.random() * 10),
      D: time - parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };

  return question;
}

function problem1637() {
  var inputData = [
      {
        a: 8,
        weight1: 2.5,
        weight2: 65,
      },
      {
        a: 8,
        weight1: 2.5,
        weight2: 69,
      },
      {
        a: 8,
        weight1: 2.5,
        weight2: 68,
      },
      {
        a: 8,
        weight1: 2.5,
        weight2: 75,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    a = inputData[randomIndex]["a"],
    weight1 = inputData[randomIndex]["weight1"],
    weight2 = inputData[randomIndex]["weight2"],
    x,
    weight,
    question = {};

  x = a * weight1;
  weight = x + weight2;

  question = {
    type: "single",
    id: "1637",
    question:
      "The average weight of " +
      a +
      "persons increases by " +
      weight1 +
      " kg when a new person comes in place of one of them weighing " +
      weight2 +
      " kg. What might be the weight of the new person?",
    options: {
      A: weight,
      B: weight - parseInt(Math.random() * 10),
      C: weight + parseInt(Math.random() * 10),
      D: weight - parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}
function problem1638() {
  var inputData = [
      {
        cp: 100,
        p: 23,
        paid: 7011,
      },
      {
        cp: 100,
        p: 28,
        paid: 7022,
      },
      {
        cp: 100,
        p: 27,
        paid: 7040,
      },
      {
        cp: 100,
        p: 28,
        paid: 7051,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    cp = inputData[randomIndex]["cp"],
    p = inputData[randomIndex]["p"],
    paid = inputData[randomIndex]["paid"],
    x,
    y,
    question = {};
  x = cp + p;
  y = (100 / x) * paid;

  question = {
    type: "single",
    id: "1638",
    question:
      "The owner of a IPHONE shop charges his customer " +
      p +
      "% more than the cost price. If a customer paid Rs" +
      paid +
      " for a IPHONE, then what was the cost price of the cell phone?",
    options: {
      A: y,
      B: y - parseInt(Math.random() * 10),
      C: y - parseInt(Math.random() * 10),
      D: y + parseInt(Math.random() * 10),
    },
    answer: "A",
    "author-id": "16",
  };

  return question;
}

function problem1639() {
  var inputData = [
      {
        side: 5,
      },
      {
        side: 4,
      },
      {
        side: 7,
      },
      {
        side: 9,
      },
      {
        side: 2,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    side = inputData[randomIndex]["side"],
    surfaceArea,
    question = {};

  side = parseInt(side);
  surfaceArea = 6 * side * side;

  question = {
    type: "single",
    id: "1639",
    question:
      "Find the total surface area of a cube with side" + " " + side + "cm?",
    options: {
      A: surfaceArea - parseInt(Math.random() * 10),
      B: surfaceArea - parseInt(Math.random() * 10),
      C: surfaceArea + parseInt(Math.random() * 10),
      D: surfaceArea,
    },
    answer: "D",
    "author-id": "16",
  };

  return question;
}

function problem1640() {
  var inputData = [
      {
        train1: 9,
        train2: 8,
        distance: 800,
        time: 4,
      },
      {
        train1: 5,
        train2: 9,
        distance: 600,
        time: 3,
      },
      {
        train1: 10,
        train2: 11,
        distance: 500,
        time: 6,
      },

      {
        train1: 12,
        train2: 7,
        distance: 300,
        time: 5,
      },
    ],
    randomIndex = getRandomNumber(inputData.length),
    train1 = inputData[randomIndex]["train1"],
    train2 = inputData[randomIndex]["train2"],
    distance = inputData[randomIndex]["distance"],
    time = inputData[randomIndex]["time"],
    train1 = parseInt(train1);
  train2 = parseInt(train2);
  distance = parseInt(distance);
  time = parseInt(time);
  speed = distance / time / train2;
  firsttrain = train1 * speed;

  question13 = {};

  question13 = {
    type: "single",
    id: "1640",
    question:
      "The ratio between the speed of two train is " +
      train1 +
      ":" +
      train2 +
      ".If the second train runs " +
      distance +
      " km in " +
      time +
      "hours, then the speed of the first train is?",
    options: {
      A: firsttrain - parseInt(Math.random() * 10),
      B: firsttrain,
      C: firsttrain - parseInt(Math.random() * 10),
      D: firsttrain + parseInt(Math.random() * 10),
    },
    answer: "B",
    "author-id": "16",
  };
  return question13;
}
