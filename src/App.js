import { useState } from "react";

export default function App() {
  // We're using a single object to store all the state.
  // The first key is a boolean tracking the checked property of the checkbox.
  // The second is a string tracking the value of the selected radio input.
  // The third is a string that matches the value of one of the options in the dropdown.
  const [formData, setFormData] = useState({
    agree: false,
    ageRange: "",
    prize: "1",
  });

  // A single handler will update the state.
  // With checkboxes, we're not concerned about the value, so we read the checked property instead of the value property.
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    // Update the state based on the previous state.
    setFormData({
      ...formData,
      // eslint-disable-next-line eqeqeq
      [name]: type == "checkbox" ? checked : value,
    });
  };

  return (
    <form>
      <label>
        Agree to Terms of Use?
        <input
          name="agree"
          type="checkbox"
          onChange={handleChange}
          checked={formData.agree}
        />
      </label>
      <br />
      <label>
        Age 13-19
        <input
          name="ageRange"
          value="teen"
          type="radio"
          onChange={handleChange}
          checked={formData.ageRange === "teen"}
        />
      </label>
      <br />
      <label>
        Age 20-55
        <input
          name="ageRange"
          value="adult"
          type="radio"
          onChange={handleChange}
          checked={formData.ageRange === "adult"}
        />
      </label>
      <br />
      <label>
        Age 55+
        <input
          name="ageRange"
          value="senior"
          type="radio"
          onChange={handleChange}
          checked={formData.ageRange === "senior"}
        />
      </label>
      <br />
      <label>
        Select Your Prize:
        <select name="prize" onChange={handleChange} value={formData.prize}>
          <option value="1">Cruise</option>
          <option value="2">Gift Card</option>
          <option value="3">LED TV</option>
          <option value="4">iPhone 11</option>
        </select>
      </label>
    </form>
  );
}