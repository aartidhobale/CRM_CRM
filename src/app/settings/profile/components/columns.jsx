"use client";

// Define the columns for the data table
export const columns = [
  {
    id: "profilePicture",
    header: "Profile Picture",
    accessorKey: "profilePicture",
    cell: ({ value }) => <img src={value} alt="Profile" width={50} height={50} />
  },
  {
    id: "firstName",
    header: "First Name",
    accessorKey: "firstName"
  },
  {
    id: "lastName",
    header: "Last Name",
    accessorKey: "lastName"
  },
  {
    id: "phone",
    header: "Phone",
    accessorKey: "phone"
  },
  {
    id: "mobile",
    header: "Mobile",
    accessorKey: "mobile"
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email"
  },
  {
    id: "location",
    header: "Location",
    accessorKey: "location"
  },
  {
    id: "country",
    header: "Country",
    accessorKey: "country"
  },
  {
    id: "city",
    header: "City",
    accessorKey: "city"
  },
  {
    id: "zip",
    header: "Zip",
    accessorKey: "zip"
  },
  {
    id: "specialization",
    header: "Specialization",
    accessorKey: "specialization"
  },
  {
    id: "address",
    header: "Address",
    accessorKey: "address"
  },
  {
    id: "profession",
    header: "Profession",
    accessorKey: "profession"
  },
  {
    id: "dob",
    header: "Date of Birth",
    accessorKey: "dob"
  },
  {
    id: "gender",
    header: "Gender",
    accessorKey: "gender"
  }
];
