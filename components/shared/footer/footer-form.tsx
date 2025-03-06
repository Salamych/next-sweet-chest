"use client";

import { Phone } from "lucide-react";
import React from "react";
import {onPhoneKeyDown, onPhoneInput, onPhonePaste} from "../../../lib/phone-mask"
import { validatePhone } from "@/lib/validate-phone";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const FooterForm: React.FC<Props> = ({className}) => {
  const inpTelRef = React.useRef<HTMLInputElement>(null);
  const inpCheckRef = React.useRef<HTMLInputElement>(null);
  const [errPhone, setErrPhone] = React.useState("");
  const [errCheck, setErrCheck] = React.useState("");

  const onSuccess = () => {
    const tel = inpTelRef.current as HTMLInputElement;
    const check = inpCheckRef.current as HTMLInputElement;   

    if (errPhone.length === 0) {
      toast.success("Благодарим за заказ! Ожидайте звонка.")
      console.log("Tel: ", tel.value);

      tel.value = "";
      check.checked = false;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inpCheckRef.current?.checked) {
      setErrCheck("");
      let phone = validatePhone(inpTelRef);

      setErrPhone(phone);

      onSuccess();
    } else {
      setErrCheck("Установите флажок");
    }
  };

  const onBlurValidatePhone = () => {

    let phone = validatePhone(inpTelRef);

    setErrPhone(phone);
  }

 
  
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-6">
          <div className="w-full md:w-1/3 relative">
            <Phone className="fill-[#929aa2] stroke-[#929aa2] w-[14px] h-[14px] absolute top-[calc(1/2*100%-7px)] left-4" />
            <input
              ref={inpTelRef}
              type="tel"
              className="bg-[#f2f6fa] py-8 pl-8 rounded-lg w-full"
              placeholder=" Номер телефона"
              onKeyDown={onPhoneKeyDown}
              onInput={onPhoneInput}
              onPaste={onPhonePaste}
              onBlur={onBlurValidatePhone}
              maxLength={18}
            />
          </div>
          <div className="w-full md:w-1/3">
            <input
              type="submit"
              value={"Сделать заказ"}
              className="text-[#2e363e] text-lg font-medium bg-[#fed84c] rounded-lg hover:bg-[#2e363e] hover:text-white duration-300 py-7 text-center w-full"
            />
          </div>
        </div>
        {errPhone.length > 0 && (
          <p className="text-sm absolute text-red-500 left-1/4 bottom-[22%]">
            {errPhone}
          </p>
        )}
        <div className="relative">
          <div className="text-xs text-[#7e868e]">
            <label>
              <input ref={inpCheckRef} type="checkbox" name="personal-data" />{" "}
              Нажамая на кнопку, вы соглашаетесь с условиями обработки
              персональных данных
            </label>
          </div>
          {errCheck.length > 0 && (
            <p className="text-sm absolute text-red-500 left-[21%]  -bottom-[150%]">
              {errCheck}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}