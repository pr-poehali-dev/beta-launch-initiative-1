import { useState } from "react";

const cities = [
  {
    id: "paris",
    name: "Париж",
    country: "Франция",
    x: 310,
    y: 265,
    emigrants: "100 000+",
    years: "1919–1940",
    description: "Главная столица Русского зарубежья. Здесь жили Бунин, Цветаева, Куприн. Издавалось более 30 русских газет и журналов. Центр — район Монпарнас и улица Пасси.",
    facts: ["34 русские газеты", "Русский университет в Париже", "Штаб РОВС — офицерской организации"],
  },
  {
    id: "berlin",
    name: "Берлин",
    country: "Германия",
    x: 390,
    y: 215,
    emigrants: "360 000",
    years: "1920–1933",
    description: "В начале 1920-х — крупнейший центр эмиграции. После прихода Гитлера большинство эмигрантов переехали в Париж. Здесь начинал Набоков.",
    facts: ["86 русских издательств", "Писательский квартал в Шарлоттенбурге", "Набоков писал здесь первые романы"],
  },
  {
    id: "prague",
    name: "Прага",
    country: "Чехословакия",
    x: 430,
    y: 240,
    emigrants: "25 000",
    years: "1920–1938",
    description: "Чешское правительство активно поддерживало русских эмигрантов. Здесь действовал Русский университет, работала Марина Цветаева.",
    facts: ["Русский юридический факультет", "Помощь от государства Масарика", "Цветаева жила здесь 3 года"],
  },
  {
    id: "belgrade",
    name: "Белград",
    country: "Сербия",
    x: 460,
    y: 295,
    emigrants: "40 000",
    years: "1920–1941",
    description: "Сербия открыла двери тысячам русских офицеров и интеллигентов. Белград стал одним из крупнейших центров военной эмиграции.",
    facts: ["Штаб белогвардейских частей", "Русская гимназия", "Тесные связи через православие"],
  },
  {
    id: "istanbul",
    name: "Константинополь",
    country: "Турция",
    x: 530,
    y: 330,
    emigrants: "150 000",
    years: "1920–1923",
    description: "Первая остановка для сотен тысяч эвакуированных из Крыма в 1920 году. Большинство затем переехали дальше в Европу.",
    facts: ["Перевалочный пункт эвакуации", "Лагеря на Галлиполи и Лемносе", "Врангелевская армия"],
  },
  {
    id: "harbin",
    name: "Харбин",
    country: "Китай",
    x: 760,
    y: 210,
    emigrants: "100 000+",
    years: "1917–1945",
    description: "Крупнейший центр русской эмиграции в Азии. Русские здесь жили ещё с эпохи КВЖД, революция значительно увеличила общину.",
    facts: ["Русские школы, театры, церкви", "Своя торговля и промышленность", "«Русский город» в Азии"],
  },
  {
    id: "sofia",
    name: "София",
    country: "Болгария",
    x: 490,
    y: 310,
    emigrants: "30 000",
    years: "1920–1944",
    description: "Болгария как православная страна приняла много русских офицеров и казаков. Здесь сложилась крепкая военная эмигрантская община.",
    facts: ["Казачьи станицы", "Русские православные приходы", "Офицерские объединения"],
  },
];

