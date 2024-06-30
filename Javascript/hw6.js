function checkDate(input){
    [day, month, year] = input.split('-');
    if (year < 1000 || year > 9999) {
        return false;
      }
    
      if (month < 1 || month > 12) {
        return false;
      }
    
      const daysInMonth = new Date(year, month, 0).getDate(); // Lấy số ngày của tháng
      if (day < 1 || day > daysInMonth) {
        return false;
      }
    
      // Nếu các điều kiện trên đều hợp lệ, trả về true
      return true;
}

console.log(checkDate('31-11-2023')? "Hop le" : "Khong hop le");