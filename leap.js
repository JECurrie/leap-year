//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
	
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  //except every year that is evenly divisible by 100
    //unless the year is also evenly divisible by 400
};