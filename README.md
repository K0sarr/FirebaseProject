# Firebase-Project: A Social Platform created with React handling CRUD and Google sign in.
![image](https://github.com/user-attachments/assets/d756a7cb-415f-4cb1-804f-58d22d28cfe2)



## Overview
The Firebase Posts App is a full-stack web application that allows users to sign in using Google, create posts, browse through existing content, and like or unlike posts. The application leverages Firebase for user authentication, database management, and hosting, ensuring a seamless and secure user experience. The app is built with React, making it dynamic and responsive.

## Technologies Used
+ React: A JavaScript library for building user interfaces, focusing on component-based architecture and efficient state management.
+ Firebase: A comprehensive app development platform by Google, used here for:
1. Authentication: Google Sign-In for secure user authentication.
2. Firestore: A NoSQL cloud database for storing user posts and likes.
3. Hosting: To deploy and serve the application.
+ React Router: For managing navigation and routing within the application.
+ React Hook Form: For handling form validations and submissions.
+ Yup: A JavaScript schema builder for runtime value parsing and validation, used in tandem with React Hook Form.
+ React Toastify: For displaying toast notifications, enhancing user experience.

## Features
+ Google Sign-In: Secure and easy authentication using Google accounts.
+ Create Posts: Authenticated users can create new posts with a title and description.
+ Browse Posts: Users can view all posts created by others.
+ Like & Unlike Posts: Users can like or unlike posts, with real-time updates on the number of likes.
+ Responsive Design: The app is fully responsive, ensuring optimal usability across various devices.


## Getting Started
1. Prerequisites
  - Node.js and npm installed on your machine
    - Basic knowledge of JavaScript and React.
    - A Firebase project setup in your Firebase console.

## Installation
1. Clone the repository:
  - git clone https://github.com/K0sarr/FirebaseProject.git
2. Navigate to the project directory:
3. Install dependencies:
  - npm install
## Set up Firebase:
1. Create a Firebase project in your Firebase console.
2. Enable Firestore and Authentication (Google Sign-In method).
3. Copy your Firebase configuration and replace the content of firebaseConfig in the firebase.js file in the config folder.
## Running the Project
1. Start the development server:
    - npm start

#### Acknowledgements
This project was inspired by the need to demonstrate Firebase's powerful real-time database and authentication features within a React application. I stumbled upon this project by browsing a React Course on the web, which also included Typescript.
[Learn React in 8 Hours (Pedro Tech)](https://youtu.be/f55qeKGgB_M?si=AQzZA3yMuxERmMv6)

