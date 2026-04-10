const stories = [
  {
    name: "Владимир Набоков",
    born: "1899, Петербург",
    emoji: "🦋",
    quote: "Россия была моим детством, Европа — моей юностью, Америка — моей зрелостью. Я принадлежу всем и никому.",
    note: "Эмигрировал в 17 лет. Учился в Кембридже, писал по-русски в Берлине, перешёл на английский в США.",
  },
  {
    name: "Гайто Газданов",
    born: "1903, Санкт-Петербург",
    emoji: "🚗",
    quote: "Я рос одновременно во всех языках и ни в одном из них не чувствовал себя дома. Это и есть судьба эмигранта.",
    note: "Покинул Россию подростком. Работал ночным таксистом в Париже, параллельно создавая романы.",
  },
  {
    name: "Ирина Одоевцева",
    born: "1895, Рига",
    emoji: "📖",
    quote: "Мы, дети эмиграции, выросли между двух миров. Русский язык был нашим домом, который мы носили в себе.",
    note: "Поэтесса «Цеха поэтов», прожила в Париже почти всю жизнь. Вернулась в СССР лишь в 1987 году.",
  },
];

const schools = [
  {
    city: "Париж",
    name: "Русская гимназия",
    detail: "Основана в 1920 году, работала по дореволюционным программам. Выпускники свободно говорили и писали по-русски.",
  },
  {
    city: "Прага",
    name: "Русская реальная гимназия",
    detail: "Субсидировалась чешским правительством. Одна из лучших русских школ зарубежья.",
  },
  {
    city: "Белград",
    name: "Русско-сербская гимназия",
    detail: "Объединяла детей эмигрантов и местных жителей. Преподавание на двух языках.",
  },
  {
    city: "Харбин",
    name: "Гимназия КВЖД",
    detail: "Единственная русская школа на Дальнем Востоке, выдававшая аттестаты европейского образца.",
  },
];

export default function Children() {
  return (
    <section className="bg-amber-50 px-6 py-20 lg:py-32" id="children">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Второе поколение</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
          Дети эмиграции
        </h2>
        <p className="text-neutral-600 text-lg mb-16 max-w-2xl">
          Рождённые или выросшие за рубежом — они разрывались между двумя мирами: русским домом и иностранной улицей.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {stories.map((person) => (
            <div key={person.name} className="bg-white border border-amber-200 p-6">
              <div className="text-3xl mb-4">{person.emoji}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{person.name}</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-wide mb-4">{person.born}</p>
              <p className="text-neutral-700 text-sm italic leading-relaxed mb-4 border-l-2 border-amber-300 pl-4">
                «{person.quote}»
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed">{person.note}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">Русские школы за рубежом</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schools.map((s) => (
              <div key={s.city} className="flex gap-4 bg-white border border-amber-200 p-5">
                <div className="shrink-0 w-16 text-center">
                  <p className="text-xs uppercase tracking-widest text-amber-600 font-bold">{s.city}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">{s.name}</p>
                  <p className="text-neutral-500 text-sm">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-neutral-900 text-white p-8 lg:p-10">
          <p className="text-neutral-400 text-sm uppercase tracking-widest mb-3">Феномен языка</p>
          <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl">
            Дети эмигрантов сохранили дореволюционный русский язык — тот самый, который в СССР менялся под влиянием советской идеологии. Именно в эмиграции были сбережены слова, обороты и интонации, исчезнувшие на родине.
          </p>
        </div>
      </div>
    </section>
  );
}
