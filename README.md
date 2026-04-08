# ⚡ Harry Potter Explorer

This project is an Angular application developed for **COMP 3133 – Lab Test 2 (Option 2b)**. It uses the public Harry Potter API to display a list of characters along with detailed information and filtering features.

---

## 📌 Description

In this project, I built a responsive web application that fetches real-time data from the Harry Potter API using Angular’s `HttpClient`. The application allows users to browse characters, filter them based on their Hogwarts house, and view detailed profiles for each character.

---

## 🚀 Features Implemented

* **Character List:**
  Displays all characters in a grid layout showing name, house, and image.

* **Filter by House:**
  Users can filter characters using a dropdown (Gryffindor, Slytherin, Hufflepuff, Ravenclaw).

* **Character Details Page:**
  Clicking on a character opens a detailed view showing:

  * Name
  * Species
  * House
  * Wizard status
  * Ancestry
  * Actor
  * Wand details (wood, core, length)
  * Image

* **Routing:**
  Implemented navigation using route parameters (`/character/:id`).

* **Service Integration:**
  Created a service to fetch data from the API.

* **Interface:**
  Defined a `Character` interface to structure API data.

* **UI Design:**
  Used Angular Material components with custom styling for a clean dark-themed layout.

---

## 🛠️ Tech Stack

* Angular 17 (Standalone Components)
* Angular Material
* TypeScript
* RxJS & HttpClient
* Harry Potter Public API
* Vercel (for deployment)

---

## 📷 Screenshots

Screenshots of the application are included in the D2L submission:

* Character List Page
* Filtered Characters by House
* Character Details Page

---

## ▶️ How to Run the Project

### Prerequisites

Make sure you have:

* Node.js installed
* Angular CLI installed

### Steps

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Navigate into the project folder:

   ```bash
   cd studentid-lab-test2-comp3133
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ng serve
   ```

5. Open your browser and go to:

   ```
   http://localhost:4200/
   ```

---

## 🌐 Deployment

The application is deployed using Vercel. The live link is provided in the submission.

---

## 📌 Notes


* The application uses a public API, so no backend or database is required.
* Created by Manvi Prakash

---
