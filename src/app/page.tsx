import Card from "@/components/Home/RentalCar/Card";
import RentalCar from "@/components/Home/RentalCar/RentalCar";

export default function Home() {
  return (
    <main className="flex justify-center container w-full ">
      <div className="w-full mx-2 mt-8">
        <RentalCar />
      </div>
    </main>
  );
}
