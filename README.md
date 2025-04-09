
# 🎟️ Seat Booking App
A simple React-based seat selection and booking interface. Users can select available seats, and the total ticket price and number of selected tickets are calculated in real-time.

Live Demo: https://vivek0902.github.io/bookmyshow-movie-booking-interface-in-react/

![image](https://github.com/user-attachments/assets/c445e712-564d-4a19-bcfc-f2d1a8f604b3)

## ✨ Features

- Dynamic seat layout rendered from a data file
- Select and deselect available seats
- Real-time price calculation based on seat types
- Visual indication for selected and unavailable seats


## 🧠 Project Structure

/src
  ├── App.js             # Main component handling UI and logic
  ├── App.css            # Styling for the app
  ├── data.js            # Contains seat layout and pricing info
  └── index.js           # Entry point

## 🎨 UI Overview

- ✅ Green border: Available seats
- ❌ Grey background: Unavailable seats
- 🟩 Green background: Selected seats
- 🧮 Bottom panel: Shows total price and number of selected seats
