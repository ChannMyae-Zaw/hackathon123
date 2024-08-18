const API = "https://66c13be7f83fffcb5878efbf.mockapi.io/Medication"

export function getMedication() {

    return fetch(API)

        .then((res) => res.json())

        .catch((error) => {

            console.log(error);

        });

}

export function createMedication(medication) {


    const requestOptions = {
  
      method: "POST",
  
      headers: { "Content-Type": "application/json" },
  
      // Send your data in the request body as JSON
  
      body: JSON.stringify(medication),
  
    };
  
    return fetch(API, requestOptions)
  
      .then((res) => res.json())
  
      .catch((error) => {
  
        console.log(error);
  
      });
    }

    export function deleteMedication(medication) {

        return fetch(API + "/" + medication.id, { method: "DELETE" })
      
          .then((res) => res.json())
      
          .catch((error) => {
      
            console.log(error);
      
          });
      
      }