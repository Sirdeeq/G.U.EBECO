import React from "react";
import ProfileForm from "../component/democomponent/form/ProfileForm";
import CustomButton from "../component/democomponent/form/CustomButton";
import { useNavigate } from "react-router-dom";

export default function NewQuestion() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5 m-8 border shadow-sm ">
        <CustomButton
          type="button"
          color="bg-violet-400"
          buttonText="Back"
          onClick={() => navigate(-1)}
        />
        <h1
          style={{ fontSize: "30px" }}
          className="text-lg font-bold leading-7 text-violet-400 text-center text-gray-900"
        >
          Create New Quotation
        </h1>
        <ProfileForm />
      </div>
    </div>
  );
}
