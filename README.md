# Habit_Tracker

Track your habits using the app and also maintain a weekly streak to know how many you are following the habit.

## Features

- Browse the previously added habits.
- Add new habits.
- Flag habits based in Weekly streak.
- Track weekly progess.
- Edit or modify existing habits.
- Delete old habits.

## Getting Started

1. Clone the repository: (https://github.com/kyrios12/React_tracker)
2. Project live Demo: (https://react-tracker-xptz.vercel.app/)
3. Navigate to the project directory and extract the files.
4. Run `npm install` to install the required packages.
5. Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

## High-Level Design

![image](https://github.com/kyrios12/React_tracker/assets/103828615/cda2039b-5315-4e4a-887d-63886741422a)

![image](https://github.com/kyrios12/React_tracker/assets/103828615/35cef610-ad4f-4637-a738-245b90648fb8)
![image](https://github.com/kyrios12/React_tracker/assets/103828615/d0a53a4f-54d1-4d88-acaa-f6bbd8b1328c)
![image](https://github.com/kyrios12/React_tracker/assets/103828615/c904d7ae-dc4f-470a-b293-5221d12571a9)


### Home Page
![image](https://github.com/kyrios12/React_tracker/assets/103828615/e76481b5-2809-4724-b9a2-f90a8bb634c5)
### Streak Page
![image](https://github.com/kyrios12/React_tracker/assets/103828615/9ce88d88-b7bc-46af-9ab5-192c675b1a9b)
### Components

- **Navbar Component**: ![image](https://github.com/kyrios12/React_tracker/assets/103828615/8f32f2f4-0119-49f2-8731-b0b3b501d0bb)

- **AddHabit Component**: ![image](https://github.com/kyrios12/React_tracker/assets/103828615/2c42ac6c-fc71-4ff5-9dd7-4c9c42c19468)

- **HabitList Component**: ![image](https://github.com/kyrios12/React_tracker/assets/103828615/84b3b61a-b4a2-4749-8c42-3f0dbaa24df9)

- **Flag Button**: ![image](https://github.com/kyrios12/React_tracker/assets/103828615/a5aa2a3f-ffb3-427e-93d6-bb83da3f6b97)

- **Streak Component**: ![image](https://github.com/kyrios12/React_tracker/assets/103828615/e364163d-e6fa-4243-95b8-7b1cb2675604)

## Routes

- **Landing Route**: http://localhost:3000/
- **Streak Route**: http://localhost:3000/weekly
## Exception Handling

Exceptions are handled for scenarios like:
- When no habit is present.
- When deleting a habit.
