"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProfileFormReadOnly = ({ profileData, onSave }) => {
  // Fallback to empty strings if profileData is not provided
  const [data, setData] = useState(profileData || {
    profilePic: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    country: "",
    city: "",
    zip: "",
    specialization: "",
    experience: "",
    panelCategory: "",
    contestedArbitration: "",
    address: "",
    profession: "",
    dob: "",
    gender: "",
  });

  // Handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prevData) => ({
          ...prevData,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-md shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Profile Management</h1>

      {/* Profile Picture Upload */}
      <div className="mb-4">
        <Label>Profile Picture</Label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-2"
        />
        {data.profilePic && (
          <img
            src={data.profilePic}
            alt="Profile Preview"
            className="w-20 h-20 rounded-full mt-2"
          />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name and Specialization */}
        <div>
          <Label>First Name:</Label>
          <p className="text-gray-700">{data.firstName}</p>
        </div>
        <div>
          <Label>Specialization:</Label>
          <p className="text-gray-700">{data.specialization}</p>
        </div>

        {/* Last Name and Years of Experience */}
        <div>
          <Label>Last Name:</Label>
          <p className="text-gray-700">{data.lastName}</p>
        </div>
        <div>
          <Label>Years of Experience:</Label>
          <p className="text-gray-700">{data.experience}</p>
        </div>

        {/* Phone and Categories of Panel of Arbitrator */}
        <div>
          <Label>Phone:</Label>
          <p className="text-gray-700">{data.phone}</p>
        </div>
        <div>
          <Label>Categories of Panel of Arbitrator:</Label>
          <p className="text-gray-700">{data.panelCategory}</p>
        </div>

        {/* Email and Contested Arbitration */}
        <div>
          <Label>Email:</Label>
          <p className="text-gray-700">{data.email}</p>
        </div>
        <div>
          <Label>Contested Arbitration:</Label>
          <p className="text-gray-700">{data.contestedArbitration}</p>
        </div>

        {/* Location and Address */}
        <div>
          <Label>Location:</Label>
          <p className="text-gray-700">{data.location}</p>
        </div>
        <div>
          <Label>Address:</Label>
          <p className="text-gray-700">{data.address}</p>
        </div>

        {/* Country and Profession */}
        <div>
          <Label>Country:</Label>
          <p className="text-gray-700">{data.country}</p>
        </div>
        <div>
          <Label>Profession:</Label>
          <p className="text-gray-700">{data.profession}</p>
        </div>

        {/* City and DOB */}
        <div>
          <Label>City:</Label>
          <p className="text-gray-700">{data.city}</p>
        </div>
        <div>
          <Label>Date of Birth:</Label>
          <p className="text-gray-700">{data.dob}</p>
        </div>

        {/* Zip and Gender */}
        <div>
          <Label>Zip:</Label>
          <p className="text-gray-700">{data.zip}</p>
        </div>
        <div>
          <Label>Gender:</Label>
          <p className="text-gray-700">{data.gender}</p>
        </div>
      </div>

      {/* Save Profile Button */}
      <div className="flex justify-end mt-6">
        <Button onClick={onSave} className="w-32">
          Save Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileFormReadOnly;
