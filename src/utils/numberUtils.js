
export const formatNumber = (number) => {
    const floatNumber = parseFloat(number);
  
    if (isNaN(floatNumber)) {
      return "Invalid number";
    }
  
    return floatNumber.toFixed(2);
  };


  