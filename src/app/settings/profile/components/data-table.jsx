"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function DataTable() {
  const [formData, setFormData] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    phone: "",
    mobile: "",
    email: "",
    location: "",
    country: "",
    city: "",
    zip: "",
    specialization: "",
    address: "",
    profession: "",
    dob: "",
    gender: "",
  });

  const [profiles, setProfiles] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles([...profiles, formData]);
    setFormData({
      profilePicture: "",
      firstName: "",
      lastName: "",
      phone: "",
      mobile: "",
      email: "",
      location: "",
      country: "",
      city: "",
      zip: "",
      specialization: "",
      address: "",
      profession: "",
      dob: "",
      gender: "",
    }); 
  };

  return (
    <Card className="p-6 max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle>Profile Management</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <Input type="file" id="profilePicture" onChange={handleFileChange} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            </div>
            <div>
              <Label htmlFor="zip">Zip</Label>
              <Input id="zip" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            </div>
            <div>
              <Label htmlFor="profession">Profession</Label>
              <Input id="profession" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} />
            </div>
            <div>
              <Label>Gender</Label>
              <RadioGroup className="flex gap-4">
                <RadioGroupItem id="male" value="Male" checked={formData.gender === "Male"} onChange={() => setFormData({ ...formData, gender: "Male" })} />
                <Label htmlFor="male">Male</Label>
                <RadioGroupItem id="female" value="Female" checked={formData.gender === "Female"} onChange={() => setFormData({ ...formData, gender: "Female" })} />
                <Label htmlFor="female">Female</Label>
                <RadioGroupItem id="other" value="Other" checked={formData.gender === "Other"} onChange={() => setFormData({ ...formData, gender: "Other" })} />
                <Label htmlFor="other">Other</Label>
              </RadioGroup>
            </div>
          </div>

          <CardFooter>
            <Button type="submit">Save Profile</Button>
          </CardFooter>
        </form>
      </CardContent>

      
      {profiles.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Submitted Profiles</h2>
          <ul className="space-y-4">
            {profiles.map((profile, index) => (
              <li key={index} className="border p-4 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong>First Name:</strong> {profile.firstName}
                  </div>
                  <div>
                    <strong>Last Name:</strong> {profile.lastName}
                  </div>
                  <div>
                    <strong>Phone:</strong> {profile.phone}
                  </div>
                  <div>
                    <strong>Mobile:</strong> {profile.mobile}
                  </div>
                  <div>
                    <strong>Email:</strong> {profile.email}
                  </div>
                  <div>
                    <strong>Location:</strong> {profile.location}
                  </div>
                  <div>
                    <strong>Country:</strong> {profile.country}
                  </div>
                  <div>
                    <strong>City:</strong> {profile.city}
                  </div>
                  <div>
                    <strong>Zip:</strong> {profile.zip}
                  </div>
                  <div>
                    <strong>Specialization:</strong> {profile.specialization}
                  </div>
                  <div>
                    <strong>Address:</strong> {profile.address}
                  </div>
                  <div>
                    <strong>Profession:</strong> {profile.profession}
                  </div>
                  <div>
                    <strong>Date of Birth:</strong> {profile.dob}
                  </div>
                  <div>
                    <strong>Gender:</strong> {profile.gender}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
