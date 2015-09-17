
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;
var count = 0;
var meals = 0;

for (i = 0; i < mealsPerDay.length; i++) {
  count += 1;
  meals += mealsPerDay[i];
  var average = meals / count;

  console.log(count);
  console.log(meals);
  console.log(average);
}
