const cities = [
  {
    name: "Париж",
    country: "Франция",
    population: "~400 000",
    years: "1920–1940",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-700",
    description:
      "Главная столица русского зарубежья. Пасси, Монпарнас, Отёй — кварталы, где русская речь звучала на каждом углу. Здесь работали Бунин, Цветаева, Мережковский. Издавались «Последние новости» и «Возрождение».",
    landmarks: ["Александро-Невский собор", "Русская консерватория", "Издательство «YMCA-Press»"],
  },
  {
    name: "Берлин",
    country: "Германия",
    population: "~360 000",
    years: "1918–1933",
    color: "bg-stone-50 border-stone-200",
    accent: "text-stone-700",
    description:
      "Первая столица эмиграции в 1920-е. Дешёвая жизнь и слабая марка привлекали тысячи русских. Здесь начинал Набоков-Сирин, работали десятки издательств. После 1933 года русские массово покинули город.",
    landmarks: ["Русский дом в Шарлоттенбурге", "Издательство «Слово»", "Русская гимназия"],
  },
  {
    name: "Прага",
    country: "Чехословакия",
    population: "~25 000",
    years: "1920–1938",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    description:
      "«Русский Оксфорд» — так называли Прагу за обилие русских учёных и студентов. Чехословакия выделяла специальные стипендии для эмигрантов. Здесь жила Цветаева, действовал Русский народный университет.",
    landmarks: ["Русский народный университет", "Русский исторический архив", "Педагогический институт"],
  },
  {
    name: "Белград",
    country: "Сербия",
    population: "~40 000",
    years: "1920–1944",
    color: "bg-red-50 border-red-200",
    accent: "text-red-700",
    description:
      "Православная Сербия приняла эмигрантов особенно тепло. Многие офицеры Белой армии нашли здесь работу в армии и государственных структурах. Белград стал центром военной эмиграции.",
    landmarks: ["Русский дом короля Николая II", "Русская церковь Св. Троицы", "Военное кладбище"],
  },
  {
    name: "Харбин",
    country: "Китай",
    population: "~100 000",
    years: "1917–1945",
    color: "bg-green-50 border-green-200",
    accent: "text-green-700",
    description:
      "Восточный центр русской эмиграции. Основан как город КВЖД ещё до революции. После 1917 стал убежищем для тех, кто бежал через Сибирь. Русская жизнь здесь продолжалась вплоть до 1945 года.",
    landmarks: ["Собор Св. Николая", "Русская гимназия КВЖД", "Русский клуб"],
  },
  {
    name: "Константинополь",
    country: "Турция",
    population: "~150 000",
    years: "1920–1923",
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-700",
    description:
      "Главный транзитный пункт эмиграции. Через него прошли сотни тысяч беженцев, покинувших Крым в ноябре 1920 года вместе с армией Врангеля. Большинство затем рассеялись по Европе.",
    landmarks: ["Лагерь на острове Галлиполи", "Русская православная церковь", "Лагерь Чаталджа"],
  },
];

export default function Cities() {
  return (
    <section className="bg-white px-6 py-20 lg:py-32" id="cities">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">География рассеяния</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Города эмиграции
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl">
          Русские создали свои общины на шести континентах. Вот главные центры, где сосредоточилась жизнь зарубежья.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`border p-6 hover:shadow-md transition-shadow duration-300 ${city.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-0.5 ${city.accent}`}>{city.name}</h3>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">{city.country}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-neutral-700">{city.population}</p>
                  <p className="text-xs text-neutral-400">{city.years}</p>
                </div>
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed mb-5">{city.description}</p>

              <ul className="flex flex-col gap-1">
                {city.landmarks.map((l) => (
                  <li key={l} className="text-xs text-neutral-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
