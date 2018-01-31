# Help!

This project was created during Minnehack 2018.

<img src="./screenshots/home.PNG" width="400" >

## Inspiration
Thousands of Professional Helpers/Certified FIrst Aiders exist around the world, they are always ready and prepared for various situations but harder to encounter one. Our Apps works as a Uber App to connect these helpers and the victims in a fast and reliable way. Usually first aid comes with tons of hassle and delay so for patients to be able to contact/meet someone knowledgeable who can convey information beforehand to emergency help (such as 911) prior to their arrival is invaluable. Our app helps speed up the process of acquiring immediate help, thus have the potential to improve injury outcomes.

## What it does

### Injured points marker
* With this app, it allows the patient/reporter to mark which parts of injured person's body was injured.

<img src="./screenshots/select.PNG" width="400" >

### Reporting to emergency help

* Upon the simple request of the user (patient), the app contacts a nearby individual knowledgeable about the topic (i.e. expert first aiders) and also emergency help (i.e. 911) simultaneously

<img src="./screenshots/find.PNG" width="400" >

### Summary
* After this process, the app shows the location of the incoming help, the location of the patient and the ETA.

<img src="./screenshots/otw.PNG" width="400" >


## How we built it
We used an react-native mobile as the foundation for the app as it is more applicable as a mobile application. On top of that, we have sqlite3 as our database and our backend server to connect the first aiders and our victim. As for our beacon to track and locate nearest first aiders, we implement Google Maps Geolocation and Geocoding APIs.

## Challenges we ran into
Finding suitable APIs and libraries to use from react-native libraries Since our team is new to mobile app development, it would take a longer period of time to build an app like this React-native platforms using Expo.io lack extensive libraries
