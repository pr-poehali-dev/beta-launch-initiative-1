import { useState } from "react";
import { Link } from "react-router-dom";

const countries = [
  {
    id: "usa",
    flag: "🇺🇸",
    name: "США",
    subtitle: "Земля обетованная",
    period: "1920–1980-е",
    total: "~750 000",
    color: "border-blue-400",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    tagBg: "bg-blue-100",
    overview:
      "США стали главным центром притяжения русской эмиграции — особенно после Второй мировой войны. Свобода, экономические возможности и большая ранее эмигрировавшая еврейская диаспора делали Америку идеальным убежищем.",
    waves: [
      { label: "До 1917 года", desc: "Волна еврейских переселенцев из Российской империи — 2 млн человек за 1880–1914 годы" },
      { label: "1920-е", desc: "Белая эмиграция через Европу; интеллигенция, военные, дворяне" },
      { label: "1940-е", desc: "DP-лагеря Германии → США после принятия Displaced Persons Act 1948 года" },
      { label: "1970–80-е", desc: "Третья волна: диссиденты, евреи по программе воссоединения семей" },
    ],
    cities: ["Нью-Йорк (Брайтон-Бич)", "Сан-Франциско", "Лос-Анджелес", "Чикаго"],
    culture: [
      "Издательство «Новый журнал» (Нью-Йорк, 1942 — до сих пор)",
      "«Новое русское слово» — старейшая русская газета в США",
      "Свято-Троицкий монастырь в Джорданвилле — духовный центр",
      "Русские православные приходы по всей стране",
    ],
    famous: ["Владимир Набоков", "Игорь Стравинский", "Сергей Рахманинов", "Александр Солженицын", "Иосиф Бродский"],
    challenges:
      "Языковой барьер был главным препятствием. Интеллигенция первой волны часто отказывалась учить английский — из принципа или надежды на скорое возвращение. Многие работали не по специальности, хотя со временем адаптировались лучше, чем в Европе.",
    legacy:
      "США сохранили крупнейшую в мире русскую диаспору. Брайтон-Бич в Нью-Йорке до сих пор называют «Маленькой Одессой». Русско-американская культура обогатила американское искусство, науку и музыку.",
  },
  {
    id: "france",
    flag: "🇫🇷",
    name: "Франция",
    subtitle: "Столица русского мира",
    period: "1920–1940-е",
    total: "~400 000",
    color: "border-red-400",
    accentBg: "bg-red-50",
    accentText: "text-red-700",
    tagBg: "bg-red-100",
    overview:
      "Франция — и прежде всего Париж — стала культурной столицей русского зарубежья. Здесь жила большая часть литературной и художественной элиты. «Париж — это Россия», — говорили эмигранты.",
    waves: [
      { label: "1920–1922", desc: "Основная волна через Константинополь: офицеры Врангеля, дворяне, интеллигенция" },
      { label: "1924–1929", desc: "Дополнительный приток из Германии после экономического краха немецкой марки" },
      { label: "1940", desc: "Немецкая оккупация: часть эмигрантов бежит в США и Южную Америку" },
    ],
    cities: ["Париж (Пасси, Отёй, Монпарнас)", "Ницца", "Лион", "Марсель"],
    culture: [
      "«Последние новости» и «Возрождение» — ведущие газеты",
      "«Современные записки» — главный литературный журнал",
      "YMCA-Press — издательство, работающее по сей день",
      "Русская консерватория, балетные школы",
    ],
    famous: ["Иван Бунин (Нобелевская премия 1933)", "Марина Цветаева", "Александр Куприн", "Дмитрий Мережковский", "Тэффи"],
    challenges:
      "Французское общество поначалу было гостеприимным, но экономический кризис 1930-х ударил по эмигрантам сильнее всего. Немецкая оккупация поставила многих перед мучительным выбором: коллаборация, сопротивление или пассивное ожидание.",
    legacy:
      "Парижская нота — целое литературное движение, возникшее в эмиграции. Здесь были написаны лучшие произведения Бунина, Набокова, Газданова. Русский Париж остался в истории как один из самых ярких культурных феноменов XX века.",
  },
  {
    id: "germany",
    flag: "🇩🇪",
    name: "Германия",
    subtitle: "Берлин — первая столица",
    period: "1918–1933",
    total: "~360 000",
    color: "border-neutral-400",
    accentBg: "bg-neutral-50",
    accentText: "text-neutral-700",
    tagBg: "bg-neutral-100",
    overview:
      "Берлин 1920-х годов был первой и самой бурной столицей русской эмиграции. Слабая марка делала жизнь дешёвой, близость к России давала надежду на возвращение. Но приход Гитлера к власти в 1933 году опустошил русский Берлин.",
    waves: [
      { label: "1918–1921", desc: "Первые беженцы через Прибалтику и Финляндию, преимущественно интеллигенция" },
      { label: "1922–1923", desc: "Пик — гиперинфляция делает Германию раем для тех, кто имел валюту" },
      { label: "1933", desc: "Массовый исход после прихода нацистов — в Францию, Чехию, США" },
    ],
    cities: ["Берлин (Шарлоттенбург — «Шарлоттенград»)", "Мюнхен", "Гамбург"],
    culture: [
      "Газета «Руль» — главное издание Берлина",
      "Издательство «Слово» и «Петрополис»",
      "Русский научный институт",
      "«Дом искусств» — центр культурной жизни",
    ],
    famous: ["Владимир Набоков (ранние романы)", "Андрей Белый", "Алексей Ремизов", "Виктор Шкловский", "Илья Эренбург"],
    challenges:
      "Стремительный взлёт и падение. Русский Берлин просуществовал менее 15 лет. После 1923 года стабилизация марки сделала жизнь дорогой, а 1933 год поставил окончательную точку. Еврейские эмигранты оказались под двойной угрозой — от нацистов и советских агентов.",
    legacy:
      "Берлин дал русской эмиграции феномен «берлинского издательского бума» — за 1920–1924 годы там вышло больше русских книг, чем за всё последующее десятилетие в Париже. Именно здесь начинал Набоков-Сирин.",
  },
  {
    id: "china",
    flag: "🇨🇳",
    name: "Китай",
    subtitle: "Восточная ветвь",
    period: "1917–1949",
    total: "~250 000",
    color: "border-yellow-400",
    accentBg: "bg-yellow-50",
    accentText: "text-yellow-700",
    tagBg: "bg-yellow-100",
    overview:
      "Восточная ветвь русской эмиграции — совершенно особый мир. Харбин, основанный как город Китайско-Восточной железной дороги, стал русским городом ещё до революции. После 1917 года сюда хлынули сибирские беженцы.",
    waves: [
      { label: "1917–1920", desc: "Бегство через Сибирь и Забайкалье после поражения Колчака" },
      { label: "1920–1930-е", desc: "Стабильная жизнь в Харбине и Шанхае — самодостаточные общины" },
      { label: "1945–1949", desc: "Советская оккупация Маньчжурии и победа Мао — массовый исход в Австралию и США" },
    ],
    cities: ["Харбин", "Шанхай (Французская концессия)", "Тяньцзинь", "Пекин"],
    culture: [
      "«Харбинское время» и «Рубеж» — ведущие газеты",
      "Русские гимназии и университеты КВЖД",
      "Православные соборы (Никольский собор в Харбине)",
      "Русские рестораны, театры, балетные школы",
    ],
    famous: ["Валерий Перелешин (поэт)", "Арсений Несмелов (поэт)", "Михаил Щербаков (писатель)"],
    challenges:
      "Изоляция от главных центров эмиграции создавала культурный вакуум. Японская оккупация Маньчжурии, советское давление на КВЖД, а затем победа коммунистов в Китае последовательно разрушали восточную ветвь. Многие репатриировались в СССР — и попали в лагеря.",
    legacy:
      "Харбинская литература — самостоятельное явление в русской культуре. Поэты «харбинской ноты» создали уникальную лирику, проникнутую тоской по Сибири и ощущением двойной чужбины — вдали и от России, и от Европы.",
  },
  {
    id: "argentina",
    flag: "🇦🇷",
    name: "Аргентина",
    subtitle: "Южноамериканский приют",
    period: "1920–1950-е",
    total: "~100 000",
    color: "border-sky-400",
    accentBg: "bg-sky-50",
    accentText: "text-sky-700",
    tagBg: "bg-sky-100",
    overview:
      "Южная Америка принимала русских эмигрантов двумя потоками. Аргентина стала крупнейшим центром благодаря открытой иммиграционной политике и дешевизне сельскохозяйственных земель.",
    waves: [
      { label: "1890–1914", desc: "Еврейские переселенцы из Российской империи — фермерские колонии в пампасах" },
      { label: "1920–1930-е", desc: "Белая эмиграция: офицеры и дворяне, добравшиеся через Европу" },
      { label: "1945–1950-е", desc: "DP-лагеря: вторая волна, преимущественно украинцы и белорусы" },
    ],
    cities: ["Буэнос-Айрес", "Росарио", "Кордова"],
    culture: [
      "Русский клуб в Буэнос-Айресе",
      "Православный Свято-Троицкий собор",
      "Еврейские сельскохозяйственные колонии (ИКО)",
      "Русскоязычные газеты 1920–1940-х",
    ],
    famous: ["Борис Широкий (писатель)", "Русские фермеры пампасов"],
    challenges:
      "Огромные расстояния от культурных центров Европы. Языковой барьер (испанский) оказался значительным. Многие русские фермеры в пампасах полностью ассимилировались уже во втором поколении, утратив язык и культуру.",
    legacy:
      "Аргентинская ветвь менее известна, чем европейская, но она сохранила уникальные общины русских фермеров — потомков еврейских переселенцев, создавших кооперативное сельское хозяйство в Южной Америке.",
  },
  {
    id: "ussr",
    flag: "🇷🇺",
    name: "СССР",
    subtitle: "Те, кто остался и вернулся",
    period: "1917–1953",
    total: "Миллионы",
    color: "border-rose-600",
    accentBg: "bg-rose-50",
    accentText: "text-rose-700",
    tagBg: "bg-rose-100",
    overview:
      "Особый «случай» — не эмиграция, а её противоположность. Советская власть активно работала с эмигрантами: одних заманивала вернуться, других преследовала через агентуру. Для понимания эмиграции необходимо знать, что происходило с теми, кто остался или вернулся.",
    waves: [
      { label: "Репатрианты 1920-х", desc: "Часть эмигрантов поверила советской амнистии и вернулась — многие были арестованы" },
      { label: "Операция «Трест»", desc: "ГПУ создало фиктивную подпольную организацию, чтобы выманить лидеров эмиграции" },
      { label: "После 1945", desc: "По Ялтинскому соглашению союзники выдали СССР советских граждан — большинство попало в ГУЛАГ" },
      { label: "«Сменовеховство»", desc: "Интеллигенция, принявшая советскую власть и вернувшаяся, — судьбы трагические" },
    ],
    cities: ["Москва", "Ленинград", "Лагеря ГУЛАГа"],
    culture: [
      "Журнал «Смена вех» — идеология примирения с советской властью",
      "Писатели-«возвращенцы»: Куприн, Цветаева (трагические судьбы)",
      "Советская пропаганда использовала образы тоскующих эмигрантов",
      "НКВД вёл картотеки на всех известных эмигрантов",
    ],
    famous: ["Марина Цветаева (вернулась, погибла)", "Александр Куприн (вернулся, умер вскоре)", "Генерал Кутепов (похищен ОГПУ)", "Генерал Миллер (похищен НКВД)"],
    challenges:
      "Для тех, кто вернулся добровольно, советская власть редко выполняла обещания. Цветаева вернулась в 1939-м — её муж был расстрелян, дочь арестована, сама она покончила с собой в 1941-м. Куприн вернулся больным стариком и умер через год. Ялтинские репатрианты 1945-го в массе своей прошли через лагеря.",
    legacy:
      "История взаимоотношений эмиграции и СССР — это история слежки, провокаций, похищений и трагических возвращений. Она показывает, почему большинство эмигрантов категорически отказывались от репатриации — и оказывались правы.",
  },
];

