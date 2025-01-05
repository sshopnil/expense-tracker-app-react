# Expense Tracker App
![App Screenshot Placeholder](assets/login.png)

## Live Link
[Live link](https://expense-tracker-app-frontend-skst.onrender.com)

## API Documentation

[API Documentation Link](https://expense-tracker-app-backend-i7w6.onrender.com/api-docs/)

---

## Folder Structure
```
frontend/
├── node_modules/        # Contains all npm dependencies (auto-generated during installation)
├── public/              # Public files served directly by the server
├── src/                 # Source files for the application
│   ├── assets/          # Static assets
│   ├── components/      # Reusable UI components (Sidebar, TopBar, etc.)
│   ├── context/         # Global context for state management
│   ├── pages/           # Application pages, divided into features/modules
│   │   ├── Auth/        # Pages for authentication (Login, Register)
│   │   ├── Expense/     # Pages and components for managing expenses
│   │   │   ├── AddExpense/            # Component for adding expenses
│   │   │   ├── ExpenseTrackByDay/     # Component for tracking daily expenses
│   │   │   ├── RecentExpenses/        # Component for viewing recent expenses
│   │   │   ├── expense.css            # Styles specific to expense-related pages
│   │   │   ├── index.jsx              # Entry point for Expense pages
│   │   ├── Fund/                      # Pages and components for managing funds
│   │   │   ├── components/            # Sub-components for Fund management
│   │   │   │   ├── AddForm/           # Component for adding funds
│   │   │   │   ├── BalanceCard/       # Component for displaying balance summary
│   │   │   │   ├── ForecastData/      # Component for expense forecasting for the next 7 days
│   │   │   ├── styles/                # CSS specific to Fund pages
│   │   │   ├── fund.css               # Main styles for Fund pages
│   │   │   ├── index.jsx              # Entry point for Fund pages
│   │   ├── Reports/                   # Pages for viewing reports
│   │   │   ├── components/            # Sub-components for reports
│   │   │   │   ├── ExpenseByDate/     # Component for date-range reports
│   │   │   │   ├── ExpensePieChart/   # Component for visualizing expenses in a pie chart
│   │   │   ├── report.css             # Styles specific to Reports pages
│   │   │   ├── index.jsx              # Entry point for Reports pages
├── App.css             # Global CSS for the application
├── App.jsx             # Main React component for the app
├── GLOBAL_URL.js       # Configuration file for API endpoints or global constants
├── index.css           # Base CSS for the application
├── main.jsx            # Main entry file/Application Entry point
```
---

## Features

### 1. Easy UI for Adding Funds
A streamlined and intuitive interface designed for quick and hassle-free addition of funds. Users can add funds with just a few clicks, ensuring a seamless user experience.

---

### 2. Forecasting Future Expenses from Historical Data
Leverage data-driven insights to predict your future expenses based on past trends. This feature uses statistical algorithms to provide you with an estimate of upcoming expenditures, helping you plan better.

![Forecasting Screenshot Placeholder](assets/fund.png)

---

### 3. Managing Recent Expenses with Updates
Track your recent expenses and make real-time updates. Modify entries, adjust amounts, or delete outdated records with ease to keep your data accurate and up-to-date.

![Manage Expenses Screenshot Placeholder](assets/expenses.png)

---

### 4. Managing Reports from Date Range
Generate detailed reports for a specific date range. Reports include:
- **Pie Charts**: Visualize your expense distribution.
- **Expense Lists**: Access itemized lists for transparency and detailed tracking.

![Reports Screenshot Placeholder](assets/reports.png)
| Recenet Expense Management | Specified expenses from date range | 
|-----------|--------------|
|![Recenet Expenses](assets/update_recent.png) | ![Specified expenses from date range](assets/update_reports.png)|

---

### 5. Material Design
The app leverages Material Design principles to provide a sleek, modern, and user-friendly interface. The design ensures consistency, responsiveness, and accessibility across devices.


---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install dependencies for frontend:
   ```bash
   cd frontend
   npm install
   ```
3. Install dependencies for backend:
  ```bash
  cd backend
  npm install
  ```

4. Start the application:
   backend
   ```bash
   npm start
   ```
   frontend
   ```bash
   npm run dev
   ```

---

## Technology Stack

- **Frontend**: React with Material-UI
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **APIs**: RESTful APIs with Axios integration

---

## Contribution

Feel free to fork the repository and contribute to improving this project. Pull requests are welcome!

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

