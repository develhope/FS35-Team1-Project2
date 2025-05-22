const Star = ()=>{
    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div
        style={{
          position: "relative",
          fontSize: "400px",       
          color: "yellow",
          userSelect: "none",
          lineHeight: 1,
          width: "320px",
          height: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}>
        ★
        <span
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "700",
            fontSize: "20px",       
            textAlign: "center",
            width: "80%",
            userSelect: "none",
            pointerEvents: "none",
          }}>
          Risposta <br/> esatta!
        </span>
      </div>
    </div>
    )
};

export default Star;