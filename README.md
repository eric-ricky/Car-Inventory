# Car Inventory

This is a simple web application built using Next.js that retrieves car inventory data from an API and allows users to view and filter the data based on the car's year.

[Try it out!](https://sparkblog.vercel.app/)

![Preview][preview]

## Features

- Retrieves car inventory data from an API endpoint
- Stores the data in a Context API state variable for easy access across components
- Sorts the car inventory data in increasing ascending order using the car's year (implemented with JavaScript's in-built sort method which uses the Quick Sort algorithm)
- Displays the sorted data to the user using a custom `<Car />` component
- Provides a user-friendly input field for filtering the car inventory by year in real-time

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/eric-ricky/Car-Inventory.git`
2. Navigate to the project directory: `cd your-repo`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Folder Structure

The project structure is organized as follows:

```bash
├── pages
│   ├── api
│   │   ├── hello.ts
│   │   └── v1
│   │       └── cars.ts
│   ├── _app.tsx
│   └── index.tsx
├── context
│   └── CarContext.tsx
├── components
│   └── cars
│       ├── Car.tsx
│       └── LoadingComponent.tsx
└── ...
```

- `pages`: Contains the main pages of the application. In this case, there is only one page, `index.ts`
- `components`: Contains `Car.tsx` component which renders car inventory data.
- `api`: Contains a mock API endpoint (`cars.ts`) that retrieves car inventory data.
- `context`: Contains the Context API related files. The `CarContext.tsx` file provides the state and methods for managing the car inventory data.

## How it Works

1. When the application loads, it makes a request to the API endpoint to fetch car inventory data.
2. The retrieved data is stored in the `CarContext` state variable, making it accessible to other components.
3. The car inventory data is sorted in increasing ascending order based on the car's year using the Quick Sort algorithm.
4. The sorted data is rendered to the user from the `index.tsx` page.
5. The user can input a car's year in the filter input field, which filters the car inventory data in real-time based on the input.
6. The filtered data is displayed to the user as they type, allowing them to view the available car inventories for a specific year.

## Future Improvements

- Implement pagination or infinite scrolling for large car inventory datasets to improve performance.
- Add additional filter options, such as filtering by make or model of the car.
- Implement unit tests to ensure the functionality of different components and methods.
- Integrate a real API endpoint to fetch actual car inventory data in a production environment.

## Conclusion

In this project, I used Next.js, Context API, Quick Sort algorithm, and real-time filtering to build a car inventory management system.

Thank you 👍

[preview]: snap.jpg
