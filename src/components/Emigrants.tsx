const emigrants = [
  {
    name: "Иван Бунин",
    years: "1870–1953",
    city: "Париж",
    role: "Писатель, лауреат Нобелевской премии",
    description:
      "В эмиграции создал «Тёмные аллеи» и вёл дневники оккупации. Первый русский нобелевский лауреат по литературе (1933).",
    emoji: "✒️",
  },
  {
    name: "Сергей Рахманинов",
    years: "1873–1943",
    city: "Нью-Йорк",
    role: "Композитор и пианист",
    description:
      "Покинул Россию в 1917 году. Концертировал по всей Европе и Америке, стал одним из величайших пианистов эпохи.",
    emoji: "🎹",
  },
  {
    name: "Владимир Набоков",
    years: "1899–1977",
    city: "Берлин → Париж → США",
    role: "Писатель, энтомолог",
    description:
      "Юность провёл в Берлине, публиковался под псевдонимом Сирин. Позднее перешёл на английский язык, создав «Лолиту».",
    emoji: "🦋",
  },
  {
    name: "Марина Цветаева",
    years: "1892–1941",
    city: "Прага → Париж",
    role: "Поэтесса",
    description:
      "17 лет провела в эмиграции в нищете. Её лирика эмигрантского периода — одна из вершин русской поэзии XX века.",
    emoji: "📜",
  },
  {
    name: "Фёдор Шаляпин",
    years: "1873–1938",
    city: "Париж",
    role: "Оперный певец",
    description:
      "Гастролировал по всему миру. В Париже стал символом русской культуры за рубежом, его выступления собирали тысячи зрителей.",
    emoji: "🎭",
  },
  {
    name: "Илья Мечников",
    years: "1845–1916",
    role: "Биолог, нобелевский лауреат",
    city: "Париж",
    description:
      "Возглавлял Пастеровский институт. Его открытия в иммунологии опередили время — он получил Нобелевскую премию ещё до эмиграции волны.",
    emoji: "🔬",
  },
];

export default function Emigrants() {
  return (
    <section className="bg-neutral-50 px-6 py-20 lg:py-32" id="culture">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Выдающиеся личности</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Голоса эмиграции
        </h2>
        <p className="text-neutral-500 text-lg mb-16 max-w-2xl">
          Русское рассеяние дало миру великих писателей, музыкантов и учёных, сохранивших культуру нации вдали от родины.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emigrants.map((person) => (
            <div
              key={person.name}
              className="bg-white border border-neutral-200 p-6 hover:border-neutral-400 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{person.emoji}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{person.name}</h3>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">{person.years}</p>
              <p className="text-sm text-neutral-500 mb-3 font-medium">{person.city} · {person.role}</p>
              <p className="text-neutral-700 text-sm leading-relaxed">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
