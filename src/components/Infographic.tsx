import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const byCountry = [
  { name: "США", value: 750, flag: "🇺🇸" },
  { name: "Франция", value: 400, flag: "🇫🇷" },
  { name: "Германия", value: 360, flag: "🇩🇪" },
  { name: "Китай", value: 250, flag: "🇨🇳" },
  { name: "Сербия", value: 40, flag: "🇷🇸" },
  { name: "Аргентина", value: 100, flag: "🇦🇷" },
  { name: "Чехия", value: 25, flag: "🇨🇿" },
];

const barColors = ["#1d4ed8", "#dc2626", "#404040", "#ca8a04", "#7c3aed", "#0284c7", "#059669"];

const byYear = [
  { year: "1917", count: 50 },
  { year: "1918", count: 180 },
  { year: "1919", count: 420 },
  { year: "1920", count: 780 },
  { year: "1921", count: 1100 },
  { year: "1922", count: 1500 },
  { year: "1925", count: 1550 },
  { year: "1930", count: 1450 },
  { year: "1935", count: 1300 },
  { year: "1940", count: 1100 },
];

const bySphere = [
  { name: "Рабочие и крестьяне", value: 38, color: "#a3a3a3" },
  { name: "Военные", value: 22, color: "#404040" },
  { name: "Интеллигенция", value: 18, color: "#1d4ed8" },
  { name: "Дворяне", value: 12, color: "#7c3aed" },
  { name: "Духовенство", value: 5, color: "#ca8a04" },
  { name: "Купечество", value: 5, color: "#059669" },
];

interface BarItem { flag: string; name: string; value: number; }
interface BarTooltipProps { active?: boolean; payload?: { payload: BarItem }[]; }
interface LineTooltipProps { active?: boolean; payload?: { value: number }[]; label?: string; }
interface PieTooltipProps { active?: boolean; payload?: { name: string; value: number }[]; }

const CustomBarTooltip = ({ active, payload }: BarTooltipProps) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-neutral-900 text-white text-xs px-3 py-2 shadow-lg">
        <p className="font-bold">{d.flag} {d.name}</p>
        <p className="text-neutral-300">{d.value} 000 человек</p>
      </div>
    );
  }
  return null;
};

const CustomLineTooltip = ({ active, payload, label }: LineTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="bg-neutral-900 text-white text-xs px-3 py-2 shadow-lg">
        <p className="font-bold">{label} г.</p>
        <p className="text-neutral-300">{payload[0].value} 000 эмигрантов</p>
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }: PieTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="bg-neutral-900 text-white text-xs px-3 py-2 shadow-lg">
        <p className="font-bold">{payload[0].name}</p>
        <p className="text-neutral-300">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Infographic() {
  return (
    <section className="bg-neutral-950 px-6 py-20 lg:py-32" id="infographic">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Данные и цифры</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Инфографика
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-2xl">
          Кто, куда и когда — численность русской эмиграции в цифрах и диаграммах.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-800">

          {/* Bar chart — по странам */}
          <div className="bg-neutral-950 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Численность</p>
            <h3 className="text-xl font-bold text-white mb-8">Эмигранты по странам (тыс. чел.)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={byCountry} layout="vertical" barCategoryGap="20%">
                <XAxis
                  type="number"
                  tick={{ fill: "#737373", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}т`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#a3a3a3", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={72}
                />
                <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                  {byCountry.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart — по сословиям */}
          <div className="bg-neutral-950 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Состав</p>
            <h3 className="text-xl font-bold text-white mb-8">Кто уезжал — по социальному положению</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={bySphere}
                  dataKey="value"
                  nameKey="name"
                  cx="40%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={50}
                  paddingAngle={2}
                >
                  {bySphere.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span style={{ color: "#a3a3a3", fontSize: 11 }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line chart — динамика */}
          <div className="bg-neutral-950 p-8 lg:p-10 lg:col-span-2">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Динамика</p>
            <h3 className="text-xl font-bold text-white mb-8">Накопленная численность эмиграции 1917–1940 (тыс. чел.)</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={byYear} margin={{ top: 4, right: 24, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#737373", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#737373", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}т`}
                />
                <Tooltip content={<CustomLineTooltip />} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#1d4ed8"
                  strokeWidth={2.5}
                  dot={{ fill: "#1d4ed8", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#fff", stroke: "#1d4ed8", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-neutral-600 text-xs mt-4">
              * Пик пришёлся на 1921–1922 годы — массовый исход после разгрома армий Колчака и Врангеля. После 1922 года численность снижалась из-за ассимиляции и смертности.
            </p>
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 mt-px">
          {[
            { n: "~2 млн", label: "эмигрантов к 1922 году" },
            { n: "50+", label: "стран расселения" },
            { n: "≈40%", label: "осели во Франции и Германии" },
            { n: "1 из 100", label: "жителей России покинул страну" },
          ].map((item) => (
            <div key={item.n} className="bg-neutral-950 p-6">
              <p className="text-3xl font-black text-white mb-1">{item.n}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}