const printBonusDatesBetween = (startYear, endYear) => {
  let year, month, day, monthString, dayString, dateString, reversedDateString;

  for (year = startYear; year <= endYear; year++) {
    for (month = 1; month <= 12; month++) {
      for (day = 1; day <= 31; day++) {
        monthString = month.toString().padStart(2, "0");
        dayString = day.toString().padStart(2, "0");
        dateString = `${year}${monthString}${dayString}`;
        reversedDateString = dateString.split("").reverse().join("");

        if (dateString === reversedDateString) {
          console.log(`${year}-${monthString}-${dayString}`);
        }
      }
    }
  }
};

printBonusDatesBetween(2010, 2015);
