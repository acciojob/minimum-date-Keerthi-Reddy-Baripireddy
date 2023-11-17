function minDate(dates) {
  // Clone the array to avoid modifying the original array
  const sortedDates = [...dates];

  // Sort the cloned array in ascending order
  sortedDates.sort((a, b) => new Date(a) - new Date(b));

  // Return the first element (earliest date) of the sorted array
  return sortedDates[0];
}

// Examples
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // Output: "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // Output: "2022/12/31"
