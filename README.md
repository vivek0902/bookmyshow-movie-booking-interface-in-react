````markdown
# 🎟️ Seat Booking App

A simple React-based seat selection and booking interface. Users can select available seats, and the total ticket price and number of selected tickets are calculated in real-time.

## ✨ Features

- Dynamic seat layout rendered from a data file
- Select and deselect available seats
- Real-time price calculation based on seat types
- Visual indication for selected and unavailable seats

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/seat-booking-app.git
   cd seat-booking-app
   ```
````

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 🧠 Project Structure

```
/src
  ├── App.js             # Main component handling UI and logic
  ├── App.css            # Styling for the app
  ├── data.js            # Contains seat layout and pricing info
  └── index.js           # Entry point
```

## 🛠️ Customization

### Seat Data Format (`data.js`)

You can define rows, seat availability, and pricing. Example:

```js
const seatLayout = {
  pricing: {
    VIP: 300,
    Regular: 150,
  },
  rows: [
    {
      rowType: "VIP",
      rows: [
        {
          rowLabel: "A",
          seats: [
            { label: "A1", available: true, type: "VIP" },
            { label: "A2", available: false, type: "VIP" },
            null,
            ...
          ],
        },
      ],
    },
    ...
  ],
};

export default seatLayout;
```

## 🎨 UI Overview

- ✅ Green border: Available seats
- ❌ Grey background: Unavailable seats
- 🟩 Green background: Selected seats
- 🧮 Bottom panel: Shows total price and number of selected seats
