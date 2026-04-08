const events = [
  {
    year: "1917",
    title: "Октябрьская революция",
    description: "Захват власти большевиками — начало массового исхода аристократии, духовенства, интеллигенции и военных.",
  },
  {
    year: "1918–1920",
    title: "Гражданская война",
    description: "Первая волна эмиграции: около 2 миллионов человек покидают Россию через Константинополь, Харбин, Финляндию.",
  },
  {
    year: "1920",
    title: "«Философский пароход»",
    description: "Массовая высылка интеллигенции из Советской России. Берлин становится столицей русской эмиграции.",
  },
  {
    year: "1922",
    title: "Центры рассеяния",
    description: "Русская диаспора оседает в Берлине, Париже, Праге, Белграде. Возникают русские газеты, театры, церкви.",
  },
  {
    year: "1924",
    title: "Нансеновский паспорт",
    description: "Лига Наций вводит документ для апатридов. Эмигранты получают легальный статус в принимающих странах.",
  },
  {
    year: "1925–1930",
    title: "Расцвет культуры зарубежья",
    description: "Выходят десятки русских газет, издательств, журналов. Бунин, Набоков, Цветаева создают главные произведения.",
  },
  {
    year: "1933",
    title: "Нобелевская премия Бунина",
    description: "Иван Бунин получает Нобелевскую премию по литературе — первый русский писатель, удостоенный этой награды.",
  },
  {
    year: "1933–1934",
    title: "Приход нацистов к власти",
    description: "Большинство эмигрантов покидают Берлин. Центр русского зарубежья окончательно перемещается в Париж.",
  },
  {
    year: "1939",
    title: "Начало Второй мировой",
    description: "Эмиграция оказывается перед новым испытанием. Часть возвращается в СССР, часть уходит дальше — в США.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white px-6 py-20 lg:py-32" id="everyday">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Хронология</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          1917 — 1939
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200" />

          <div className="flex flex-col gap-0">
            {events.map((event, index) => (
              <div key={index} className="relative pl-8 pb-10 group">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900 -translate-x-[3.5px] group-hover:scale-150 transition-transform duration-300" />
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{event.year}</p>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{event.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-xl">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
