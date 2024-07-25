import React from "react";
import moment from 'moment';

const Comoponent = () =>  {
    const momentLibInformation = () => {

      let weeksInYear = 0;
      let worked = false;

      try {
        weeksInYear = moment().weeksInYear();
        weeksInYear = weeksInYear + ' moment().weeksInYear() worked somehow';
        worked = true;
      } catch (e) {
        console.log(e);
        weeksInYear = 'moment().weeksInYear() is not a function in moment@2.5.0'
      }

      return (
        <>
          Moment vesrion: {moment.version}<br />
          Moment feature not available in {moment.version}: <span className="text-red-300">moment().weeksInYear()</span><br />
          <span className={worked ? "text-green-400" : "text-red-400"}>{weeksInYear}</span>
        </>
      )
    }

    return (
      <div>
        ------------------------------------------------- <br />
        <span>Normal component from React 16</span><br />
        {momentLibInformation()}
        <br />
        -------------------------------------------------
      </div>
    )
}

export default Comoponent;
