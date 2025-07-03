import { useEffect, useState } from "react";
import { DashCard } from "./components/DashCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services/dataService";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

 function DashboardPage () {
  const [orders, setOrder] = useState([]);
  useTitle("Dashboard-Codebook");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrder();

        setOrder(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchOrders();
  });

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashCard key={order.id} order={order} />)}
      </section>
      <section>{!orders && <DashboardEmpty />}</section>
    </main>
  );
};
 export default DashboardPage