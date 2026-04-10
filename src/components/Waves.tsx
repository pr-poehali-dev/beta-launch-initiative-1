const waves = [
  {
    number: "I",
    title: "Первая волна",
    period: "1917–1922",
    count: "~1,5–2 млн человек",
    bg: "bg-neutral-900",
    textColor: "text-white",
    accentColor: "text-neutral-400",
    borderColor: "border-neutral-700",
    who: [
      "Офицеры Белой армии и члены их семей",
      "Дворяне и помещики",
      "Духовенство и монахи",
      "Либеральная интеллигенция",
      "Крупные предприниматели и банкиры",
    ],
    routes: ["Крым → Константинополь → Европа", "Сибирь → Харбин → Шанхай", "Финляндия → Прибалтика → Германия"],
    context:
      "Главная волна русской эмиграции. Люди бежали от красного террора, национализации, расстрелов. Многие были уверены, что уезжают временно — на несколько месяцев, пока не падёт советская власть.",
  },
  {
    number: "II",
    title: "Вторая волна",
    period: "1941–1944",
    count: "~500 000–700 000 человек",
    bg: "bg-stone-800",
    textColor: "text-white",
    accentColor: "text-stone-400",
    borderColor: "border-stone-600",
    who: [
      "Советские военнопленные, отказавшиеся возвращаться",
      "«Остарбайтеры» — угнанные в Германию",
      "Коллаборационисты и власовцы",
      "Беженцы с оккупированных территорий",
    ],
    routes: ["Германия → DP-лагеря → США, Австралия, Латинская Америка", "Западная Европа → эмигрантские общины"],
    context:
      "Принципиально другой контингент — советские граждане, выросшие уже при коммуникации. Они не знали старой России, но и возвращаться в СССР боялись. Репатриация по Ялтинскому соглашению для многих означала лагерь или расстрел.",
  },
  {
    number: "III",
    title: "Третья волна",
    period: "1960–1980-е",
    count: "~500 000 человек",
    bg: "bg-stone-700",
    textColor: "text-white",
    accentColor: "text-stone-300",
    borderColor: "border-stone-500",
    who: [
      "Диссиденты и правозащитники",
      "Деятели культуры — писатели, художники",
      "Еврейские эмигранты по линии воссоединения семей",
      "Высланные властями (Солженицын, Бродский)",
    ],
    routes: ["СССР → Израиль → США", "СССР → Западная Германия → Европа"],
    context:
      "Эмиграция «по убеждениям» — люди уезжали не спасая жизнь, а выбирая свободу. Иосиф Бродский, Александр Солженицын, Василий Аксёнов — каждый из них стал голосом своей эпохи за рубежом.",
  },
];

export default function Waves() {
  return (
    <section className="bg-white px-6 py-20 lg:py-32" id="waves">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Исход</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Три волны эмиграции
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl">
          На протяжении XX века Россию покидали миллионы. Каждая волна была непохожа на предыдущую — разные люди, разные причины, разные судьбы.
        </p>

        <div className="flex flex-col gap-6">
          {waves.map((wave) => (
            <div key={wave.number} className={`${wave.bg} p-8 lg:p-12`}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="shrink-0">
                  <p className={`text-8xl font-black leading-none ${wave.accentColor} opacity-40`}>{wave.number}</p>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className={`text-2xl font-bold ${wave.textColor}`}>{wave.title}</h3>
                    <span className={`text-xs uppercase tracking-widest px-3 py-1 border ${wave.borderColor} ${wave.accentColor}`}>
                      {wave.period}
                    </span>
                    <span className={`text-sm font-semibold ${wave.textColor}`}>{wave.count}</span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 max-w-2xl ${wave.accentColor}`}>{wave.context}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className={`text-xs uppercase tracking-widest mb-3 ${wave.accentColor}`}>Кто уезжал</p>
                      <ul className="flex flex-col gap-2">
                        {wave.who.map((w) => (
                          <li key={w} className={`text-sm flex items-start gap-2 ${wave.textColor}`}>
                            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${wave.accentColor} bg-current`} />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-widest mb-3 ${wave.accentColor}`}>Маршруты</p>
                      <ul className="flex flex-col gap-2">
                        {wave.routes.map((r) => (
                          <li key={r} className={`text-sm flex items-start gap-2 ${wave.textColor}`}>
                            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${wave.accentColor} bg-current`} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
