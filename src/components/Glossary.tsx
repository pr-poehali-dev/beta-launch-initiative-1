import { useState } from "react";

const terms = [
  {
    term: "Апатрид",
    category: "Статус",
    short: "Человек без гражданства",
    definition: "Лицо, не имеющее гражданства ни одного государства. После того как советское правительство в 1921 году лишило эмигрантов российского подданства, большинство из них стали апатридами. Они не могли легально работать, открыть счёт в банке или пересечь границу без специального документа.",
    example: "«Мы все здесь апатриды — ни русские, ни французы, ни немцы. Люди ниоткуда» (из дневника эмигранта, Париж, 1923).",
  },
  {
    term: "Нансеновский паспорт",
    category: "Документ",
    short: "Удостоверение личности для апатридов",
    definition: "Международный документ, введённый Лигой Наций в 1922 году по инициативе норвежского дипломата Фритьофа Нансена. Признавался 52 государствами и позволял апатридам легально пересекать границы, работать и проживать в принимающих странах. К 1930 году было выдано около 450 000 таких паспортов.",
    example: "Нансен получил Нобелевскую премию мира в 1922 году, в том числе за создание этой системы помощи беженцам.",
  },
  {
    term: "РОВС",
    category: "Организация",
    short: "Русский общевоинский союз",
    definition: "Крупнейшая военная организация русской эмиграции, основанная генералом Врангелем в 1924 году. Объединяла бывших офицеров белых армий, сохраняла военную структуру и дисциплину в надежде на возвращение в Россию. Штаб располагался в Белграде. В лучшие годы насчитывала до 100 000 членов.",
    example: "Многие члены РОВС работали таксистами, шофёрами и рабочими — любой ценой сохраняя готовность к «походу на Москву».",
  },
  {
    term: "Первая волна эмиграции",
    category: "История",
    short: "Массовый исход 1917–1922 годов",
    definition: "Термин для обозначения эмиграции, вызванной революцией 1917 года и Гражданской войной. Включала три основных потока: через Константинополь (эвакуация армии Врангеля, 1920), через Харбин и Дальний Восток (белые армии Сибири), через Финляндию и Эстонию (петроградская интеллигенция). Всего от 1,5 до 2 миллионов человек.",
    example: "В отличие от второй волны (Вторая мировая) и третьей (советские диссиденты), первая волна была массовой и острополитической.",
  },
  {
    term: "Галлиполи",
    category: "География",
    short: "Лагерь эвакуированных в Турции",
    definition: "Полуостров в Турции, где в 1920–1921 годах располагался лагерь русских эмигрантов, эвакуированных из Крыма. Около 25 000 солдат и офицеров армии Врангеля жили здесь в тяжелейших условиях, сохраняя воинский устав в ожидании возможности продолжить борьбу.",
    example: "«Галлиполийское сидение» стало символом стойкости — армия не распалась, несмотря на голод, болезни и неопределённость.",
  },
  {
    term: "Философский пароход",
    category: "История",
    short: "Высылка интеллигенции в 1922 году",
    definition: "Два парохода («Обербургомистр Хакен» и «Пруссия»), на которых в сентябре–ноябре 1922 года советские власти принудительно выслали из России около 225 представителей интеллигенции. Среди них — философы Николай Бердяев и Иван Ильин, социолог Питирим Сорокин, историк Александр Кизеветтер.",
    example: "Ленин лично составлял списки высылаемых, называя их «контрреволюционными элементами».",
  },
  {
    term: "Незамеченное поколение",
    category: "Культура",
    short: "Молодые писатели эмиграции",
    definition: "Термин критика Владимира Варшавского для писателей, родившихся в 1900–1910-х годах и выросших уже в эмиграции. В отличие от старшего поколения (Бунин, Куприн), они не знали России и писали о потере родины изнутри. Гайто Газданов, Борис Поплавский, Владимир Набоков (условно) — представители этого поколения.",
    example: "«Мы потеряли родину, которой никогда не видели» — главная трагедия «незамеченного поколения».",
  },
  {
    term: "Русское зарубежье",
    category: "Понятие",
    short: "Совокупность эмигрантских общин",
    definition: "Собирательное название для всей совокупности русских эмигрантских общин, организаций, изданий и культурных институтов за пределами СССР в 1920–1940-е годы. Включало литературу, прессу, театр, церковь, образование. Самоназвание — «Россия в изгнании» или «Россия вне России».",
    example: "Термин подчёркивал идею: настоящая Россия — не та, что под советской властью, а та, что сохраняется в эмиграции.",
  },
  {
    term: "Сменовеховство",
    category: "Идеология",
    short: "Движение за примирение с советской властью",
    definition: "Идейное движение части эмиграции, призывавшее принять советскую власть как новую форму российской государственности и вернуться на родину. Названо по сборнику «Смена вех» (1921). Советская власть активно поддерживала это движение, соблазняя эмигрантов возможностью вернуться.",
    example: "Куприн в конце жизни принял советское гражданство и вернулся в СССР. Многие из вернувшихся были впоследствии репрессированы.",
  },
  {
    term: "Эмигрантщина",
    category: "Культура",
    short: "Пренебрежительное самоназвание",
    definition: "Разговорное слово, которым сами эмигранты иронично обозначали специфические черты эмигрантского быта и психологии: бесконечные разговоры о возвращении, ностальгию, мелкие интриги в общинах, оторванность от реальной жизни. Часто использовалось в мемуарах и дневниках с горькой иронией.",
    example: "«Хватит заниматься эмигрантщиной — давайте жить здесь и сейчас» (из письма 1928 года).",
  },
];

const categories = ["Все", "Статус", "Документ", "Организация", "История", "География", "Культура", "Понятие", "Идеология"];

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  const filtered = terms.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.short.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Все" || t.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <section className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Справочник</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Словарь эмигранта
        </h2>
        <p className="text-neutral-500 mb-10 text-base lg:text-lg max-w-2xl">
          Термины, понятия и организации, без которых невозможно понять жизнь Русского зарубежья.
        </p>

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Поиск по термину..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                category === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms list */}
        <div className="flex flex-col divide-y divide-neutral-100">
          {filtered.length === 0 && (
            <p className="text-neutral-400 text-sm py-8 text-center">Ничего не найдено</p>
          )}
          {filtered.map((t) => {
            const isOpen = openTerm === t.term;
            return (
              <div key={t.term} className="py-5">
                <button
                  className="w-full text-left flex items-start justify-between gap-4 group"
                  onClick={() => setOpenTerm(isOpen ? null : t.term)}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-neutral-900 font-bold text-lg group-hover:text-neutral-600 transition-colors duration-200">{t.term}</h3>
                      <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full">{t.category}</span>
                    </div>
                    <p className="text-neutral-500 text-sm">{t.short}</p>
                  </div>
                  <span className="text-neutral-300 group-hover:text-neutral-500 transition-colors mt-1 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-0 flex flex-col gap-3">
                    <p className="text-neutral-600 text-sm leading-relaxed">{t.definition}</p>
                    <div className="border-l-2 border-neutral-200 pl-4">
                      <p className="text-neutral-400 text-sm italic">{t.example}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-100 text-center">
          <p className="text-neutral-400 text-sm">{terms.length} терминов в словаре</p>
        </div>
      </div>
    </section>
  );
}
