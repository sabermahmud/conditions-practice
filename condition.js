// 1- একটি সংখ্যা positive, negative, নাকি zero—তা বের করো।
// let number = 0;
// if(number > 0 ){
//     console.log("this number is positive")
// }
// else if(number === 0){
//     console.log("it's zero")
// }
// else{
//     console.log("this is negative number")
// }


// 2-একটি সংখ্যা even নাকি odd—তা বের করো।
    // const number = 26;
    // if(number % 2 === 0){
    //     console.log("this number is even")
    // }
    // else{
    //     console.log("this number is odd")
    // }

// 3-একজন শিক্ষার্থীর নম্বর দেওয়া থাকবে।
    // 33 বা তার বেশি → Pass
    // 33-এর কম → Fail

// const mark = 56;
// if(mark >= 33){
//     console.log("passed")
// }
// else{
//     console.log("Fail")
// }

// 4-দুইটি সংখ্যার মধ্যে কোনটি বড় তা বের করো।

// const num1 = 12;
// const num2 = 36;
// if (num1 > num2){
//     console.log("num1 is bigger")
// }
// else{
//     console.log("num2 is bigger")
// }

// 5-একজনের বয়স দেওয়া থাকবে।
    // 18 বা তার বেশি → "Eligible to vote"
    // নাহলে → "Not eligible"
    // let age = 12;
    // if(age >= 18){
    //     console.log("Eligible to vote")
    // }
    // else{
    //     console.log('Not eligible')
    // }
  

// 🟡 Intermediate (৬–১০)
// 6-তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা বের করো।
//  const numbers = [13, 54, 98];
//  let maxNumber = numbers[0];
//  for(let number of numbers){
//     if(number > maxNumber){
//         maxNumber = number;
//     }
//  }
//  console.log(maxNumber)


// 7-একটি বছর Leap Year কিনা তা বের করো।
// Hint: 4, 100, এবং 400-এর নিয়ম ব্যবহার করতে হবে।

// 8-মার্কস অনুযায়ী গ্রেড বের করো।
    // 80–100 → A+
    // 70–79 → A
    // 60–69 → A-
    // 50–59 → B
    // 40–49 → C
    // 33–39 → D
    // 0–32 → F
// let mark = 70;
// if(mark < 0 || mark > 100){
//  console.log("please input a valid number of mark")
// }else if(mark >= 80 && mark <= 100){
//     console.log("A+")
// }else if(mark >= 70 && mark <= 79){
//     console.log("A")
// }else if(mark >= 60 && mark<= 69){
//     console.log("A-")
// }else if(mark >= 50 && mark<= 59){
//     console.log("B")
// }
// else if(mark >= 40 && mark<= 49){
//     console.log("C")
// }
// else if(mark >= 33 && mark<= 39){
//     console.log("D")
// }
// else{
//     console.log("F")
// }

// let mark = 31;
// if(mark < 0 || mark > 100){
//  console.log("please input a valid number of mark")
// }else if(mark >= 80 && mark <= 100){
//     console.log("A+")
// }else if(mark >= 70){
//     console.log("A")
// }else if(mark >= 60){
//     console.log("A-")
// }else if(mark >= 50){
//     console.log("B")
// }
// else if(mark >= 40){
//     console.log("C")
// }
// else if(mark >= 33){
//     console.log("D")
// }
// else{
//     console.log("F")
// }

// 9-একটি সংখ্যা 5 এবং 7—উভয় দ্বারা বিভাজ্য কিনা তা বের করো।
const number = 36;
// if(number % 5 === 0 && number % 7 === 0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
console.log(number % 5 === 0 && number % 7 === 0)


// 10-একটি ক্যারেক্টার vowel নাকি consonant তা বের করো।
    // (a, e, i, o, u)

// 🔴 Challenge (১১–১৫)
//11- একটি সংখ্যা 100-এর চেয়ে বড়, ছোট নাকি সমান—তা বের করো।

// 12-তিনটি বাহুর দৈর্ঘ্য দেওয়া থাকলে তা দিয়ে ত্রিভুজ তৈরি করা সম্ভব কিনা বের করো।
    // Hint: Triangle rule ব্যবহার করো।

// 13-একজনের বেতন দেওয়া থাকবে।
    // 5000-এর কম → Low Salary
    // 5000–10000 → Medium Salary
    // 10000-এর বেশি → High Salary

// 14-একটি সংখ্যা 3 অথবা 5 দ্বারা বিভাজ্য কিনা বের করো।
    // (যেকোনো একটিতে বিভাজ্য হলেই হবে।)

// 15-একটি পাসওয়ার্ড "admin123"-এর সাথে মিলিয়ে দেখো।
    // মিললে → "Access Granted"
    // না মিললে → "Access Denied"

// 🎯 Bonus Challenge
// 16- একটি সংখ্যা দিলে বের করো:
    // 3 দ্বারা বিভাজ্য → "Fizz"
    // 5 দ্বারা বিভাজ্য → "Buzz"
    // 3 এবং 5 উভয় দ্বারা বিভাজ্য → "FizzBuzz"
    // কোনোটাই না হলে সংখ্যাটি প্রিন্ট করো।

