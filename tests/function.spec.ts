import { test, expect } from '@playwright/test';

function foodorder(choice: number): void {
  switch (choice) {
    case 1:
      console.log("you selected dosa");
      break;
    case 2:
      console.log("you selected idly");
      break;
    case 3:
      console.log("you selected briyani");
      break;
    default:
      console.log("invalid choice");
  }
}

test('Food order test', async () => {
  foodorder(2); // you selected idly
  foodorder(3); // invalid choice
});