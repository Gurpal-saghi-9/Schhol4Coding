/*
Scenario : On a video streaming platform, verify user access to premium content.

Question: Write a program to check if a user has a valid subscription. If the user has a subscription. further checck if the subscription is "premium" or "standard"

IIf "premium", display "Access to all content"
If "standard", display "Access to limited content"
If the user doesn't have a subscription, display "Please subscribe to access content"
*/

let hasSubscription = true; // Change to false to test no subscription
let subscriptionType = "premium"; // Change to "standard" or others to test

if (hasSubscription) {
    if (subscriptionType === "premium") {
        console.log("Access to all content");
    } else if (subscriptionType === "standard") {
        console.log("Access to limited content");
    } else {
        console.log("Unknown subscription type");
    }
} else {
    console.log("Please subscribe to access content");
}
