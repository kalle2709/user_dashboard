# Basic Login and Dashboard Application

This project is a simple web application built using **JavaScript**, **Bootstrap**, and a **PHP API**. It includes a basic login feature, a dynamic dashboard with cards and a table, and enhanced functionalities using the **DataTable** plugin.

## Features

### Login Page
- Basic login functionality with any user and password (no validation or authentication).
- Built using **Bootstrap** forms for styling.

### Dashboard
After logging in, the user is redirected to a **dashboard** containing:

1. **Cards Section**:
   - **Total Orders**: A static card displaying the total number of orders.
   - **Dynamic User Count**: A card populated with user count data fetched from a PHP API.
   - **Profile Viewers**: A static card showing the number of profile viewers.

2. **Data Table**:
   - Data fetched dynamically from a **PHP API** and displayed in a table.
   - A **loader** is shown in the table while the data is being fetched.
   - Built using the **DataTable** JavaScript plugin with the following features:
     - **Search**: Filters the table based on the `Name` column.
     - **Pagination**: Automatically paginates table data.
     - **Page Length**: Users can choose the number of rows displayed per page.
     - **Sorting**: Allows sorting the `Name` column in ascending or descending order.
   - Data is styled using **Bootstrap**.

3. **Navbar**:
   - Includes a user **avatar** fetched dynamically from a random API.
   - Static **Profile** option in the navbar on clicking avatar.
   - **Logout Button** to exit the application on clicking avatar.

4. **Footer**:
   - A static footer styled using **Bootstrap**.

## Technologies Used
1. **Frontend**:
   - **Bootstrap**: For styling the cards, containers, tables, navbar, and footer.
   - **JavaScript**: For logic, API integration, and showing the loader.
   - **DataTable Plugin**: Enhances the table functionalities.
2. **Backend**:
   - **PHP**: Provides APIs to fetch data dynamically for the dashboard and table.

## How It Works
1. **Login**:
   - Enter any username and password to access the dashboard.
2. **Dashboard**:
   - **Dynamic Data Fetching**:
     - Fetches user count and table data from a PHP API.
     - Displays a **loader** in the table until the data is fully loaded.
   - **Interactivity**:
     - Search for table entries by name.
     - Sort the table by name.
     - Use pagination and page length options for navigation.
3. **Navbar**:
   - Shows a dynamically fetched avatar and includes a logout button.

4. The application is fully responsive and optimized for a seamless user experience across all devices, including mobile phones and tablets.

5. **Instructions To Run the project:**
      nstall PHP, then navigate to the src folder in the user_dashboard directory and run the command php -S localhost:8000.

      Next, open the login.html file in a browser, enter any email and password, and click the "Sign In" button to be redirected to the user    
      dashboard page.
   


#**Images**:

LOGIN
<img width="1470" alt="Screenshot 2024-12-05 at 7 04 02 PM" src="https://github.com/user-attachments/assets/f0c69015-f591-488a-a580-19414c1382ed">

DASHBOARD
<img width="1470" alt="Screenshot 2024-12-05 at 7 04 54 PM" src="https://github.com/user-attachments/assets/0cd429c4-e802-4bd8-ba1c-334584afffb3">