const stats = [
  { label: "Всего эмигрировало", value: "~2 млн", note: "Первая волна, 1917–1922" },
  { label: "Стран приёма", value: "50+", note: "На всех континентах" },
  { label: "Крупнейшая диаспора", value: "США", note: "Сегодня ~3 млн русскоязычных" },
  { label: "Нобелевских лауреатов", value: "2", note: "Бунин (1933), Бродский (1987)" },
];

export default function Countries() {
  const [active, setActive] = useState("usa");
  const country = countries.find((c) => c.id === active)!;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-neutral-900 px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">
          ← Русское Зарубережье
        </Link>
        <nav className="flex gap-6">
          <a href="#compare" className="text-neutral-400 hover:text-white transition-colors uppercase text-xs tracking-widest">
            Сравнение
          </a>
        </nav>
      </header>

      {/* Hero */}
      <div className="bg-neutral-900 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Страны эмиграции</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Куда бежали<br />русские?
          </h1>
          <p className="text-neutral-400 text-xl max-w-2xl">
            Эмигранты рассеялись по всему миру — но судьба в каждой стране складывалась по-разному. Сравните условия, культуру и итоги.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-700 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-neutral-900 p-6">
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">{s.label}</p>
                <p className="text-neutral-600 text-xs">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Country selector + detail */}
      <div id="compare" className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {countries.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex items-center gap-2 px-4 py-2 border text-sm font-medium transition-all duration-200 ${
                active === c.id
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className={`border-t-4 ${country.color} bg-white`}>
          {/* Top */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-neutral-100">
            <div className="lg:col-span-2 p-8 lg:p-12 border-r border-neutral-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{country.flag}</span>
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900">{country.name}</h2>
                  <p className={`text-sm ${country.accentText} font-medium`}>{country.subtitle}</p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed text-base">{country.overview}</p>
            </div>
            <div className="p-8 lg:p-10 flex flex-col gap-4 justify-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Период</p>
                <p className="text-xl font-bold text-neutral-900">{country.period}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Численность</p>
                <p className="text-xl font-bold text-neutral-900">{country.total}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Центры</p>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city) => (
                    <span key={city} className={`text-xs px-2 py-1 ${country.tagBg} ${country.accentText}`}>
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Waves */}
          <div className="p-8 lg:p-12 border-b border-neutral-100">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Волны и этапы</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {country.waves.map((w) => (
                <div key={w.label} className="flex gap-4">
                  <div className={`shrink-0 text-xs font-bold px-2 py-1 h-fit ${country.tagBg} ${country.accentText} whitespace-nowrap`}>
                    {w.label}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Culture + Famous */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-neutral-100">
            <div className="p-8 lg:p-10 border-r border-neutral-100">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Культура и институты</p>
              <ul className="flex flex-col gap-3">
                {country.culture.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Известные эмигранты</p>
              <ul className="flex flex-col gap-2">
                {country.famous.map((f) => (
                  <li key={f} className="text-sm font-medium text-neutral-900 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${country.accentText.replace("text-", "bg-")}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges + Legacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10 border-r border-neutral-100">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Трудности</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{country.challenges}</p>
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Наследие</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{country.legacy}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-neutral-50 px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Сводная таблица</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-10">Сравнение стран</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="text-left p-4 font-medium uppercase text-xs tracking-widest">Страна</th>
                  <th className="text-left p-4 font-medium uppercase text-xs tracking-widest">Численность</th>
                  <th className="text-left p-4 font-medium uppercase text-xs tracking-widest">Период</th>
                  <th className="text-left p-4 font-medium uppercase text-xs tracking-widest">Главный центр</th>
                  <th className="text-left p-4 font-medium uppercase text-xs tracking-widest">Культурный вклад</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr
                    key={c.id}
                    className={`border-b border-neutral-200 cursor-pointer hover:bg-white transition-colors ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
                    onClick={() => { setActive(c.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    <td className="p-4 font-semibold">
                      <span className="mr-2">{c.flag}</span>{c.name}
                    </td>
                    <td className="p-4 text-neutral-600">{c.total}</td>
                    <td className="p-4 text-neutral-600">{c.period}</td>
                    <td className="p-4 text-neutral-600">{c.cities[0]}</td>
                    <td className="p-4 text-neutral-600">{c.legacy.slice(0, 80)}…</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-900 px-6 py-10 text-center">
        <Link to="/" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
