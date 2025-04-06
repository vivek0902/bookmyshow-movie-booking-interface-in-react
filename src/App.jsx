import { useState } from "react";
import "./App.css";
import seatLayout from "./data";
function App() {
  const [rows, _] = useState(seatLayout.rows);
  const [selected, setSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSelect = (seat) => {
    if (seat !== null && seat.available !== false) {
      if (selected.includes(seat)) {
        setSelected((prev) => prev.filter((PrevSeat) => PrevSeat !== seat));
        setTotalPrice((prev) => prev - seatLayout.pricing[seat.type]);
      } else {
        setSelected((prev) => [...prev, seat]);
        setTotalPrice((prev) => prev + seatLayout.pricing[seat.type]);
      }
    }
  };
  return (
    <div className="container">
      {rows.map((rowType, rowTypeIndex) => {
        return (
          <div key={rowTypeIndex}>
            <p>
              {rowType.rowType} : ₹{seatLayout.pricing[rowType.rowType]}
            </p>
            {rowType.rows.map((row, rowIndex) => {
              return (
                <div className="rows" key={rowIndex}>
                  <p className="rowLable">{row.rowLabel}</p>
                  {row.seats.map((seat, seatIndex) => {
                    return (
                      <div
                        key={seatIndex}
                        className="seats"
                        style={{
                          border: seat === null ? "" : "1px solid green",
                          backgroundColor:
                            !seat?.available && seat !== null
                              ? "#c6c6c6"
                              : selected.includes(seat)
                              ? "#1ea83c"
                              : "white",
                          cursor: seat?.available === true ? "pointer" : "",
                        }}
                        onClick={() => handleSelect(seat)}
                      >
                        <p
                          style={{
                            color:
                              !seat?.available || selected.includes(seat)
                                ? "white"
                                : "green",
                          }}
                          className="seatLable"
                          onMouseDown={(e) => e.preventDefault()}
                          onDoubleClick={(e) => e.preventDefault()}
                        >
                          {seat?.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}

      <div>
        <h2>Total Price: ₹ {totalPrice}</h2>
        <h2>No of Tickets: {selected.length}</h2>
      </div>
    </div>
  );
}

export default App;
