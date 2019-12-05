import React from 'react';


export default function CountryDetails(props) {
    //    console.log(props);

       const countryId = Number(props.match.params.countryId);

       const bordersInitialsArr =props.countryArr[countryId].borders;
       

    //    bordersInitialsArr.forEach( Initials => {  
    //         props.countryArry
          
    //   });
     
        // console.log( typeof countryId);

        // console.log("name of country",props.countryArr[countryId].name.common);
       
    return (

           <div>
    

        <h1>{props.countryArr[countryId].name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{props.countryArr[countryId].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{props.countryArr[countryId].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

       
        </div>
      

    )

   
}

 