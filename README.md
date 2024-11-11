Changelog
v1.0.0 - Initial Setup
•	Initial project setup: Created basic structure for the app, including necessary screens for menu management.
•	HomeScreen Implementation: Displayed a list of items on the homepage, with basic styling and data fetching from a static menu array.
•	AddMenuItemScreen: Added a form to allow users to add new menu items.
•	MenuData: Implemented basic methods to add items (addMenuItem) and fetch items (getMenuItems) from an in-memory list.
________________________________________
v1.1.0 - Price and Item Addition
•	Add Price Field: Updated the AddMenuItemScreen to accept a price along with the name and course of the menu item.
•	Price Validation: Implemented validation for the price input field, ensuring the user enters a valid number before submitting the form.
•	Dynamic Item Rendering: Modified the HomeScreen and FilterScreen to display items with both the name and price.
________________________________________
v1.2.0 - Menu Item Filtering and Deletion
•	Filter Menu by Course: Added a filtering option in FilterScreen to show items by their course type (starter, main, dessert).
•	Item Removal Feature: Implemented the ability to remove menu items from both the HomeScreen and FilterScreen.
•	MenuData Refactoring: Refactored the getMenuItems and removeMenuItem functions to work correctly with in-memory data management, and ensure state updates on item removal.
________________________________________
v1.3.0 - Background Image and UI Enhancements
•	Background Image: Added a background image to the HomeScreen, FilterScreen, and AddMenuItemScreen for a more consistent and appealing UI across the app.
•	Refactored Menu List: Simplified the rendering of the menu list by creating a reusable MenuList component that accepts the menu data and removes items via a passed callback function.
•	UI Enhancements: Applied consistent padding and margins across screens for a cleaner layout, ensuring UI elements are well-aligned and readable.
________________________________________
v1.4.0 - Code Refactoring and Performance Enhancements
•	Refactored State Management: Refactored state management in HomeScreen and FilterScreen to optimize performance and ensure that the state correctly updates when items are added or removed.
•	Debounced Menu Updates: Optimized the fetching and rendering of menu items using useEffect and interval cleanup for better performance on data updates.
•	Code Cleanup: Removed redundant code and consolidated repetitive logic into shared functions to improve maintainability.
________________________________________
v1.5.0 - Final Touches and Bug Fixes
•	Fixed Item Removal Bug: Addressed the issue where the removal button was not working on the FilterScreen by properly managing the menuItems state after an item is deleted.
•	Consistent Background Image: Ensured that the background image appears on all screens (Home, Filter, AddMenuItem) for consistency.
•	Code Optimization: Reduced redundant state updates and improved the flow of data between components.

Commit Messages:
1.	Add basic structure for HomeScreen and AddMenuItem functionality
o	Added HomeScreen to display initial menu items.
o	Created AddMenuItemScreen to allow users to add new items.
2.	Implement getMenuItems and addMenuItem functions for managing menu data
o	Added menuData.js to manage menu item storage and manipulation.
o	Implemented getMenuItems to fetch all menu items and addMenuItem to add items.
3.	Refactor HomeScreen to display item name, price, and count on the homepage
o	Updated HomeScreen to display total number of menu items and average prices per course.
o	Integrated MenuList component to display list of menu items.
4.	Create MenuList component to render menu items dynamically
o	Created MenuList.js to render list of menu items with names and prices.
5.	Add background image to HomeScreen
o	Applied ImageBackground for a background image in HomeScreen.
6.	Allow menu item filtering by course on FilterScreen
o	Added FilterScreen to filter and display items by their course type (Starter, Main, Dessert).
o	Integrated Picker for course selection.
7.	Add functionality to remove menu items from HomeScreen and FilterScreen
o	Added item removal functionality on both HomeScreen and FilterScreen.
o	Created removeMenuItem to allow removal of items from menuItems array.
8.	Fix dynamic rendering of menu items after removal
o	Updated handleRemoveItem logic in both HomeScreen and FilterScreen to ensure items are re-rendered after removal.
9.	Ensure background image applies across all screens
o	Applied background image to both AddMenuItemScreen and FilterScreen using ImageBackground.
10.	Fix issue with the FilterScreen not showing updated menu items after course change
o	Refactored FilterScreen to update menu items dynamically when course selection changes.
o	Fixed bug where course changes were not triggering a menu refresh.
11.	Refactor state management for filtering and removal of items in FilterScreen
o	Refactored useEffect and setMenuItems logic for FilterScreen to properly handle filtering and item removal.
12.	Add price input for AddMenuItemScreen and validation
o	Added price input field to AddMenuItemScreen.
o	Implemented validation to ensure the price is a valid number before adding a menu item
