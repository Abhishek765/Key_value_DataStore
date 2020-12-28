let d = new Date();
var time = d.getTime();

// Here "data"  is the object in which we store the data
let data = {};

// we export our functions using Class
export default class Code {

  // Create Operation
  create = (key, value, timeout = 0) => {
    if (key in data) {
      console.log("Error: This key is already exists");
    } else {
      if (key.search(/[^A-Za-z\s]/) != -1) {
        console.log(
          "Error: Invalid Key!! Key must contain only alphabets and no special characters or numbers"
        );
      } else {
        // If file size less than 1GB and JSONObject value less than 16KB
        if (
          Object.keys(data).length < 1024 * 1020 * 1024 &&
          value <= 16 * 1024 * 1024
        ) {
          let l;
          if (timeout === 0) {
            l = [value, timeout];
          } else {
            l = [value, time + timeout];
          }
          if (key.length <= 32) {
            // input key length capped at 32 characters
            data[key] = l;
          } else {
            console.log(
              "Error: Invalid Key length must be less than 32 characters"
            );
          }
        } else {
          // Error message2
          console.log("Error: Memory limit exceeded!! ");
        }
      }
    }
  };

  // Read Operation
  read = (key) => {
    //    console.log(`Data : ${data[key][0]} `)
    if (!(key in data)) {
      // When key is not present
      console.log(
        "Error: given key does not exist in database. Please enter a valid key"
      );
    } else {
      let temp = data[key];

      if (temp[1] !== 0) {
        // Comparing present time with expiry time
        if (time < temp[1]) {
          // To return the value in the format of JsonObject
          // let strObj =`{${key} : ${temp[0]}}`
          // return JSON.parse(strObj.toString())
          return `{${key} : ${temp[0]}}`;
        } else {
          console.log(`Error: time-to-live of ${key} has expired"`);
        }
      } else {
        // let strObj =`{${key} : ${temp[0]}}`
        // return JSON.parse(strObj.toString())
        return `{${key} : ${temp[0]}}`;
      }
    }
  };

//   Delete Operation
  delete = (key) => {
    if (!(key in data)) {
      // When key is not present
      console.log(
        "Error: given key does not exist in database. Please enter a valid key"
      );
    } else {
      let temp = data[key];
      if (temp[1] !== 0) {
        // Comparing present time with expiry time
        if (time < temp[1]) {
          delete data[key];
          console.log("key is successfully deleted");
        } else {
          console.log(`Error: time-to-live of ${key} has expired"`);
        }
      } else {
        // Delete the key value
        delete data[key];
        console.log("key is successfully deleted");
      }
    }
  };

  //   Extra function to modify using the key
  modify = (key, value) => {
    if (!(key in data)) {
      console.log(
        "Error: given key does not exist in database. Please enter a valid key"
      );
    } else {
      let temp = data[key];
      if (temp[1] !== 0) {
        if (time < temp[1]) {
          if (!(key in data)) {
            // When key is not present
            console.log(
              "Error: given key does not exist in database. Please enter a valid key"
            );
          } else {
            let a = [];
            a.push(value);
            a.push(temp[1]);
            data[key] = a;
          }
        } else {
          console.log(`Error: time-to-live of ${key} has expired"`);
        }
      } else {
        if (!(key in data)) {
          // When key is not present
          console.log(
            "Error: given key does not exist in database. Please enter a valid key"
          );
        } else {
          let a = [];
          a.push(value);
          a.push(temp[1]);
          data[key] = a;
        }
      }
    }
  };

}//Class end
