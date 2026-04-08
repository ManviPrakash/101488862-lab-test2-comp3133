# ⚡ Harry Potter Explorer

This is a premium, responsive Angular application built for **COMP 3133 - Lab Test 2 (Option 2b)**. It consumes the public Harry Potter API to display a comprehensive wizarding directory with advanced filtering and detailed character profiles.

## Description
The application fetches live data using the Angular `HttpClient` and presents it in a sleek, dark-mode user interface. Users can browse characters in a responsive 4-column grid, filter the roster by their Hogwarts House, and click into individual profiles to see deeper lore, including wand specifics and ancestry.

## Features Implemented
- **Latest Angular Syntax:** Built using Standalone Components and Angular Signals for reactive state management.
- **Advanced Control Flow:** Utilizes `@for` for rendering grids, `@if` for conditional image loading, and `@switch` for dynamic Hogwarts House badges.
- **REST API Integration:** Implements a dedicated service (`HarryPotterService`) to perform HTTP GET requests to the `hp-api.onrender.com` endpoints.
- **Dynamic Filtering:** Includes a Reactive Form dropdown using Angular Material to filter the UI by house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw).
- **Routing & Parameter Passing:** Navigates to individual character profiles by passing the character UUID through route parameters (`/character/:id`).
- **Premium UI/UX:** Styled with Angular Material components (Cards, Toolbars, Buttons, Selects) heavily customized with a dark, cinematic aesthetic and CSS Grid.

## Screenshots
*(Note: Screenshots of the application running, the filtered viewS are included in the D2L submission document).*
- **Main Roster:** 4-column grid of characters.
- **Filtered View:** Displays only characters belonging to the selected house.
- **Details View:** A dedicated profile card showing wand details, ancestry, and actor information.

## Tech Stack
- **Framework:** Angular 17+ (Standalone)
- **Styling:** Angular Material & Custom CSS
- **Data Fetching:** RxJS & `HttpClientModule` (via `withFetch`)
- **Deployment:** Vercel 

## Instructions to Run the Project

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and the [Angular CLI](https://angular.io/cli) installed on your machine.

### Setup Steps
1. Clone this repository to your local machine.
2. Open a terminal inside the project directory.
3. Run the following command to install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server by running:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/` to explore the application.