export default function EmigrationMap() {
  const [active, setActive] = useState<string | null>(null);

  const activeCity = cities.find((c) => c.id === active);

  return (
    <section className="bg-neutral-900 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">География изгнания</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Карта эмиграции
        </h2>
        <p className="text-neutral-400 mb-12 text-base lg:text-lg max-w-2xl">
          Основные центры Русского зарубежья в 1920–1939 годах. Нажмите на город, чтобы узнать подробнее.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 relative bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800" style={{ minHeight: 380 }}>
            <svg
              viewBox="180 150 680 280"
              className="w-full h-full"
              style={{ minHeight: 340 }}
            >
              {/* Simplified Europe landmass */}
              <path
                d="M200,180 L230,165 L260,160 L300,158 L340,155 L380,150 L420,152 L460,155 L500,158 L540,160 L580,162 L620,165 L660,168 L700,172 L740,175 L780,178 L820,182 L840,190 L845,210 L840,230 L830,250 L820,270 L810,290 L800,310 L785,325 L770,335 L750,340 L730,338 L710,332 L690,325 L670,315 L650,308 L630,310 L610,315 L590,320 L570,325 L550,330 L535,335 L520,340 L505,342 L490,340 L475,335 L460,330 L445,325 L430,315 L415,308 L400,305 L385,308 L370,315 L355,320 L340,318 L325,312 L310,305 L295,295 L280,285 L265,278 L250,272 L235,268 L220,265 L208,258 L200,250 L195,235 L192,218 L195,200 Z"
                fill="#1a1a2e"
                stroke="#2a2a3e"
                strokeWidth="1"
              />
              {/* Scandinavia */}
              <path
                d="M380,150 L390,140 L400,130 L415,125 L430,128 L435,140 L430,152 L420,152 Z"
                fill="#1a1a2e"
                stroke="#2a2a3e"
                strokeWidth="1"
              />
              <path
                d="M430,128 L445,120 L460,118 L470,125 L465,138 L455,148 L445,152 L435,148 L430,140 Z"
                fill="#1a1a2e"
                stroke="#2a2a3e"
                strokeWidth="1"
              />
              {/* UK */}
              <path
                d="M265,175 L275,170 L285,172 L290,182 L285,192 L275,195 L265,190 L260,182 Z"
                fill="#1a1a2e"
                stroke="#2a2a3e"
                strokeWidth="1"
              />
              {/* Russia/East */}
              <path
                d="M620,165 L700,155 L780,150 L840,155 L860,170 L855,200 L840,230 L820,270 L800,310 L785,325 L780,178 L740,175 L700,172 L660,168 Z"
                fill="#161625"
                stroke="#2a2a3e"
                strokeWidth="1"
              />
              {/* China area */}
              <path
                d="M780,178 L820,175 L855,180 L870,200 L860,230 L840,260 L820,270 L800,310 L785,325 L770,335 L750,340 L745,320 L760,300 L770,280 L775,260 L778,240 L780,220 Z"
                fill="#161625"
                stroke="#2a2a3e"
                strokeWidth="1"
              />

              {/* Migration routes (curved lines) */}
              {[
                { x1: 560, y1: 250, x2: 310, y2: 265, cx: 430, cy: 220 },
                { x1: 560, y1: 250, x2: 390, y2: 215, cx: 480, cy: 200 },
                { x1: 560, y1: 250, x2: 430, y2: 240, cx: 490, cy: 225 },
                { x1: 560, y1: 250, x2: 460, y2: 295, cx: 510, cy: 260 },
                { x1: 560, y1: 250, x2: 490, y2: 310, cx: 525, cy: 270 },
                { x1: 560, y1: 250, x2: 530, y2: 330, cx: 545, cy: 290 },
                { x1: 650, y1: 220, x2: 760, y2: 210, cx: 705, cy: 200 },
              ].map((r, i) => (
                <path
                  key={i}
                  d={`M${r.x1},${r.y1} Q${r.cx},${r.cy} ${r.x2},${r.y2}`}
                  fill="none"
                  stroke="#3b3b5a"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Russia origin marker */}
              <circle cx="640" cy="230" r="6" fill="#4a4a6a" stroke="#6a6a9a" strokeWidth="1" />
              <text x="650" y="225" fill="#6a6a9a" fontSize="9" fontFamily="Montserrat, sans-serif">Россия</text>

              {/* City markers */}
              {cities.map((city) => (
                <g
                  key={city.id}
                  onClick={() => setActive(active === city.id ? null : city.id)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={active === city.id ? 9 : 6}
                    fill={active === city.id ? "#ffffff" : "#888888"}
                    stroke={active === city.id ? "#ffffff" : "#555555"}
                    strokeWidth="1.5"
                    className="transition-all duration-200"
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={active === city.id ? 14 : 10}
                    fill="transparent"
                    stroke={active === city.id ? "rgba(255,255,255,0.2)" : "transparent"}
                    strokeWidth="1"
                  />
                  <text
                    x={city.x + 12}
                    y={city.y + 4}
                    fill={active === city.id ? "#ffffff" : "#aaaaaa"}
                    fontSize="9"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight={active === city.id ? "bold" : "normal"}
                    className="transition-all duration-200 select-none"
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Info panel */}
          <div className="lg:w-80 flex flex-col">
            {activeCity ? (
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col gap-5">
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">{activeCity.country}</p>
                  <h3 className="text-white text-2xl font-bold mb-1">{activeCity.name}</h3>
                  <p className="text-neutral-500 text-xs">{activeCity.years}</p>
                </div>
                <div className="flex items-center gap-3 bg-neutral-900 rounded-lg px-4 py-3">
                  <span className="text-2xl font-bold text-white">{activeCity.emigrants}</span>
                  <span className="text-neutral-500 text-xs uppercase tracking-wide">эмигрантов</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{activeCity.description}</p>
                <div className="flex flex-col gap-2">
                  {activeCity.facts.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-1 text-xs">—</span>
                      <span className="text-neutral-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col gap-4 h-full justify-center text-center">
                <p className="text-neutral-600 text-sm">Выберите город на карте,<br />чтобы узнать подробнее</p>
                <div className="flex flex-col gap-3 mt-4">
                  {cities.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      className="flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-neutral-900 transition-colors duration-150"
                    >
                      <span className="w-2 h-2 rounded-full bg-neutral-600 flex-shrink-0" />
                      <span className="text-neutral-400 text-sm">{c.name}</span>
                      <span className="text-neutral-600 text-xs ml-auto">{c.country}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
