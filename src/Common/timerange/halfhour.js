import React from "react";


const HalfHour = ({ora, bgColor}) => {
    return(
        <td style={bgColor} data-hour={ora}>
            {/* {ora/2} */}
        </td>
    )
};

export default HalfHour;