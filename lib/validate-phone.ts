
export const validatePhone = (inpTelRef: React.RefObject<HTMLInputElement>) => {
  let tel = inpTelRef.current;
  let error = "";
  
    if(tel?.value){
      if (tel.value.startsWith("+7")) {
        if (!(tel.value.length == 18)) {
          error = "Введите номер соответствующий шаблону: +7 (xxx) xxx-xx-xx";
        }
      }
      else if(tel.value.startsWith("8")){
        if (!(tel.value.length == 17)) {
          error = "Введите номер соответствующий шаблону: 8 (xxx) xxx-xx-xx";
        }
      } 
      else {
        if (!(tel.value.length >= 12)) {
          error = "Количество знаков не менее 12";
        }
      }
    }
    else {
      error = "Введите номер";
    }
    return error;
  }
