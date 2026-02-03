const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="input-group">
      <input type={type} value={value} onChange={onChange} required />
      <label>{placeholder}</label>
    </div>
  );
};

export default InputField;
