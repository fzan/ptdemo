import React from "react";


const HalfHour = ({hour, bgColor}) => {
    return(
        <td style={bgColor} data-hour={hour}>
            {/* {hour/2} */}
        </td>
    )
};

export default HalfHour;