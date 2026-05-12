import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

export default function FluiDashboard() {
  const [sales, setSales] = React.useState([5.2, 5.7, 6.1, 6.9, 4.6]);
  const [instagram, setInstagram] = React.useState(36.7);
  const [tiktok, setTiktok] = React.useState(27.0);
  const [whatsapp, setWhatsapp] = React.useState(23.5);

  const referrals = Math.max(0, 100 - instagram - tiktok - whatsapp);

  const lineData = sales.map((value, i) => ({
    week: ["29 abr", "6 may", "13 may", "20 may", "27 may"][i],
    sales: value,
  }));

  const pieData = [
    { name: "Instagram", value: instagram },
    { name: "TikTok", value: tiktok },
    { name: "WhatsApp", value: whatsapp },
    { name: "Referidos", value: referrals },
  ];

  const barData = [
    { name: "Ganchos", value: 9.2 },
    { name: "Macetas", value: 6.4 },
    { name: "Adornos", value: 4.8 },
    { name: "xyz", value: 3.7 },
    { name: "lorem ipsum", value: 2.5 },
  ];

  const COLORS = ["#d9468f", "#111111", "#5d8f58", "#d8a431"];

  const [view, setView] = React.useState("dashboard");

  const [recentSales, setRecentSales] = React.useState([
    {
      id: "#FLUI-10458",
      client: "María Gómez",
      channel: "Instagram",
      status: "En preparación",
      total: "$210,000",
    },
    {
      id: "#FLUI-10457",
      client: "Juan Camilo",
      channel: "WhatsApp",
      status: "Confirmado",
      total: "$165,000",
    },
    {
      id: "#FLUI-10456",
      client: "Valentina P.",
      channel: "TikTok",
      status: "Enviado",
      total: "$320,000",
    },
    {
      id: "#FLUI-10455",
      client: "Andrés R.",
      channel: "Instagram",
      status: "En preparación",
      total: "$185,000",
    },
  ]);

  const metrics = [
    {
      title: "Ventas del mes",
      value: "$28,540,000",
      change: "+18.7%",
      good: true,
    },
    {
      title: "Pedidos activos",
      value: "236",
      change: "+15.4%",
      good: true,
    },
    {
      title: "Satisfacción",
      value: "4.8 / 5",
      change: "+0.3 pts",
      good: true,
    },
    {
      title: "Procesos digitalizados",
      value: "87%",
      change: "+9%",
      good: true,
    },
    {
      title: "Stock crítico",
      value: "12",
      change: "-14.3%",
      good: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f1] flex font-sans text-[#222]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0d130f] text-white flex flex-col justify-between p-5 shadow-2xl">
        <div>
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center border border-[#243225] shadow-lg">
              <div className="text-5xl font-light tracking-tight">flui</div>
            </div>
            <div className="text-[#86a581] text-sm mt-3 text-center">Sembrando consciencia que detona cambio</div>
          </div>

          <nav className="space-y-2">
            {[
              { label: "Resumen", key: "dashboard" },
              //{ label: "Ventas", key: "dashboard" },
              { label: "Pedidos", key: "pedidos" },
              { label: "Productos", key: "productos" },
              /*
              { label: "Clientes", key: "clientes" },
              { label: "Inventario", key: "inventario" },
              { label: "Marketing", key: "marketing" },
              { label: "Reportes", key: "reportes" },
              { label: "Configuración", key: "config" },
            */
            ].map((item, index) => (
              <button
                key={item.label}
                onClick={() => setView(item.key)}
                className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
                  view === item.key
                    ? "bg-[#7ca06e] text-white shadow"
                    : "hover:bg-[#1c271f] text-[#d5dfd2]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-[#172018] rounded-3xl p-4 border border-[#263527]">
          <div className="text-[#a8c39f] text-sm mb-2 text-center">
            Fluyendo hacia un marketplace sostenible
          </div>
          <div className="text-5xl text-center">🌿</div>
        </div>
      </aside>

      {/* Main Content */}
      {/*<main className="flex-1 p-6 overflow-auto">*/}
      <main className="flex-1 p-6 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold">Dashboard Operativo FLUI</h1>
            <p className="text-gray-500 mt-1">
              Resumen general del rendimiento del negocio
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-2xl px-4 py-3 shadow border border-gray-100">
              <div className="text-sm text-gray-500">Periodo</div>
              <div className="font-semibold">1 may 2024 - 31 may 2024</div>
            </div>

            <button className="bg-white rounded-2xl px-5 py-3 shadow border border-gray-100 hover:shadow-md transition">
              Filtros
            </button>
          </div>
        </div>

        {view === "dashboard" ? (
          <>
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-6 text-center">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="text-gray-500 text-sm mb-3">{metric.title}</div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div
                    className={`text-sm font-medium ${
                      metric.good ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {metric.change} vs mes anterior
                  </div>

                  <div className="mt-4 h-10 flex items-end gap-1">
                    {[5, 7, 6, 9, 8, 10, 9].map((v, i) => (
                      <div
                        key={i}
                        className={`rounded-full w-full ${
                          metric.good ? "bg-green-200" : "bg-red-200"
                        }`}
                        style={{ height: `${v * 3}px` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
              <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Ventas semanales</h2>
                    <p className="text-gray-500 text-sm">
                      Ajusta los valores para simular el dashboard
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3 mb-6">
                  {sales.map((value, i) => (
                    <div key={i}>
                      <label className="text-xs text-gray-500 block mb-1">
                        Semana {i + 1}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={value}
                        onChange={(e) => {
                          const updated = [...sales];
                          updated[i] = Number(e.target.value);
                          setSales(updated);
                        }}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#4d7c4d"
                        strokeWidth={4}
                        dot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Ventas por canal</h2>

                <div className="space-y-4 mb-5">
                  {[
                    ["Instagram", instagram, setInstagram],
                    ["TikTok", tiktok, setTiktok],
                    ["WhatsApp", whatsapp, setWhatsapp],
                  ].map(([label, value, setter]) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="80"
                        value={value}
                        onChange={(e) => setter(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `${value}%`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">
                  Top productos por ventas
                </h2>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#7ca06e" radius={[12, 12, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Pedidos recientes</h2>
                  <button
                    onClick={() => setView("sales")}
                    className="text-[#5d8f58] hover:underline"
                  >
                    Ver todos
                  </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead className="bg-[#f6f7f3] text-gray-500">
                      <tr>
                        <th className="text-left p-3">Pedido</th>
                        <th className="text-left p-3">Cliente</th>
                        <th className="text-left p-3">Canal</th>
                        <th className="text-left p-3">Estado</th>
                        <th className="text-left p-3">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSales.map((row) => (
                        <tr key={row.id} className="border-t border-gray-100">
                          <td className="p-3">{row.id}</td>
                          <td className="p-3">{row.client}</td>
                          <td className="p-3">{row.channel}</td>
                          <td className="p-3">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                              {row.status}
                            </span>
                          </td>
                          <td className="p-3">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">Registro de ventas</h2>
                <p className="text-gray-500 mt-1">
                  Simulación de sincronización con Excel o Google Sheets
                </p>
              </div>

              <button
                onClick={() => {
                  const randomId = Math.floor(Math.random() * 900 + 100);
                  const totals = [
                    "$120,000",
                    "$340,000",
                    "$280,000",
                    "$175,000",
                  ];
                  const clients = [
                    "Sofía Ramírez",
                    "Camilo Torres",
                    "Laura Méndez",
                    "Juliana Ruiz",
                  ];

                  setRecentSales([
                    {
                      id: `#FLUI-${randomId}`,
                      client:
                        clients[Math.floor(Math.random() * clients.length)],
                      channel: ["Instagram", "TikTok", "WhatsApp"][
                        Math.floor(Math.random() * 3)
                      ],
                      status: "Nuevo",
                      total:
                        totals[Math.floor(Math.random() * totals.length)],
                    },
                    ...recentSales,
                  ]);
                }}
                className="bg-[#7ca06e] text-white px-5 py-3 rounded-2xl hover:opacity-90 transition"
              >
                Simular nueva venta
              </button>
            </div>

            <div className="overflow-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[900px] text-sm">
                <thead className="bg-[#f6f7f3] text-gray-500 sticky top-0">
                  <tr>
                    <th className="p-4 text-left">Pedido</th>
                    <th className="p-4 text-left">Cliente</th>
                    <th className="p-4 text-left">Canal</th>
                    <th className="p-4 text-left">Estado</th>
                    <th className="p-4 text-left">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {recentSales.map((sale, index) => (
                    <tr
                      key={`${sale.id}-${index}`}
                      className="border-t border-gray-100 hover:bg-[#f9faf7]"
                    >
                      <td className="p-4 font-medium">{sale.id}</td>
                      <td className="p-4">
                        <input
                          value={sale.client}
                          onChange={(e) => {
                            const updated = [...recentSales];
                            updated[index].client = e.target.value;
                            setRecentSales(updated);
                          }}
                          className="w-full bg-transparent border border-transparent hover:border-gray-200 focus:border-[#7ca06e] rounded-lg px-2 py-1 outline-none"
                        />
                      </td>
                      <td className="p-4">
                        <select
                          value={sale.channel}
                          onChange={(e) => {
                            const updated = [...recentSales];
                            updated[index].channel = e.target.value;
                            setRecentSales(updated);
                          }}
                          className="rounded-lg border border-gray-200 px-2 py-1"
                        >
                          <option>Instagram</option>
                          <option>TikTok</option>
                          <option>WhatsApp</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <input
                          value={sale.status}
                          onChange={(e) => {
                            const updated = [...recentSales];
                            updated[index].status = e.target.value;
                            setRecentSales(updated);
                          }}
                          className="w-full bg-transparent border border-transparent hover:border-gray-200 focus:border-[#7ca06e] rounded-lg px-2 py-1 outline-none"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          value={sale.total}
                          onChange={(e) => {
                            const updated = [...recentSales];
                            updated[index].total = e.target.value;
                            setRecentSales(updated);
                          }}
                          className="w-full bg-transparent border border-transparent hover:border-gray-200 focus:border-[#7ca06e] rounded-lg px-2 py-1 outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

