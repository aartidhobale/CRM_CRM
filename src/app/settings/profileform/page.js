"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { DatePicker } from "@shadcn/ui/date-picker";

const ProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [profilePic, setProfilePic] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
    setValue("profilePic", e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Profile Management</h1>

      {/* Profile Picture */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Profile Picture</label>
        <input type="file" onChange={handleProfilePicChange} className="mt-1" />
        {profilePic && <img src={profilePic} alt="Profile Preview" className="w-20 h-20 rounded-full mt-2" />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name and Last Name */}
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <Input {...register("firstName")} placeholder="First Name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <Input {...register("lastName")} placeholder="Last Name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Phone, Mobile, and Email */}
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <Input {...register("phone")} placeholder="Phone" />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <Input {...register("mobile")} placeholder="Mobile" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <Input {...register("email")} placeholder="Email" type="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Location, Country, City, and Zip */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <Input {...register("location")} placeholder="Location" />
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <Input {...register("country")} placeholder="Country" />
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <Input {...register("city")} placeholder="City" />
        </div>
        <div>
          <label className="block text-sm font-medium">Zip</label>
          <Input {...register("zip")} placeholder="Zip" type="number" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Specialization, Address, and Profession */}
        <div>
          <label className="block text-sm font-medium">Specialization</label>
          <Input {...register("specialization")} placeholder="Specialization" />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <Input {...register("address")} placeholder="Address" />
        </div>
        <div>
          <label className="block text-sm font-medium">Profession</label>
          <Input {...register("profession")} placeholder="Profession" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Date of Birth and Gender */}
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          {/* Uncomment DatePicker when available */}
          {/* <DatePicker onChange={(date) => setValue("dob", date)} /> */}
          <Input {...register("dob")} placeholder="Date of Birth" type="date" />
        </div>
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <div className="flex items-center space-x-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                value="male"
                {...register("gender")}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="female"
                {...register("gender")}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="other"
                {...register("gender")}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-15 mt-4">Save Profile</Button>
    </form>
  );
};

export default ProfileForm;
