# Student Catalog SPA (React + Bootstrap)

## Instructions to run the project:

```bash
npm install
npm start
```

## How pagination ("See more") is implemented
The pagination is implemented in the `StudentList.jsx` component. Initially, 10 students are displayed. A "See more" button is shown below the list. When clicked, it displays the next 10 students (for a total of 20). After all students are displayed, the "See more" button is hidden. This is managed by a `studentsToShow` state variable, which is updated using `setStudentsToShow` and `Math.min` to ensure it doesn't exceed the total number of students.

## How navigation to the detail page is implemented
Navigation is handled using `react-router-dom`.
- In `App.jsx`, `BrowserRouter`, `Routes`, and `Route` are used to define two routes: `/` for the `StudentList` and `/students/:id` for the `StudentDetail` component.
- When a `StudentCard` is clicked, the `onStudentClick` prop (which uses `useNavigate` from `react-router-dom` in `StudentList.jsx`) pushes a new entry onto the history stack, navigating to `/students/:id` where `id` is the selected student's ID.
- In `StudentDetail.jsx`, `useParams` is used to extract the `id` from the URL. The student data is then found from the `students` prop based on this `id`.
- A "Back to list" button in `StudentDetail.jsx` uses `useNavigate('/')` to return to the `StudentList` view.
