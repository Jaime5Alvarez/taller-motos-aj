import { redirect } from "next/navigation";

export default function BackOfficePage() {
  redirect("/back-office/private"); 
  return null;
}