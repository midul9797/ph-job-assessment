import { isLoggedIn } from "@/service/auth.service";
import { redirect } from "next/navigation";
const HomePage = () => {
  if (isLoggedIn()) return redirect("/dashboard/projects");
  return redirect("/login");
};

export default HomePage;
