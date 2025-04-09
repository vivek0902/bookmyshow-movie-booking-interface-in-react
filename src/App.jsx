import { useState } from "react";
import "./App.css";
import seatLayout from "./data";
function App() {
  const rows = seatLayout.rows;
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
          <div key={rowTypeIndex} className="section">
            <p className="section-title">
              {rowType.rowType} : ₹{seatLayout.pricing[rowType.rowType]}
            </p>
            <hr />
            {rowType.rows.map((row, rowIndex) => {
              return (
                <div className="row" key={rowIndex}>
                  <div className="rowLable">{row.rowLabel}</div>
                  <div className="seat-group">
                    {row.seats.map((seat, seatIndex) => {
                      return (
                        <div
                          key={seatIndex}
                          className={seat !== null ? "seats" : "seatsForNull"}
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
                            onMouseDown={(e) => e.preventDefault()}
                            onDoubleClick={(e) => e.preventDefault()}
                          >
                            {seat?.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={{ display: "flex" }}>
        <h2>
          Total Price: ₹ {totalPrice} | No of Tickets: {selected.length}
        </h2>
      </div>
    </div>
  );
}

export default App;
