import React, { useState, useEffect } from "react";

function Card({ title, paragraph, link}) {
    // Os props são parâmetros da função que vão ser enviadas de outro lugar.

    return (
        <div style={{ position: "relative", padding: 20, width: "90%", height: "108%", borderRadius: 20, backgroundColor: "#2c2c2c", zIndex: 1 }}>
            <div style={{ position: "relative", top: -9, marginBotton: 13, width: 196, height: 35, backgroundColor: "pink", borderRadius: 5, zIndex: 1, marginLeft: -32, display: "inline-table", padding: 2 }}>
                <h2 style={{ marginTop: 5, textAlign: "center", fontSize: 17, color: "#3f3f3f" }}>{title}</h2>
            </div>
            <div style={{height:"68%"}}>
                <p style={{ wordBreak:"break-all",height:"82%", color: "#d5d5d5", fontSize: 18 }}>{paragraph}</p>
            <div style={{ textAlign: "end", cursor: "pointer", color: "pink" }}><a style={{textDecoration: "none", color:"pink"}} href={link} target="_blank">Read More...</a></div>
            </div>
        </div>
    );
}

export default Card;
